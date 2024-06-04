const Sidebar = () => {
  const menuName: String[] = ["View", "Add", "Track", "Exit"];

  const onHandleClick = (name: String) => console.log(name);
  return (
    <div className="border rounded-tr rounded-br fixed top-0 left-0 h-full w-[30vw] md:w-[20vw] text-text flex flex-col gap-8 ">
      <h2 className="p-4">SIDEBAR</h2>

      <ul className="overflow-hidden flex flex-col gap-2 ">
        {menuName.map((element, i) => (
          <li
            className="cursor-pointer hover:bg-primary hover:scale-125 text-center  "
            key={i}
            id={`${element.toLowerCase()}`}
            onClick={() => onHandleClick(element)}
          >
            {element}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
