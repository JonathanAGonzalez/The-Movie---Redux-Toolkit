const Input = ({ search, onHandleInputChange, empty }) => {
  return (
    <input
      type="text"
      value={search}
      onChange={onHandleInputChange}
      placeholder={
        empty ? 'El campo no puede estar vacio' : 'Ingresa tu busqueda'
      }
      className={
        empty
          ? 'focus:ring-4 bg-white text-red-400 placeholder:text-red-400 border-red-400 border-2 rounded-md w-full my-4 h-15 outline-none p-4 animate-bounce'
          : 'focus:ring-4 bg-indigo-700 text-gray-100  rounded-md w-full my-4 h-15 outline-none p-4'
      }
    />
  );
};

export default Input;
