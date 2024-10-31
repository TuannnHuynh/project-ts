import { TUsers } from "./SearchAutocomplete";

type TSuggesstionProps = {
  data: TUsers[];
  handleClick: (e: React.MouseEvent<HTMLLIElement>) => void;
};

const Suggesstions = ({ data, handleClick }: TSuggesstionProps) => {
  return (
    <ul>
      {data && data.length > 0
        ? data.map((val, idx) => {
            return (
              <li key={idx} onClick={handleClick}>
                <span className="inline-block cursor-pointer rounded bg-blue-400 p-1 text-[#fff]">
                  {val.firstName}
                </span>
              </li>
            );
          })
        : null}
    </ul>
  );
};

export default Suggesstions;
