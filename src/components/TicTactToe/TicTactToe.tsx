import { useEffect, useState } from "react";

type TSquareProps = {
  value: string;
  onClick: () => void;
};

const Square = ({ value, onClick }: TSquareProps): JSX.Element => {
  return (
    <button
      onClick={onClick}
      className="float-left -me-[2px] -mt-[2px] h-[100px] w-[100px] border-[2px] border-red-400 text-4xl"
    >
      {value}
    </button>
  );
};

const TicTactToe = () => {
  const [squares, setSquares] = useState<string[]>(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState<boolean>(true);
  const [status, setStatus] = useState("");

  const handleClick = (getCurrentSquare: number): void => {
    const cpySquares: string[] = [...squares];
    cpySquares[getCurrentSquare] = isXTurn ? "X" : "O";
    setIsXTurn(!isXTurn);
    setSquares(cpySquares);
  };

  const getWinner = (squares: string[]): string | null => {
    const winningPatterns: number[][] = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
    ];
    for (let i = 0; i < winningPatterns.length; i++) {
      const [x, y, z] = winningPatterns[i];
      if (
        squares[x] &&
        squares[x] === squares[y] &&
        squares[x] === squares[z]
      ) {
        return squares[x];
      }
    }
    return null;
  };

  const handleRestart = () => {
    setIsXTurn(true);
    setSquares(Array(9).fill(""));
  };

  useEffect(() => {
    const winner = getWinner(squares);
    if (!winner && squares.every((item: string) => item !== "")) {
      setStatus(`This is a draw ! Please restart the game`);
    } else if (winner) {
      setStatus(`Winner is ${getWinner(squares)}. Please restart the game`);
    } else {
      setStatus(`Next player is ${isXTurn ? "X" : "O"}`);
    }
  }, [squares, isXTurn]);
  return (
    <div className="flex flex-col items-center bg-slate-300 py-12">
      <h2 className="text-3xl font-bold sm:text-5xl">Tic Tac Toe</h2>
      <div className="container mt-8 flex flex-col items-center">
        <div className="row">
          <Square value={squares[0]} onClick={() => handleClick(0)} />
          <Square value={squares[1]} onClick={() => handleClick(1)} />
          <Square value={squares[2]} onClick={() => handleClick(2)} />
        </div>
        <div className="row">
          <Square value={squares[3]} onClick={() => handleClick(3)} />
          <Square value={squares[4]} onClick={() => handleClick(4)} />
          <Square value={squares[5]} onClick={() => handleClick(5)} />
        </div>
        <div className="row">
          <Square value={squares[6]} onClick={() => handleClick(6)} />
          <Square value={squares[7]} onClick={() => handleClick(7)} />
          <Square value={squares[8]} onClick={() => handleClick(8)} />
        </div>
      </div>
      <h3 className="mt-3 text-2xl font-semibold">{status}</h3>
      <button
        className="mt-3 rounded bg-red-400 px-6 py-2 text-[#fff]"
        onClick={handleRestart}
      >
        Restart
      </button>
    </div>
  );
};

export default TicTactToe;
