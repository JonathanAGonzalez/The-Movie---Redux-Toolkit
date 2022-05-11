import { useEffect } from 'react';

//Redux
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
  fetchActorsDetail,
  fetchMovieDetail,
} from '../../redux/actions/moviesActions';

//Hooks
import { useChangeTitle } from '../../hooks/useChangeTitle';

//Components
import Loading from '../../components/Loading';
import LeftContainer from './components/LeftContainer';
import RightContainer from './components/RightContainer';

const DetailMovie = () => {
  const { movieID } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    actors,
    detail,
    isLoading,
    errorFetchMovieDetail,
    errorFetchActorsDetail,
  } = useSelector((state) => state.moviesReducers);

  useEffect(() => {
    dispatch(fetchMovieDetail(movieID));
  }, [movieID, dispatch]);

  useEffect(() => {
    dispatch(fetchActorsDetail(movieID));
  }, [movieID, dispatch]);

  useChangeTitle(detail?.title);

  const handlePath = () => {
    navigate(-1);
  };

  return (
    <>
      <p
        className="block mx-16 my-1 hover:text-indigo-900 transition ease-in-out duration-350 cursor-pointer w-fit text-center hover:translate-x-1"
        onClick={handlePath}
      >
        Volver a la lista
      </p>
      <div className="flex flex-row px-16  items-center justify-center">
        {isLoading || errorFetchMovieDetail || errorFetchActorsDetail ? (
          <Loading text={'Buscando detalle de la pelicula'} />
        ) : (
          <>
            <LeftContainer poster={detail?.poster_path} />
            <RightContainer actors={actors} detail={detail} />
          </>
        )}
      </div>
    </>
  );
};

export default DetailMovie;
