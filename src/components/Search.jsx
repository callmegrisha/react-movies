import React from 'react';

const Search = (props) => {
  const [search, setSearch] = React.useState('');
  const [type, setType] = React.useState('all');

  const handleKey = (event) => {
    if (event.key === 'Enter') {
      props.searchMovies(search, type);
    }
  };

  const handleFilter = (event) => {
    setType(event.target.dataset.type);
    props.searchMovies(search, event.target.dataset.type);
  };

  return (
    <>
      <form className="search-form">
        <div className="search-form__search">
          <input
            className="search-form__input input"
            placeholder="Enter the name of the movie"
            type="search"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            onKeyDown={handleKey}
          />
          <button
            type="button"
            className="search-form__btn btn"
            onClick={() => {
              props.searchMovies(search, type);
            }}
          >
            search
          </button>
        </div>
        <div className="search-form__types">
          <label className="search-form__label">
            <input
              className="search-form__radio"
              type="radio"
              name="type"
              data-type="all"
              onChange={handleFilter}
              checked={type === 'all'}
            />
            <span>all</span>
          </label>
          <label className="search-form__label">
            <input
              className="search-form__radio"
              type="radio"
              name="type"
              data-type="movie"
              onChange={handleFilter}
              checked={type === 'movie'}
            />
            <span>movies</span>
          </label>
          <label className="search-form__label">
            <input
              className="search-form__radio"
              type="radio"
              name="type"
              data-type="series"
              onChange={handleFilter}
              checked={type === 'series'}
            />
            <span>series</span>
          </label>
        </div>
      </form>
    </>
  );
};

export default Search;
