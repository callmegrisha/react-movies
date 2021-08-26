import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

export default class App extends React.Component {
  render() {
    // console.log("Объекты с фильмами", this.state.movies[0]);
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    );
  }
}
