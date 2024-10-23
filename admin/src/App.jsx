import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import AddItem from './pages/AddItem/AddItem'
import ListItem from './pages/ListItem/ListItem'
import Sidebar from './components/Sidebar/Sidebar'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Sidebar />
        <Routes>
          <Route path='/add' element={<AddItem />}/>
          <Route path='/list' element={<ListItem />} />
        </Routes>
    </div>
  )
}

export default App
