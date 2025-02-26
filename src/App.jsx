import React, { useState, useEffect } from 'react'
import Search from './assets/components/Search'
import Spinner from './assets/components/spinner';
import config from '../config'
import MovieCard from './assets/components/MovieCard';

const API_BASE_URL = 'https://api.themoviedb.org/3';

const token = config.ACCESS_TOKEN

// console.log({token});

const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${token}`

  }

  
}


const App = () => {

  const [ searchTerm, setSearchTerm ] = useState('');

  const [ errorMessage, setErrorMessage ] = useState('');

  const [ movieList, setMovieList ] = useState([]);

  const [ isLoading, setIsLoading ] = useState(false)
  
  const fetchMovies = async () => {

    setIsLoading(true);
    setErrorMessage('');

    try{

      const endpoint = `${API_BASE_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;

      const response = await fetch(endpoint, API_OPTIONS);
      
      if(!response.ok) {
        throw new Error('Failed to fetch movies');
      }
      
      const data = await response.json();

      const result = await data.results;
      setMovieList(result);


      // if (data.response === 'False') {
      //   setErrorMessage(data.error || 'failed to fetch movies');
      //   setMovieList([]);
      //   return;
      // }

      setMovieList(data.results || []);
      console.log({movieList})

        } catch(error) {
          console.log({
            message: 'error fetching movies',
            error
          });
          setErrorMessage('Error fetching movies. please try again later');
        } finally{
          setIsLoading(false);
        }
  }

  useEffect( () => {
    fetchMovies()
  }, [ ])
  return (
    <main>
    <div className='pattern'/>

    <div className='wrapper'>
      <header>
        <img src="./hero.png" alt="Hero banner" />
        <h1>Find <span className='text-gradient'>Movies</span> you will enjoy without the hassle</h1>
      <Search searchTerm = {searchTerm} setSearchTerm = {setSearchTerm} />
      </header>
      <section className='all-movies '>
        <h2 className='mt-[40px]'>All movies</h2>

       {isLoading ? (
          <Spinner />
            ) : errorMessage ? (
                <p className='text-red-500'>{errorMessage}</p>
            ) : (
                <ul className='flex'>
                    <li className='text-white'>
                    {movieList.map((movie) => (
                        <MovieCard key= {movie.id} movie={movie}/>
                    ))}
                    </li>
                </ul>
            )}
      </section>

    </div>
    
     
    </main>
  ) 
}

export default App
