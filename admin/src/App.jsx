import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import AddItem from './pages/AddItem/AddItem'
import ListItem from './pages/ListItem/ListItem'
import Sidebar from './components/Sidebar/Sidebar'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const url = 'http://localhost:4000'

  return (
    <div className='app'>
      <Navbar />
      <ToastContainer />
      <Sidebar />
        <Routes>
          <Route path='/add' element={<AddItem url={url}/>}/>
          <Route path='/list' element={<ListItem url={url}/>} />
        </Routes>
    </div>
  )
}

export default App
