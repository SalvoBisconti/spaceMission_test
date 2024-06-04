const AddElementForm = () => {
  return (
    <div className=" text-text flex flex-col justify-center items-center gap-3 p-5 ">
      <h2 className="self-start mb-3">Inserisci un nuovo shuttle</h2>
      <div className="bg-primary rounded px-2 w-[90%] ">
        <label htmlFor="name" className="px-4 text-xs text-lowGrey">
          Nome shuttle
        </label>
        <input
          type="text"
          className="w-full bg-transparent outline-none px-4"
        />
      </div>
      <div className="bg-primary rounded px-2 w-[90%] ">
        <label htmlFor="mission" className="px-4 text-xs text-lowGrey">
          Missione
        </label>
        <input
          type="text"
          className="w-full bg-transparent outline-none px-4"
        />
      </div>

      <button className="border self-end border-lowGrey px-4 py-2 mt-4 rounded-2xl bg-text text-primary font-bold">
        Add
      </button>
    </div>
  );
};

export default AddElementForm;
