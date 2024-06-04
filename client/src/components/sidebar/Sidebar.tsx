const Sidebar = () => {
  const menuName: String[] = ["View", "Add", "Track", "Exit"];

  const onHandleClick = (name: String) => console.log(name);
  return (
    <div className="bg-primary border rounded-tr rounded-br h-screen w-[30vw] md:w-[20vw] text-text flex flex-col gap-8 z-20 ">
      <h2 className="p-4">SIDEBAR</h2>

      <ul className="overflow-hidden flex flex-col gap-2 ">
        {menuName.map((element, i) => (
          <li
            className="cursor-pointer hover:bg-secondary hover:scale-125 text-center  "
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
