const Movie = (props) => {
  const { img, name, year, type } = props;
  return (
    <>
      <article className="movie-card">
        {img === 'N/A' ? (
          <img
            className="movie-card__img"
            src="https://dummyimage.com/370x550&text=no+picture"
            alt="Not img"
          />
        ) : (
          <img className="movie-card__img" src={img} alt={name} />
        )}
        <div className="movie-card__content">
          <h3 className="movie-card__title">{name}</h3>
          <div className="movie-card__details">
            <span className="movie-card__year">{year}</span>
            <span className="movie-card__type">{type}</span>
          </div>
        </div>
      </article>
    </>
  );
};

export default Movie;
