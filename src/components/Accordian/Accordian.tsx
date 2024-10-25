import { useState } from "react";
import data from "./data";

type QuestionAnswer = {
  id: number;
  question: string;
  answer: string;
};

const Accordian = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const [enableMultiSelection, setEnableMultiSection] =
    useState<boolean>(false);

  const [multiple, setMultiple] = useState<number[] | null>([]);

  const handleShowAnswer = (getCurrentId: number): void => {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };
  const handleMultiSelection = (getCurrentId: number): void => {
    if (multiple) {
      let updateMultiple: number[] = [...multiple];
      if (updateMultiple.includes(getCurrentId)) {
        updateMultiple = updateMultiple.filter((id) => id !== getCurrentId);
      } else {
        updateMultiple.push(getCurrentId);
      }
      setMultiple(updateMultiple);
    }
  };
  console.log(multiple);
  return (
    <>
      <h1 className="mb-10 mt-12 text-center text-4xl font-bold">Accordian</h1>
      <div className="wrapper flex h-screen flex-col items-center gap-5">
        <button
          onClick={() => setEnableMultiSection(!enableMultiSelection)}
          className="bg-[#000] px-5 py-[10px] text-[#fff]"
        >
          {enableMultiSelection
            ? "Enable One Selection"
            : "Enable Multi Selection"}
        </button>
        <div className="accordian w-[500px]">
          {data && data.length > 0 ? (
            data.map((val: QuestionAnswer) => {
              return (
                <div
                  className="mb-[10px] bg-[#614101] px-[20px] py-[10px]"
                  onClick={
                    enableMultiSelection
                      ? () => handleMultiSelection(val.id)
                      : () => handleShowAnswer(val.id)
                  }
                  key={`question-${val.id}`}
                >
                  <div className="title flex cursor-pointer items-center justify-between text-[#ffffff]">
                    <h3 className="font-semibold">{val.question}</h3>
                    <span>+</span>
                  </div>
                  {enableMultiSelection
                    ? multiple?.indexOf(val.id) !== -1 && (
                        <div className="content">
                          <p className="h-auto text-[#ffffff]">{val.answer}</p>
                        </div>
                      )
                    : selected === val.id && (
                        <div className="content">
                          <p className="h-auto text-[#ffffff]">{val.answer}</p>
                        </div>
                      )}
                </div>
              );
            })
          ) : (
            <div>
              <h3>No Data Found !</h3>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Accordian;
