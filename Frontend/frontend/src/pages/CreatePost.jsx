import React from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const navigate = useNavigate()
  const handleSubmit = async(e) => {
    e.preventDefault()

    const formData = new FormData(e.target)
    axios.post('http://localhost:3000/create-post', formData)
    .then((res) => {
      navigate('/posts')
    })
  }

  return (
    <div className='flex justify-between'>
      <div className='text-white font-bold px-10 py-40'>
        <h1 className='text-6xl'>SAVE YOUR</h1>
        <h1 className='text-9xl leading-40 text-orange-400' style={{textShadow: "0 0 15px rgba(255,255,255,0.6)"}}>MEMORIES</h1>
        <div className='flex justify-between'>
          <h1 className='text-2xl leading-18 tracking-widest text-orange-400'>♦ Click</h1>
          <h1 className='text-2xl leading-18 tracking-widest text-orange-400'>♦ Upload</h1>
          <h1 className='text-2xl leading-18 tracking-widest text-orange-400'>♦ Remember</h1>
        </div>
      </div>
      <div className=' py-5 flex flex-col items-center justify-evenly h-120 w-150 bg-white/90 backdrop-blur-md mb-30 mt-20 mr-12 rounded-4xl border border-white shadow-[0_0_20px_rgba(255,255,255,0.8),0_0_60px_rgba(255,255,255,0.6)]'>
        <h1 className='font-bold text-3xl text-orange-500'>CREATE POST</h1>
        <form className='flex flex-col items-center justify-center gap-8 p-10' onSubmit={handleSubmit}>
          <input type='file' name='image' accept='image/*' required className='border-orange-400 rounded-xl file:rounded-lg file:font-semibold file:transition-all file:duration-300 border w-130 h-10 file:bg-orange-500 file:text-white file:border-0 file:px-5 file:py-2 file:mr-4 file:cursor-pointer file:hover:bg-orange-800'/>
          <textarea type='text' name='caption' required placeholder='Enter Caption' style={{resize:'none'}} className='border-orange-400 placeholder:text-black focus:outline-none rounded-xl border w-130 h-40 px-5 py-2' />
          <button className='bg-orange-500 text-white font-bold px-6 py-3 rounded-xl cursor-pointer w-fit hover:scale-105 transition-all duration-300'>UPLOAD POST</button>
        </form>
      </div>
      
    </div>
  )
}

export default CreatePost
