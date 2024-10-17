import React from 'react'
import Navbar from './assets/components/Navbar/Navbar.jsx'
import Banner from './assets/components/Banner/Banner.jsx'
import Categories from './assets/components/Categories/Categories.jsx'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Banner />
      <Categories />
    </div>
  )
}

export default App
