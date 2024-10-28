export interface UserProps {
  user: {
    avatar_url: string;
    public_repos: number;
    name: string | null;
    login: string;
    created_at: Date;
  };
}

const User = ({ user }: UserProps) => {
  const { avatar_url, public_repos, name, login, created_at } = user;
  const createdDate = new Date(created_at);
  return (
    <div className="user">
      <div className="flex justify-center">
        <img
          className="mt-4 w-6/12 rounded-[50%] border-[3px] border-[#333] sm:w-[30%] lg:w-[22%]"
          src={avatar_url}
          alt="User"
        />
      </div>
      <div className="text-center">
        <a
          className="mb-3 inline-block text-4xl font-semibold text-blue-500 underline"
          href={`https://github.com/${login}`}
        >
          {name || login}
        </a>
        <p className="mb-1 text-xl font-semibold">
          User joined on{" "}
          {`${createdDate.getDate()} ${createdDate.toLocaleString("en-us", {
            month: "short",
          })} ${createdDate.getFullYear()}`}
        </p>
        <p className="text-xl font-semibold">
          Public Repos: <span className="font-normal">{public_repos}</span>
        </p>
      </div>
    </div>
  );
};

export default User;
