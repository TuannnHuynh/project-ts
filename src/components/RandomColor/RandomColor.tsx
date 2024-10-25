import { useCallback, useEffect, useState } from "react";

const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState<string>("hex");
  const [color, setColor] = useState<string>("#000000");

  const randomColorUtility = (length: number): number => {
    return Math.floor(Math.random() * length);
  };

  const handleCreateRandomHexColor = useCallback((): void => {
    const hex: (number | string)[] = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      "A",
      "B",
      "C",
      "D",
      "F",
    ];
    let hexColor: string = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += String(hex[randomColorUtility(hex.length)]);
    }
    setColor(hexColor);
  }, []);

  const handleCreateRandomRgbColor = useCallback((): void => {
    const r: number = randomColorUtility(256);
    const g: number = randomColorUtility(256);
    const b: number = randomColorUtility(256);
    setColor(`rgb(${r},${g},${b})`);
  }, []);

  useEffect(() => {
    if (typeOfColor === "hex") handleCreateRandomHexColor();
    else handleCreateRandomRgbColor();
  }, [typeOfColor, handleCreateRandomHexColor, handleCreateRandomRgbColor]);

  return (
    <div
      style={{ backgroundColor: color }}
      className="h-auto py-14 text-center"
    >
      <h2 className="mb-6 text-center text-4xl font-bold text-[#fff]">
        Random Color
      </h2>
      <button
        className="w-8/12 bg-slate-50 px-5 py-[10px] sm:w-auto"
        onClick={() => setTypeOfColor("hex")}
      >
        Create HEX color
      </button>
      <button
        className="mx-6 my-4 w-8/12 bg-slate-50 px-5 py-[10px] sm:w-auto"
        onClick={() => setTypeOfColor("rbg")}
      >
        Create RGB Color
      </button>
      <button
        className="w-8/12 bg-slate-50 px-5 py-[10px] sm:w-auto"
        onClick={
          typeOfColor === "hex"
            ? handleCreateRandomHexColor
            : handleCreateRandomRgbColor
        }
      >
        Generate Random color
      </button>
      <div className="mt-[50px] flex flex-col items-center justify-center text-[60px] text-[#fff]">
        <h3>{typeOfColor}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
};

export default RandomColor;
