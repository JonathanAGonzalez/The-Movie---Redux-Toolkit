import React from 'react';
import { addCommas } from '../../../functions/addCommas';

const Actors = ({ actors }) => {
  const movieCast = actors?.slice(0, 20) || [];

  return (
    <p className="font-bold flex flex-wrap gap-1">
      Actores:
      {movieCast?.map((actor, index) => (
        <span className="font-normal" key={actor.id}>
          {`${actor.name} ${addCommas(index, movieCast)}`}
        </span>
      ))}
    </p>
  );
};

export default Actors;
