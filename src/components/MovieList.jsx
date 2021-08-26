import Movie from './Movie';

const MovieList = (props) => {
  return (
    <>
      <div className="list">
        {props.movies.map((movie) => (
          <Movie
            key={movie.imdbID}
            img={movie.Poster}
            name={movie.Title}
            year={movie.Year}
            type={movie.Type}
          />
        ))}
      </div>
    </>
  );
};

export default MovieList;
