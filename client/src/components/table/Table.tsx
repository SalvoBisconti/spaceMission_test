import { shuttlesDataType } from "@/mocks/dataType";

const Table = (props: { dataShuttles: shuttlesDataType[] }) => {
  const { dataShuttles } = props;

  return (
    <table className="text-text text-lg md:text-xl">
      <thead>
        <tr>
          <th className="p-2 px-6">Veicolo</th>
          <th className="p-2 px-6">Missione</th>
        </tr>
      </thead>
      <tbody>
        {dataShuttles?.map((element, i) => (
          <tr key={i} className=" p-4">
            <td className="p-2">{element.name}</td>
            <td className="p-2">{element.mission}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
