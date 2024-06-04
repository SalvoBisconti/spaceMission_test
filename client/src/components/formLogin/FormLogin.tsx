import { useState } from "react";
import { userType } from "@/mocks/dataType";
import { useRouter } from "next/router";

const FormLogin = () => {
  const router = useRouter();

  const [userData, setUserData] = useState<userType>({
    password: "",
    email: "",
  });

  const onHandleControl = () => {
    fetch("http://localhost:8080/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (!response.ok) {
          console.log("dati sbagliati");
          throw new Error("Credenziali non valide");
        }
        return response.json();
      })
      .then((result) => {
        if (result.exists) {
          localStorage.setItem("LoggedUser", JSON.stringify(result.utente));
          router.push("/home");
        } else {
          alert("Email o password errati!");
        }
      })
      .catch((error) => {
        console.error("Errore:", error);
        alert("Email o password errati!");
      });
  };

  return (
    <div className=" w-[22rem] rounded bg bg-primary text-text flex flex-col justify-center items-center gap-3 p-5">
      <div className="bg-secondary rounded px-2 w-[90%] ">
        <label htmlFor="username" className="px-4 text-xs text-lowGrey">
          Inserisci username
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
        {/* <label htmlFor="username"> Inserisci password</label> */}
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
