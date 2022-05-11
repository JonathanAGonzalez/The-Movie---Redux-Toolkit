//Hooks
import { useChangeTitle } from '../../hooks/useChangeTitle';
//Image
import Chairs from '../../assets/chairs.png';
//Components
import Form from '../../components/Form';

const Home = () => {
  useChangeTitle('Bienvenido!, buscá tu pelicula');

  return (
    <section className="flex h-screen overflow-hidden">
      <article className="w-2/5">
        <img src={Chairs} alt="" className="w-full h-full object-hover" />
      </article>
      <Form />
    </section>
  );
};

export default Home;
