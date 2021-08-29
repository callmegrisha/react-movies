import React from 'react';
import MovieList from './MovieList';
import Search from './Search';
import Preloader from './Preloader';

const API_KEY = process.env.REACT_APP_API_KEY;

const Main = () => {
  const [movies, setMovies] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const searchMovies = (str, type = 'all') => {
    setLoading(true);
    fetch(
      `https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${str}${
        type !== 'all' ? `&type=${type}` : ''
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  React.useEffect(() => {
    fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=matrix`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <main className="main">
      <div className="container">
        <Search searchMovies={searchMovies} />
        {loading ? <Preloader /> : <MovieList movies={movies} />}
      </div>
    </main>
  );
};

export default Main;
