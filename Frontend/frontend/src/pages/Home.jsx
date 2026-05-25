import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="text-white text-center py-40">
        <div>
            <h1 className=" text-6xl font-bold text-whitetransition-all duration-500 text-orange-300" style={{ textShadow: "0 0 25px rgba(255,255,255,0.25)" }}> SHARE YOUR</h1>
        </div>
        <div>
            <h1 className=" text-8xl font-bold text-whitetransition-all duration-500 text-orange-300 leading-35" style={{textShadow: "0 0 10px rgba(255,255,255,0.5)"}}>THOUGHTS "PRIVATELY"</h1>
        </div>
        <div className='mt-20 flex justify-center gap-15'>
            <Link to='/create-post' className='inline-block px-8 py-6 rounded-3xl cursor-pointer bg-orange-400 text-2xl font-bold hover:bg-orange-500 hover:scale-110 transition-all duration-300'>CREATE POST</Link>
            <Link to='/posts' className='inline-block px-8 py-6 rounded-3xl cursor-pointer bg-orange-400 text-2xl font-bold hover:bg-orange-500 hover:scale-110 transition-all duration-300'>VIEW FEED</Link>
        </div>
    </div>
  )
}

export default Home
