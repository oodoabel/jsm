import React, { useState, useEffect } from 'react'
import Search from './assets/components/Search'
import config from '../config'

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

  const [ errorMessage, setErrorMessage ] = useState('')


  
  const fetchMovies = async () => {
    try{

      const endpoint = `${API_BASE_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;

      const response = await fetch(endpoint, API_OPTIONS);
      
      if(!response.ok) {
        throw new Error('Failed to fetch movies');
      }
      
      const data = await response.json()

      console.log({data})

    } catch(error) {
      console.log({
        message: 'error fetching movies',
        error
      });
      setErrorMessage('Error fetching movies. Please try again later');
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
      </header>

      <Search searchTerm = {searchTerm} setSearchTerm = {setSearchTerm} />
      <h1 className='text-white'>{searchTerm}</h1>

    </div>
    
     
    </main>
  )
}

export default App
