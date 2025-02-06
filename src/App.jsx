import React, { useState, useEffect } from 'react'
import Search from './assets/components/Search'

const API_BASE_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=6b4a9cca';

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    authorization: `Bearer ${API_KEY}`
  }
}

const App = () => {

  const [ searchTerm, setSearchTerm ] = useState('');

  const [ errorMessage, setErrorMessage ] = useState('')

  const fetchMovies = async () => {
    try{

      const endpoint = `${API_BASE_URL}/discover/movies?sort_by=popularity.desc`;

      const response = await fetch(endpoint, API_OPTIONS);

      throw new Error('Failed to fetch movies');

    } catch(error) {
      console.error(`Error fetching movies: ${error}`);
      setErrorMessage('Error fetching movies. Please try again later');
    } 
  }

  useEffect( () => {
    fetchMovies()
  })
  return (
    <main>
    <div className='pattern'/>

    <div className='wrapper'>
      <header>
        <img src="./hero.png" alt="Hero banner" />
        <h1>Find <span className='text-gradient'>Movies</span> you will enjoy without the hassle</h1>
      </header>

      <Search searchTerm = {searchTerm} setSearchTerm = {setSearchTerm} />
      <h1 className='text-white'>{searchTerm}</h1>

    </div>
    
     
    </main>
  )
}

export default App
