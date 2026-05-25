import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import CreatePost from "./pages/CreatePost.jsx";
import Feed from "./pages/Feed.jsx";

const App = () => {
  return (
    <div className='h-full bg-black'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create-post' element={<CreatePost />} />
        <Route path='/posts' element={<Feed />} />
      </Routes>
    </div>
  )
}

export default App
