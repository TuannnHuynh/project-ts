import axios from "axios";
import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import User, { UserProps } from "./User";

const GithubProfile = () => {
  const [userName, setUserName] = useState<string>("TuannnHuynh");
  const [userData, setUserData] = useState<UserProps["user"] | null>(null);

  const fetchGithubUserData = async () => {
    const res = await axios.get(`linkgit`); // linkgithub do bi lỗi nên không thể đầy lên github
    const data = res.data;
    if (data) {
      setUserData(data);

      setUserName("");
    }
  };

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    fetchGithubUserData();
  };

  console.log(userData);

  return (
    <div className="py-10">
      <h2 className="mb-5 text-center text-3xl font-semibold sm:text-4xl">
        Github Profile Search
      </h2>
      <div className="flex justify-center">
        <form action="">
          <div className="input-group flex">
            <input
              className="w-[220px] rounded-l border-2 border-r-0 border-[#333] px-2 py-1 outline-none sm:w-[320px]"
              type="text"
              placeholder="Enter your username github..."
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <button
              onClick={(e) => handleSubmit(e)}
              className="btn-search rounded-r bg-[#333] px-4 text-lg text-[#fff] sm:px-6 md:px-8"
            >
              <IoSearch />
            </button>
          </div>
        </form>
      </div>
      {userData !== null ? <User user={userData} /> : null}
    </div>
  );
};

export default GithubProfile;
