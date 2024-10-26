import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import AddItem from './pages/AddItem/AddItem'
import ListItem from './pages/ListItem/ListItem'
import Sidebar from './components/Sidebar/Sidebar'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <ToastContainer />
      <Sidebar />
        <Routes>
          <Route path='/add' element={<AddItem />}/>
          <Route path='/list' element={<ListItem />} />
        </Routes>
    </div>
  )
}

export default App
