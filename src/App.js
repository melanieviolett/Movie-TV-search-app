import React, {useState, useEffect} from 'react';
import Movie_TvList from './components/Movie_TvList';
import Heading from './components/Heading';
import SearchBar from './components/SearchBar';
import Favorites from './components/Favorites';
import RmFavorites from './components/RmFavorites';
import './bootstrap.min.css';
import './App.css';

// add feature to not allow duplicates added to favs
// add title to movie list comp. + other info about movie
// have movies go away when you completely clear the search bar
// styling on original start so its not just the two headings n the search bar
// click on whole card to add/rm from favs maybe

const App = () => {
  const [movies, setMovies] = useState([]);
  const [favs, setFavs] = useState([]);
  // this is a state object
  const [searchVal, setSearchVal] = useState('');


  // make request to API
  const movieTvRequest = async (searchVal) => {

    // url is a template string
    const url = `http://www.omdbapi.com/?s=${searchVal}&apikey=1cfcc558`;

    // try catch:)
    const response = await fetch(url);
    // converts http response to json
    const responseJson = await response.json();
    console.log(responseJson);

    if (responseJson.Search) {
      // Search is what the array that is created is called (look in devTools)
      setMovies(responseJson.Search);
    } 
  };

  // always gets called on first render
  useEffect(() => {
    movieTvRequest(searchVal);
    // blank array means that the movieTvRequest function gets called only when page loads, any value added to the array causes this hook to run
  }, [searchVal]);

  useEffect(() => {
    const movieFavs = JSON.parse(
      localStorage.getItem('react-movie-tv-app-favs')
      );
      setFavs(movieFavs);
  }, []);

  const saveToLocalStorage = (items) => {
    // in the quotes is the key, which is used to save and retrieve items
    // from local storage
    localStorage.setItem('react-movie-tv-app-favs', JSON.stringify(items));
  };

  const addFavMovie = (movie) => {

    if(favs.includes(movie)) return;
    // creates copy of current array of favorites and adds new movie to it
    const newFavList = [...favs, movie];

    // updates state with new array of films
    setFavs(newFavList);
    saveToLocalStorage(newFavList);
  };

  const rmFavMovie = (movie) => {
    const newFavList = favs.filter(
      (fav) => fav.imdbID !== movie.imdbID
      );
    setFavs(newFavList);
    saveToLocalStorage(newFavList);
  };


    // returns jsx, in here is where components are created 
  return ( 
    <div className='container-fluid movie-tv-app'>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <Heading heading = 'Movie & TV Searcher'></Heading>
        <SearchBar searchVal={searchVal} setSearchVal={setSearchVal}></SearchBar>
      </div>
      {/* // call component and pass list of movies */}
      <div className='row'>
        {/* components are functions and can b passed around as functions */}
        <Movie_TvList movies = {movies} handleFavsClick = {addFavMovie}favoriteComponent={Favorites}></Movie_TvList>
      </div>

      <div className='row d-flex align-items-center mt-4 mb-4'>
        <Heading heading = 'Favorites'></Heading>
      </div>

      <div className='row'>
        {/* components are functions and can b passed around as functions */}
        <Movie_TvList movies = {favs} handleFavsClick = {rmFavMovie}favoriteComponent={RmFavorites}></Movie_TvList>
      </div>
    </div>
  );
};
export default App;