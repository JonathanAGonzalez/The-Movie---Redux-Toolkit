import Actors from './Actors';
import Genres from './Genres';
import OverView from './OverView';
import Rating from './Rating';

const RightContainer = ({ detail, actors }) => {
  return (
    <div className="flex flex-col w-2/3 items-start overflow-y-auto px-16 my-16 justify-center">
      <h2 className="text-4xl font-bold my-1">
        {`${detail?.title} (${detail?.release_date})`}{' '}
      </h2>

      <Rating rating={detail?.vote_average} />

      <OverView overview={detail?.overview} />

      <Genres genres={detail?.genres} />

      <Actors actors={actors} />
    </div>
  );
};

export default RightContainer;
