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
    <div className="flex flex-col items-center py-10 md:py-24">
      <h2 className="mb-10 text-center text-3xl font-bold text-[#333] sm:text-5xl">
        QR Code Generation
      </h2>
      <div className="input-group mb-5 flex">
        <input
          className="rounded-lg rounded-e-none border-[2px] border-e-0 border-[#333] px-3 py-2 outline-none md:w-[250px] lg:w-[300px]"
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
      <div className="px-4 md:px-0">
        <QRCode
          className="h-full w-full md:h-[350px] md:w-[350px]"
          id="qr-code-value"
          value={qrCode}
        />
      </div>
    </div>
  );
};

export default QRCodeGeneration;
