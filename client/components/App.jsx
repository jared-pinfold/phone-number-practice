import React from 'react'
const phoneNumber = '0275757023'

const App = () => {
  return (
    <>
      <h1><a href={`tel:${phoneNumber}`}>{phoneNumber}</a></h1>
    </>
  )
}

export default App
