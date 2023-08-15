
// import './App.css';
// import { useEffect, useState } from 'react';
// import Header from './components/Header';
// import MovieTitleScroll from './components/MovieTitleScroll';
// import SearchBox from './components/SearchBox';
// import MovieListHeading from './components/MovieListHeading';
// import MovieList from './components/MovieList';



// function App () {
//   let [movies,setMovies] = useState([])
//   let [searchValue, setSearchValue] = useState ('')
//   useEffect(() => {
//     fetchData()
//   },[]
//   )
//   const fetchData = async () => {
//     const options = {
//       method: 'GET',
//       headers: {
//         accept: 'application/json',
//         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YWE5YjE2ODcxN2RiMjE3NDEzZDQzODdhOTFhZWY2YyIsInN1YiI6IjY0YWRlYTAwNmEzNDQ4MDBjOWZjZTJkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FJeABoW3VzJusjQMyBC_Im__J0eNyOhMeBKCZ-UaDA0'
//       }
//     };
//     const response = await fetch('https://api.themoviedb.org/3/discover/movie', options)
//     const data = await response.json()
//     console.log(data)
//     setMovies(data.results)
//   }
//   //Get API KEY
 
  
//     // .then(response => response.json())
//     // .then(response => console.log(response))
//     // .catch(err => console.error(err));
  


//     return (
//       <div className='container-fluid movie-app'>
// 			<div className='row d-flex align-items-center mt-4 mb-4'>
// 				<MovieListHeading heading='Movies' />
// 				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
// 			</div>
// 			<div className='row'>
// 				<MovieList movies={movies} />
// 			</div>
// 		</div>
//     );
//   }
  
//   export default App;



import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';

const App = () => {
	const [movies, setMovies] = useState([]);
	const [searchValue, setSearchValue] = useState('');


	const getMovieRequest = async (searchValue) => {
		const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

	useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);

	return (
		<div className='container-fluid movie-app'>
			<div className='row d-flex align-items-center mt-4 mb-4'>
				<MovieListHeading heading='Rate, React & Review' />
				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
			</div>
			<div className='row'>
				<MovieList
					movies={movies}
				/>
			</div>
		</div>
	);
};

export default App;
