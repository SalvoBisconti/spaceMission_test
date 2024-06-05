import { shuttleType, shuttlesDataType } from "@/mocks/dataType";
import { POST } from "@/utils/http";
import { Dispatch, useState } from "react";

const AddElementForm = (props: {
  dataShuttles: shuttlesDataType[];
  setDataShuttles: Dispatch<React.SetStateAction<shuttlesDataType[]>>;
}) => {
  const { dataShuttles, setDataShuttles } = props;

  const [shuttleData, setShuttleData] = useState<shuttleType>({
    name: "",
    mission: "",
  });

  const addElementToDo = (result: any) => {
    if (result) {
      console.log("Shuttle aggiunto:", result);
    } else {
      alert("Dati errati");
    }
  };

  const onHandleAdd = (): void => {
    if (
      dataShuttles.find((element) => element.name == shuttleData?.name) ==
      undefined
    ) {
      POST(
        "shuttles/add",
        shuttleData,
        "Errore nella richiesta",
        addElementToDo
      );
      setShuttleData({
        name: "",
        mission: "",
      });
      alert("Aggiunto");
    } else {
      alert("Nome già presente");
    }
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
