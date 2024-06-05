import { useState, useEffect } from "react";
import { shuttlesDataType } from "@/mocks/dataType";

const Table = () => {
  const [dataShuttles, setDataShuttles] = useState<shuttlesDataType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/shuttles");
        if (!response.ok) {
          throw new Error("Errore nella fetch");
        }
        const data = await response.json();
        setDataShuttles(data);
      } catch (error: any) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Veicolo</th>
          <th>Missione</th>
        </tr>
      </thead>
      <tbody>
        {dataShuttles?.map((element, i) => (
          <tr key={i}>
            <td>{element.name}</td>
            <td>{element.mission}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
