const leftContainer = ({ poster }) => {
  return (
    <div className="w-1/3 flex justify-center">
      <img src={`https://image.tmdb.org/t/p/original/${poster}`} alt="" />
    </div>
  );
};

export default leftContainer;
