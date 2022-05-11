import { Fragment } from 'react';
import { addCommas } from '../../../functions/addCommas';

const Genres = ({ genres }) => {
  return (
    <p className="font-bold flex gap-1">
      Genero:
      <span className="flex flex-row font-normal">
        {genres?.map((genre, index) => (
          <Fragment key={genre.id}>
            {`${genre.name} ${addCommas(index, genres)}`}
          </Fragment>
        ))}
      </span>
    </p>
  );
};

export default Genres;
