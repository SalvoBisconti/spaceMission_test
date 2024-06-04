const FormLogin = () => {
  return (
    <div className=" w-[22rem] rounded bg bg-primary text-text flex flex-col justify-center items-center gap-3 p-5">
      <div className="bg-secondary rounded px-2 w-[90%] ">
        <label htmlFor="username" className="px-4 text-xs text-lowGrey">
          Inserisci username
        </label>
        <input
          type="text"
          className="w-full bg-transparent outline-none px-4"
        />
      </div>
      <div className="bg-secondary rounded p-2 w-[90%] ">
        {/* <label htmlFor="username"> Inserisci password</label> */}
        <input
          type="password"
          className="w-full bg-transparent outline-none px-4"
          placeholder="Inserisci password"
        />
      </div>

      <button className="border border-lowGrey px-4 py-2 mt-4 rounded-2xl bg-text text-primary font-bold">
        LOGIN
      </button>
    </div>
  );
};

export default FormLogin;
