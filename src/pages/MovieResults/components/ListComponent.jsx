import Image from './Image';

const ListMovies = ({ movies, onListItem }) => {
  return movies.map((movie) => (
    <div
      key={movie.id}
      className="flex flex-wor w-full mt-16"
      style={{ minWidth: 650 }}
    >
      <div className="w-1/6">
        <Image movie={movie} />
      </div>
      <div className="w-5/6 flex flex-col items-start justify-between p-1">
        <h2 className="text-lg font-medium">{movie.title}</h2>
        <div>
          <button
            onClick={() => onListItem(movie.id)}
            className="border-2 hover:bg-indigo-700 hover:text-gray-100 transition hover:ease-in-out duration-400 border-indigo-700 p-3 w-48 rounded-md text-indigo-700 "
          >
            Ver más
          </button>
        </div>
      </div>
    </div>
  ));
};

export default ListMovies;
