import { shuttlesDataType } from "@/mocks/dataType";

const Table = (props: { dataShuttles: shuttlesDataType[] }) => {
  const { dataShuttles } = props;

  return (
    <table className="text-text text-lg md:text-xl bg-primary rounded">
      <thead className="border-b border-text">
        <tr className="[&>*]:w-screen [&>*]:py-2">
          <th>Veicolo</th>
          <th>Missione</th>
        </tr>
      </thead>
      <tbody>
        {dataShuttles?.map((element, i) => (
          <tr key={i} className=" p-4 text-center [&>*]:text-center [&>*]:p-2">
            <td>{element.name}</td>
            <td>{element.mission}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
