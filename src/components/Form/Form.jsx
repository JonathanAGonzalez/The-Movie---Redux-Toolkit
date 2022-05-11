import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './components/Button';
import Input from './components/Input';

const Form = () => {
  const [search, setSearch] = useState('');
  const [empty, setEmpty] = useState(false);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim()) navigate(`/list-movies/${search}`);
    setEmpty(true);
  };

  const handleCleanInput = () => {
    setSearch('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-3/5  flex flex-col px-20 items-center justify-center font-lato"
    >
      <h2 className="text-4xl font-bold">Busca tu pelicula...</h2>
      <Input empty={empty} onHandleInputChange={handleInputChange} />
      <Button onHandleCleanInput={handleCleanInput} />
    </form>
  );
};

export default Form;
