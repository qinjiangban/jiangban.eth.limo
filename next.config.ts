import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // IPFS 网关按「目录 + index.html」解析 URL，不做 .html 文件猜测。
  // 开启后 /en 导出为 en/index.html、/experience 导出为 experience/index.html，
  // 站点内所有链接也会自动带上结尾斜杠，适配 ENS(.limo) / IPFS 网关。
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // 某些受限沙箱环境无法为 Next 内置类型检查 spawn 子进程（EPERM）。
  // 此时可设置 NEXT_SKIP_TYPECHECK=1 跳过构建期类型检查，并单独运行 `tsc --noEmit`。
  typescript: {
    ignoreBuildErrors: process.env.NEXT_SKIP_TYPECHECK === "1",
  },
  experimental: {
    // 受限沙箱环境无法为构建 worker 建立子进程管道（EPERM），可改用 worker 线程。
    // 该选项只影响构建期的进程模型，不改变产物；正常 CI / 本地构建无需开启。
    workerThreads: process.env.NEXT_BUILD_WORKER_THREADS === "1",
    // 站点使用两个根布局（中文 / 英文），需要 global-not-found 提供带 lang 的 404 页
    globalNotFound: true,
  },
};

export default nextConfig;
