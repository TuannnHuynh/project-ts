import axios from "axios";
import { useEffect, useState } from "react";
import Suggesstions from "./Suggesstions";

export type TUsers = {
  firstName: string;
};

const SearchAutocomplete = () => {
  const [users, setUsers] = useState<TUsers[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [searchParam, setSearchParam] = useState<string>("");
  const [filteredUsers, setFilteredUsers] = useState<TUsers[]>([]);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const fetchUsers = async () => {
    try {
      setIsLoading(true);
      const res = await axios("https://dummyjson.com/users");
      const data = res.data;
      if (data && data.users && data.users.length > 0) {
        setUsers(data.users);
        setIsLoading(false);
        setIsError(false);
      }
    } catch (e) {
      console.log(e);
      setIsError(true);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  if (isError) {
    return <div>Error occured !</div>;
  }
  const handleClick = (e: React.MouseEvent<HTMLLIElement>): void => {
    setShowDropdown(false);
    setSearchParam(e.currentTarget.innerText);
    setFilteredUsers([]);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchParam(query);
    if (query.length > 1) {
      const filterData = users.filter(
        (val) =>
          val && val.firstName && val.firstName.toLowerCase().includes(query),
      );
      setFilteredUsers(filterData);
      setShowDropdown(true);
    } else {
      setFilteredUsers([]);
      setShowDropdown(false);
    }
  };
  console.log(filteredUsers);

  return (
    <div className="pb-36 text-center">
      <h2 className="mt-10 text-5xl">Search Autocomplete</h2>
      {isLoading ? (
        <h4>Loading Data ! Please wait</h4>
      ) : (
        <input
          className="mt-4 rounded border px-3 py-1 outline-none"
          value={searchParam}
          name="search-users"
          placeholder="Search Users here..."
          onChange={handleChange}
        />
      )}
      {showDropdown && (
        <Suggesstions handleClick={handleClick} data={filteredUsers} />
      )}
    </div>
  );
};

export default SearchAutocomplete;
