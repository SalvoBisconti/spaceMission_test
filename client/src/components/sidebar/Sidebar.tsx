import { useRouter } from "next/router";
import { Dispatch, useEffect, useState } from "react";

const Sidebar = (prop: {
  setMenuView: Dispatch<React.SetStateAction<string>>;
}) => {
  const { setMenuView } = prop;

  const router = useRouter();
  const menuName: string[] = ["View", "Add", "Track", "Exit"];
  const [getUsername, setGetUsername] = useState<any>([]);

  const onHandleExit = () => {
    localStorage.removeItem("LoggedUser");
    router.push("/");
  };

  const useLoggedUser = () => {
    useEffect(() => {
      if (typeof window !== "undefined") {
        const username = localStorage.getItem("LoggedUser");
        if (username) {
          setGetUsername(JSON.parse(username));
        }
      }
    }, []);
  };

  const onHandleClick = (name: string) => {
    setMenuView(name);
    name === "exit" && onHandleExit();
  };

  useLoggedUser();

  return (
    <div className="bg-primary border-r rounded-tr rounded-br min-h-screen w-[32vw] md:w-[20vw] text-text flex flex-col gap-8 z-20 ">
      <div className="flex  items-center gap-2 px-2 py-3">
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          alt="profile"
          className="rounded-full h-[2rem] w-[2rem] "
        />
        <h2 className="font-bold">@{getUsername.username}</h2>
      </div>

      <ul className="overflow-hidden flex flex-col gap-2 ">
        {menuName.map((element, i) => (
          <li
            className="cursor-pointer hover:bg-secondary hover:font-bold py-2 rounded text-center  "
            key={i}
            id={`${element.toLowerCase()}`}
            onClick={() => onHandleClick(element.toLowerCase())}
          >
            {element}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
