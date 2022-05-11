import { NavLink } from 'react-router-dom';

const Error404 = () => {
  return (
    <div className=" flex flex-col items-center justify-center h-screen">
      <p className="font-bold text-4xl">Error 404</p>
      <NavLink className="underline mt-5" to="/">
        Volver al home
      </NavLink>
    </div>
  );
};

export default Error404;
