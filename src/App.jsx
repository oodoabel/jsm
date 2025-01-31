
import React from 'react'

const Card = ( { title } ) => {
  return (
    <h2>      {title}    </h2>
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
