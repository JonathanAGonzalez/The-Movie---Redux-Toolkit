import React from 'react';

const Button = ({ onHandleCleanInput }) => {
  return (
    <article className="w-full flex justify-between">
      <button className="focus:ring-4 w-2/5 bg-indigo-900 hover:bg-indigo-700 transition-all text-gray-100 rounded-md py-5 px-4">
        Buscar
      </button>
      <button
        type="reset"
        onClick={onHandleCleanInput}
        className="focus:ring-4 w-2/5 bg-indigo-900 hover:bg-indigo-700 transition-all text-gray-100 rounded-md py-5 px-4"
      >
        Limpiar
      </button>
    </article>
  );
};

export default Button;
