import React from 'react'
const phoneNumber = '0210637576'

const App = () => {
  return (
    <>
      <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
    </>
  )
}

export default App
