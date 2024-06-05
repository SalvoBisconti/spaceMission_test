import { useState } from "react";
import { userType } from "@/mocks/dataType";
import { useRouter } from "next/router";
import { POST } from "@/utils/http";

const FormLogin = () => {
  const router = useRouter();

  const [userData, setUserData] = useState<userType>({
    password: "",
    email: "",
  });

  const loginToDo = (result: any) => {
    if (result.exists) {
      localStorage.setItem("LoggedUser", JSON.stringify(result.utente));
      router.push("/home");
    } else {
      alert("Dati errati");
    }
  };

  const onHandleControl = (): void => {
    POST("users/login", userData, "Credenziali errate", loginToDo);
  };

  return (
    <div className=" w-[22rem] rounded bg bg-primary text-text flex flex-col justify-center items-center gap-3 p-5">
      <div className="bg-secondary rounded px-2 w-[90%] ">
        <label htmlFor="email" className="px-4 text-xs text-lowGrey">
          Inserisci email
        </label>
        <input
          type="text"
          className="w-full bg-transparent outline-none px-4"
          value={userData.email}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, email: e.target.value }))
          }
        />
      </div>
      <div className="bg-secondary rounded p-2 w-[90%] ">
        <input
          type="password"
          className="w-full bg-transparent outline-none px-4"
          placeholder="Inserisci password"
          value={userData.password}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, password: e.target.value }))
          }
        />
      </div>

      <button
        className="border border-lowGrey px-4 py-2 mt-4 rounded-2xl bg-text text-primary font-bold"
        onClick={() => onHandleControl()}
      >
        LOGIN
      </button>
    </div>
  );
};

export default FormLogin;
