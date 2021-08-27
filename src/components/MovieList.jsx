import Movie from './Movie';

const MovieList = (props) => {
  const { movies = [] } = props;
  return (
    <>
      <div className="list">
        {movies.length ? (
          movies.map((movie) => (
            <Movie
              key={movie.imdbID}
              img={movie.Poster}
              name={movie.Title}
              year={movie.Year}
              type={movie.Type}
            />
          ))
        ) : (
          <h2>Nothing found</h2>
        )}
      </div>
    </>
  );
};

export default MovieList;
