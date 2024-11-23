type TSearchProps = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  handleSearch: (
    e: React.FormEvent<HTMLFormElement> | React.FormEvent<HTMLButtonElement>,
  ) => void;
};

const Search = ({ search, setSearch, handleSearch }: TSearchProps) => {
  return (
    <div>
      <form className="flex justify-center" action="">
        <input
          className="rounded-tl-sm border-[2px] border-r-0 border-[#333] px-2 py-[2px] outline-none"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="rounded-tr-sm border-[2px] border-l-0 border-[#333] bg-white p-1 pl-0 text-sm"
          onClick={(e) => handleSearch(e)}
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </div>
  );
};

export default Search;
