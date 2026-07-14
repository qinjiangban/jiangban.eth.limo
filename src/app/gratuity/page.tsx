"use client";
import BackHome from "@/components/BackHome";

import { useState, useEffect } from "react";
import { Attribution } from "ox/erc8021";
import { FaEthereum } from "react-icons/fa";
import { FiArrowLeft, FiCopy, FiCheck } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

const RECIPIENT_ADDRESS = "0x6e5C9aFa78E4a476600279b8dFDa29572e5F2a43";
const ENS_NAME = "jiangban.eth";
const BASE_BUILDER_CODE = process.env.NEXT_PUBLIC_BASE_BUILDER_CODE?.trim();
const BASE_DATA_SUFFIX = BASE_BUILDER_CODE
    ? Attribution.toDataSuffix({ codes: [BASE_BUILDER_CODE] })
    : undefined;

const NETWORKS = {
    base: {
        id: "base",
        name: "Base Mainnet",
        icon: <Image src="/logo/base.png" alt="Base Logo" width={20} height={20} className="w-5 h-5 rounded-full object-cover" unoptimized />,
        chainId: "0x2105", // 8453
        explorer: "https://basescan.org",
        rpcUrls: ["https://mainnet.base.org"],
        nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
        tokens: {
            ETH: { decimals: 18, address: null },
            USDC: { decimals: 6, address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913" }
        }
    },
    ethereum: {
        id: "ethereum",
        name: "Ethereum Mainnet",
        icon: <Image src="/logo/eth.png" alt="Ethereum Logo" width={20} height={20} className="w-5 h-5 rounded-full object-cover" unoptimized />,
        chainId: "0x1", // 1
        explorer: "https://etherscan.io",
        rpcUrls: ["https://eth.llamarpc.com"],
        nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
        tokens: {
            ETH: { decimals: 18, address: null },
            USDC: { decimals: 6, address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48" }
        }
    }
};

type NetworkId = keyof typeof NETWORKS;
type TokenId = "USDC" | "ETH";

// Helper to encode ERC20 transfer data
function encodeERC20Transfer(to: string, amountHex: string) {
    // ERC20 transfer(address,uint256) signature
    const functionSelector = "0xa9059cbb";
    const paddedAddress = to.toLowerCase().replace("0x", "").padStart(64, "0");
    const paddedAmount = amountHex.replace("0x", "").padStart(64, "0");
    return functionSelector + paddedAddress + paddedAmount;
}

export default function Web3TipPage() {
    const [network, setNetwork] = useState<NetworkId>("base");
    const [token, setToken] = useState<TokenId>("USDC");
    const [amount, setAmount] = useState("5"); // 默认打赏 5 USDC
    const [status, setStatus] = useState<"idle" | "connecting" | "pending" | "success" | "error">("idle");
    const [txHash, setTxHash] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    // 复制状态
    const [copiedAddress, setCopiedAddress] = useState(false);
    const [copiedENS, setCopiedENS] = useState(false);

    // 检查是否有钱包
    const [hasWallet, setHasWallet] = useState(true);

    // 切换代币时自动调整默认金额
    useEffect(() => {
        if (token === "ETH") setAmount("0.002");
        if (token === "USDC") setAmount("5");

        // @ts-ignore
        setHasWallet(typeof window !== "undefined" && !!window.ethereum);
    }, [token]);

    const copyToClipboard = async (text: string, type: "address" | "ens") => {
        try {
            await navigator.clipboard.writeText(text);
            if (type === "address") {
                setCopiedAddress(true);
                setTimeout(() => setCopiedAddress(false), 2000);
            } else {
                setCopiedENS(true);
                setTimeout(() => setCopiedENS(false), 2000);
            }
        } catch (err) {
            console.error("Failed to copy", err);
        }
    };

    const handleTip = async () => {
        try {
            setErrorMessage("");

            const numAmount = parseFloat(amount);
            if (isNaN(numAmount) || numAmount <= 0) {
                setErrorMessage("请输入有效的打赏金额");
                setStatus("error");
                return;
            }

            // @ts-ignore
            if (!window.ethereum) {
                setErrorMessage("请先安装 MetaMask 或其他 Web3 钱包插件！");
                setStatus("error");
                return;
            }

            setStatus("connecting");

            // 1. 请求连接钱包
            // @ts-ignore
            const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
            const account = accounts[0];

            // 2. 切换到目标网络
            const targetNetwork = NETWORKS[network];
            try {
                // @ts-ignore
                await window.ethereum.request({
                    method: "wallet_switchEthereumChain",
                    params: [{ chainId: targetNetwork.chainId }],
                });
            } catch (switchError: any) {
                if (switchError.code === 4902) {
                    try {
                        // @ts-ignore
                        await window.ethereum.request({
                            method: "wallet_addEthereumChain",
                            params: [
                                {
                                    chainId: targetNetwork.chainId,
                                    chainName: targetNetwork.name,
                                    rpcUrls: targetNetwork.rpcUrls,
                                    nativeCurrency: targetNetwork.nativeCurrency,
                                    blockExplorerUrls: [targetNetwork.explorer],
                                },
                            ],
                        });
                    } catch (addError) {
                        throw new Error(`添加 ${targetNetwork.name} 网络失败`);
                    }
                } else {
                    throw new Error(`切换网络失败，请在钱包中手动切换到 ${targetNetwork.name}`);
                }
            }

            setStatus("pending");

            // 3. 准备交易参数
            const tokenConfig = targetNetwork.tokens[token];
            // 计算代币的最小单位 (Wei 或 MWei)
            const amountInUnits = BigInt(Math.floor(numAmount * Math.pow(10, tokenConfig.decimals)));
            const amountHex = "0x" + amountInUnits.toString(16);

            let txParams: any = {
                from: account,
            };

            if (token === "ETH") {
                // 原生代币转账
                txParams.to = RECIPIENT_ADDRESS;
                txParams.value = amountHex;
            } else if (token === "USDC") {
                // ERC20 代币转账
                txParams.to = tokenConfig.address; // 发送到 USDC 合约
                txParams.data = encodeERC20Transfer(RECIPIENT_ADDRESS, amountHex);
                txParams.value = "0x0";
            }

            // 仅 Base Mainnet 自动附加 Builder Code attribution
            if (targetNetwork.id === "base" && BASE_DATA_SUFFIX) {
                txParams.dataSuffix = BASE_DATA_SUFFIX;
            }

            // 4. 发起交易
            // @ts-ignore
            const tx = await window.ethereum.request({
                method: "eth_sendTransaction",
                params: [txParams],
            });

            setTxHash(tx);
            setStatus("success");
        } catch (error: any) {
            console.error(error);
            setErrorMessage(error.message || "交易被取消或发生错误");
            setStatus("error");
        }
    };

    return (
        <div className="flex flex-col h-screen items-center justify-center p-4 font-sans selection:bg-brand selection:text-white overflow-hidden">
            <main className="w-full max-w-[500px] flex flex-col items-center gap-4 h-full">


                {/* 打赏面板 */}
                <div className="w-full bg-white rounded-[24px] p-5 sm:p-6 shadow-sm flex flex-col items-center text-center flex-1 overflow-y-auto hide-scrollbar">
                    {/* 返回按钮 */}
                    <div className="w-full flex justify-start shrink-0 my-1">
                        <BackHome />
                    </div>

                    {/* 收款地址和 ENS 展示区 */}
                    <div className="w-full bg-zinc-50 rounded-[16px] p-4 mb-4 text-left border border-zinc-100 flex flex-col gap-3 shrink-0">
                        {/* ENS 域名 */}
                        <div className="flex flex-col gap-1">
                            <label className="text-[11px] font-semibold text-zinc-500 tracking-wider">ENS Domain</label>
                            <div className="flex items-center justify-between bg-white border border-zinc-200 rounded-xl p-2.5">
                                <span className="text-[13px] font-bold text-zinc-800">{ENS_NAME}</span>
                                <button
                                    onClick={() => copyToClipboard(ENS_NAME, "ens")}
                                    className="text-zinc-400 hover:text-brand transition-colors flex items-center justify-center p-1.5 rounded-md hover:bg-zinc-50"
                                    title="复制 ENS"
                                >
                                    {copiedENS ? <FiCheck className="w-3.5 h-3.5 text-green-500" /> : <FiCopy className="w-3.5 h-3.5" />}
                                </button>
                            </div>
                        </div>

                        {/* EVM 地址 */}
                        <div className="flex flex-col gap-1">
                            <label className="text-[11px] font-semibold text-zinc-500 tracking-wider">EVM Address</label>
                            <div className="flex items-center justify-between bg-white border border-zinc-200 rounded-xl p-2.5">
                                <span className="text-[11px] sm:text-xs font-mono text-zinc-600 break-all pr-2">{RECIPIENT_ADDRESS}</span>
                                <button
                                    onClick={() => copyToClipboard(RECIPIENT_ADDRESS, "address")}
                                    className="text-zinc-400 hover:text-brand transition-colors flex items-center justify-center p-1.5 rounded-md hover:bg-zinc-50 shrink-0"
                                    title="复制地址"
                                >
                                    {copiedAddress ? <FiCheck className="w-3.5 h-3.5 text-green-500" /> : <FiCopy className="w-3.5 h-3.5" />}
                                </button>
                            </div>
                        </div>
                    </div>

                    {!hasWallet && (
                        <div className="w-full mb-4 p-3 bg-orange-50 border border-orange-100 rounded-[16px] text-left shrink-0">
                            <p className="text-[13px] text-orange-800 flex items-start gap-2">
                                <span className="text-base leading-none">💡</span>
                                <span>未检测到 Web3 钱包。<br />您可以复制上方地址，使用您手机上的钱包 App 进行转账支持。</span>
                            </p>
                        </div>
                    )}

                    <div className="w-full flex flex-col gap-3 mb-4 text-left shrink-0">
                        {/* 网络选择 */}
                        <div>
                            <label className="block text-[11px] font-semibold text-zinc-500 mb-1.5 tracking-wider">网络 (Network)</label>
                            <div className="grid grid-cols-2 gap-2.5">
                                {(Object.keys(NETWORKS) as NetworkId[]).map((netId) => (
                                    <button
                                        key={netId}
                                        onClick={() => setNetwork(netId)}
                                        className={`py-2.5 px-3 rounded-xl border-2 transition-all flex items-center justify-center gap-2 text-[13px] ${network === netId
                                            ? "border-brand bg-brand/5 text-brand font-semibold"
                                            : "border-zinc-100 bg-zinc-50 text-zinc-600 hover:border-zinc-200"
                                            }`}
                                    >
                                        {NETWORKS[netId].icon}
                                        {NETWORKS[netId].name}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* 代币选择 */}
                        <div>
                            <label className="block text-[11px] font-semibold text-zinc-500 mb-1.5 tracking-wider">代币 (Token)</label>
                            <div className="grid grid-cols-2 gap-2.5">
                                <button
                                    onClick={() => setToken("USDC")}
                                    className={`py-2.5 px-3 rounded-xl border-2 transition-all flex items-center justify-center gap-2 text-[13px] ${token === "USDC"
                                        ? "border-brand bg-brand/5 text-brand font-semibold"
                                        : "border-zinc-100 bg-zinc-50 text-zinc-600 hover:border-zinc-200"
                                        }`}
                                >
                                    <Image src="/logo/usdc.png" alt="USDC Logo" width={18} height={18} className="w-4.5 h-4.5 rounded-full object-cover" unoptimized />
                                    USDC
                                </button>
                                <button
                                    onClick={() => setToken("ETH")}
                                    className={`py-2.5 px-3 rounded-xl border-2 transition-all flex items-center justify-center gap-2 text-[13px] ${token === "ETH"
                                        ? "border-brand bg-brand/5 text-brand font-semibold"
                                        : "border-zinc-100 bg-zinc-50 text-zinc-600 hover:border-zinc-200"
                                        }`}
                                >
                                    <FaEthereum className={`w-4.5 h-4.5 ${token === "ETH" ? "text-brand" : "text-[#627EEA]"}`} />
                                    ETH
                                </button>
                            </div>
                        </div>

                        {/* 金额输入 */}
                        <div>
                            <label className="block text-[11px] font-semibold text-zinc-500 mb-1.5 tracking-wider">金额 (Amount)</label>
                            <div className="relative flex items-center">
                                <div className="absolute left-3.5 top-1/2 -translate-y-1/2">
                                    {token === "USDC" ? (
                                        <Image src="/logo/usdc.png" alt="USDC" width={18} height={18} className="w-4.5 h-4.5 opacity-50 rounded-full" unoptimized />
                                    ) : (
                                        <FaEthereum className="w-4.5 h-4.5 text-zinc-400" />
                                    )}
                                </div>
                                <input
                                    type="number"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    className="w-full bg-zinc-50 border-2 border-zinc-100 rounded-xl py-2.5 pl-10 pr-14 text-black font-semibold text-[14px] outline-none focus:border-brand transition-colors"
                                    placeholder="0.00"
                                    min="0"
                                    step="any"
                                />
                                <div className="absolute right-3.5 top-1/2 -translate-y-1/2 font-semibold text-[13px] text-zinc-400">
                                    {token}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-auto w-full pt-2">
                        {status === "idle" || status === "error" ? (
                            <button
                                onClick={handleTip}
                                className="w-full bg-brand hover:bg-brand/90 text-white font-bold py-3.5 px-6 rounded-2xl transition-colors shadow-sm flex items-center justify-center gap-2 text-[15px]"
                            >
                                打赏 {amount || "0"} {token}
                            </button>
                        ) : status === "connecting" ? (
                            <button disabled className="w-full bg-zinc-200 text-zinc-500 font-bold py-3.5 px-6 rounded-2xl cursor-not-allowed flex items-center justify-center gap-2 text-[15px]">
                                <div className="w-4 h-4 border-2 border-zinc-400 border-t-transparent rounded-full animate-spin"></div>
                                正在连接钱包...
                            </button>
                        ) : status === "pending" ? (
                            <button disabled className="w-full bg-brand/80 text-white font-bold py-3.5 px-6 rounded-2xl cursor-not-allowed flex items-center justify-center gap-2 text-[15px]">
                                <div className="w-4 h-4 border-2 border-white/80 border-t-transparent rounded-full animate-spin"></div>
                                等待钱包确认...
                            </button>
                        ) : (
                            <div className="w-full bg-[#07C160]/10 border border-[#07C160]/20 rounded-2xl p-4 text-center">
                                <p className="text-[#07C160] font-bold mb-1 text-[14px]">🎉 打赏成功！感谢支持！</p>
                                <Link
                                    href={`${NETWORKS[network].explorer}/tx/${txHash}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-[11px] text-[#07C160] hover:underline font-mono break-all"
                                >
                                    查看交易: {txHash.substring(0, 8)}...{txHash.substring(txHash.length - 6)}
                                </Link>
                                <button
                                    onClick={() => setStatus("idle")}
                                    className="block mx-auto mt-2 text-[11px] font-medium text-zinc-500 hover:text-zinc-700 underline"
                                >
                                    继续打赏
                                </button>
                            </div>
                        )}

                        {status === "error" && errorMessage && (
                            <p className="mt-2 text-[13px] text-red-500 font-medium">{errorMessage}</p>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}
