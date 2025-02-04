import React, { useState } from 'react'
import Search from './assets/components/Search'



const App = () => {

  const [ searchTerm, setSearchTerm ] = useState('');

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
