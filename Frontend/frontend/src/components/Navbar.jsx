import React from 'react'
import { Link, Links } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center text-orange-300 px-12 py-6'>
      <div className='font-bold text-5xl text-orange-400'>
        <Link to='/'>PJ DEV</Link>
      </div>
      <div className='font-medium text-2xl flex gap-8'>
        <Link to='/' className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-orange-400 fter:transition-all after:duration-300 hover:after:w-full hover:scale-110 transition-all hover:text-orange-400">Home</Link>
        <Link to='/create-post' className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-orange-400 fter:transition-all after:duration-300 hover:after:w-full hover:scale-110 transition-all hover:text-orange-400">Create Post</Link>
        <Link to='/posts' className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-orange-400 fter:transition-all after:duration-300 hover:after:w-full hover:scale-110 transition-all hover:text-orange-400">Feed</Link>
      </div>
    </div>
  )
}

export default Navbar
