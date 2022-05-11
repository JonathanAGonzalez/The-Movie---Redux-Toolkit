import { NavLink, useNavigate, useParams } from 'react-router-dom';
import movieImg from '../../assets/movie-theater.png';
import { useFetchMoviesQuery } from '../../redux/api/movies';
import Loading from '../../components/Loading';
import ListMovies from './components/ListComponent';
import Error from '../../components/Error/Error';
import { useChangeTitle } from '../../hooks/useChangeTitle';
const MovieResults = () => {
  const { title } = useParams();
  const navigate = useNavigate();
  const {
    data: movies,
    isLoading,
    isFetching,
    isSuccess,
    error,
  } = useFetchMoviesQuery(title);

  const handleListItemClick = (movieID) => {
    navigate(`/detail/${movieID}`);
  };

  useChangeTitle(`Resultado - ${title}`);

  return (
    <section className="flex flex-row">
      {movies?.results.length <= 0 ? (
        <article className="w-3/5 h-screen flex flex-col items-center justify-center px-10 text-red-900 font-medium italic">
          <p>No se encontraron peliculas con ese nombre</p>

          <NavLink
            className="block bg-indigo-600 text-white p-3 rounded-md my-2 hover:bg-indigo-900 transition ease-in-out duration-350"
            to="/"
          >
            Buscar otra
          </NavLink>
        </article>
      ) : (
        <article className="w-3/5 h-screen overflow-y-auto px-10">
          <NavLink
            className="hover:text-indigo-900 flex hover:translate-x-2 transition ease-in-out duration-350 hover:underline"
            to="/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>{' '}
            Buscar otra pelicula
          </NavLink>
          {error && <Error />}
          {isLoading || isFetching ? (
            <Loading text={' Buscando peliculas...'} />
          ) : undefined}
          {isSuccess && movies?.results && (
            <ListMovies
              movies={movies.results}
              onListItem={handleListItemClick}
            />
          )}
        </article>
      )}

      <article className="w-2/5">
        <img src={movieImg} alt="" className=" h-screen w-full object-cover " />
      </article>
    </section>
  );
};

export default MovieResults;
