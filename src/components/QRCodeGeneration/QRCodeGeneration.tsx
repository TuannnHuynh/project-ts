import { useState } from "react";
import QRCode from "react-qr-code";

const QRCodeGeneration = () => {
  const [qrCode, setQrCode] = useState<string>("");
  const [input, setInput] = useState<string>("");
  const handleGenerationCode = () => {
    setQrCode(input);
    setInput("");
  };
  return (
    <div className="flex h-screen flex-col items-center">
      <h2 className="my-10 text-5xl font-bold text-[#333]">
        QR Code Generation
      </h2>
      <div className="input-group mb-5 flex">
        <input
          className="w-[250px] rounded-lg rounded-e-none border-[2px] border-e-0 border-[#333] px-3 py-2 outline-none"
          type="text"
          name="qr-code"
          placeholder="Enter your value here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="rounded-lg rounded-s-none bg-[#333] px-3 text-[#fff]"
          onClick={handleGenerationCode}
        >
          Generation
        </button>
      </div>
      <div>
        <QRCode id="qr-code-value" value={qrCode} size={400} />
      </div>
    </div>
  );
};

export default QRCodeGeneration;
