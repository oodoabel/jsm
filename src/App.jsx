
import React, { useState } from 'react'

const Card = ( { title } ) => {

  const [hasLiked, setHasLiked] = useState(false);

  return (
    <div style={{
      border: '1px solid #4b5262',
      padding: '20px',
      margin: '10px',
      backgroundColor:' #4b5262',
      borderRadius: '10px',
      paddingTop:'50px'
    }}>
      <h2>      {title}   <br /><button onClick={() => setHasLiked(!hasLiked)}>{hasLiked ? '🤍': '💔'}</button>
         </h2>
    </div>
  )
}


function App() {


  return (
    <>
      <Card title="The star wars"/>
      <Card title="Avatar"/>
      <Card title="The Lion king"/>
    </>
  )
}

export default App
