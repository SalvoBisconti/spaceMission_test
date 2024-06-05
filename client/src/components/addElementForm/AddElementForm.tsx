import { shuttleType } from "@/mocks/dataType";
import { useState } from "react";

const AddElementForm = () => {
  const [shuttleData, setShuttleData] = useState<shuttleType>({
    name: "",
    mission: "",
  });

  const onHandleAdd = (): void => {
    fetch("http://localhost:8080/api/shuttles/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(shuttleData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Errore: " + response.statusText);
        }
        return response.json();
      })
      .then((result) => {
        console.log("Shuttle aggiunto:", result);
      })
      .catch((error) => {
        console.error("Errore nella richiesta:", error);
      });
  };

  return (
    <div className=" text-text flex flex-col md:flex-row justify-center items-center gap-3 p-5 ">
      <h2 className="self-start mb-3">Inserisci un nuovo shuttle</h2>
      <div className="bg-primary rounded px-2 w-[90%] ">
        <label htmlFor="name" className="px-4 text-xs text-lowGrey">
          Nome shuttle
        </label>
        <input
          type="text"
          className="w-full bg-transparent outline-none px-4"
          value={shuttleData?.name}
          onChange={(e) =>
            setShuttleData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      </div>
      <div className="bg-primary rounded px-2 w-[90%] ">
        <label htmlFor="mission" className="px-4 text-xs text-lowGrey">
          Missione
        </label>
        <input
          type="text"
          className="w-full bg-transparent outline-none px-4"
          value={shuttleData?.mission}
          onChange={(e) =>
            setShuttleData((prev) => ({ ...prev, mission: e.target.value }))
          }
        />
      </div>

      <button
        className="border self-end md:self-center border-lowGrey px-4 py-2 mt-4 md:mt-0 rounded-2xl bg-text text-primary font-bold"
        onClick={() => onHandleAdd()}
      >
        Add
      </button>
    </div>
  );
};

export default AddElementForm;
