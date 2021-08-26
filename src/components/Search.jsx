import React from 'react';

export default class Search extends React.Component {
  state = {
    search: '',
    type: 'all',
  };

  handleKey = (event) => {
    if (event.key === 'Enter') {
      this.props.searchMovies(this.state.search, this.state.type);
    }
  };

  handleFilter = (event) => {
    this.setState(
      () => ({ type: event.target.dataset.type }),
      () => {
        this.props.searchMovies(this.state.search, this.state.type);
      }
    );
  };

  render() {
    return (
      <>
        <form className="search-form">
          <div className="search-form__search">
            <input
              className="search-form__input input"
              placeholder="Enter the name of the movie"
              type="search"
              value={this.state.search}
              onChange={(e) => {
                this.setState({ search: e.target.value });
              }}
              onKeyDown={this.handleKey}
            />
            <button
              type="button"
              className="search-form__btn btn"
              onClick={() => {
                this.props.searchMovies(this.state.search, this.state.type);
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
                onChange={this.handleFilter}
                checked={this.state.type === 'all'}
              />
              <span>all</span>
            </label>
            <label className="search-form__label">
              <input
                className="search-form__radio"
                type="radio"
                name="type"
                data-type="movie"
                onChange={this.handleFilter}
                checked={this.state.type === 'movie'}
              />
              <span>movies</span>
            </label>
            <label className="search-form__label">
              <input
                className="search-form__radio"
                type="radio"
                name="type"
                data-type="series"
                onChange={this.handleFilter}
                checked={this.state.type === 'series'}
              />
              <span>series</span>
            </label>
          </div>
        </form>
      </>
    );
  }
}
