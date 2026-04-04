import { FiX } from "react-icons/fi";
import { FaWeixin } from "react-icons/fa";

interface QRCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QRCodeModal({ isOpen, onClose }: QRCodeModalProps) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm transition-opacity"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-sm bg-white rounded-3xl p-8 shadow-2xl flex flex-col items-center transform transition-all animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-zinc-600 hover:bg-zinc-100 rounded-full transition-colors"
        >
          <FiX className="w-5 h-5" />
        </button>

        <div className="w-12 h-12 bg-[#07C160]/10 rounded-2xl flex items-center justify-center mb-4">
          <FaWeixin className="w-7 h-7 text-[#07C160]" />
        </div>
        
        <h3 className="text-xl font-bold text-black mb-2">WeChat Channel</h3>
        <p className="text-zinc-500 text-sm text-center mb-8">
          Scan the QR code below using WeChat to follow my channel
        </p>

        <div className="w-48 h-48 bg-zinc-100 rounded-2xl border-2 border-zinc-100 flex items-center justify-center overflow-hidden">
       
          <img src="/wechat-qr.png" alt="WeChat QR" width={192} height={192} />
        </div>
      </div>
    </div>
  );
}