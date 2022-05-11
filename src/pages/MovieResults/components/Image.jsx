import ImageBrouken from '../../../assets/image-not-found.jpg';

const Image = ({ movie }) => {
  return movie.poster_path ? (
    <img
      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
      alt={movie.original_title}
      className="w-32"
    />
  ) : (
    <img src={ImageBrouken} alt={movie.original_title} className="w-32" />
  );
};

export default Image;
