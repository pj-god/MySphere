import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Feed = () => {

  const [posts, setPosts] = useState([
    {
      _id: "",
      image: "",
      caption: ""
    }
  ])

  useEffect(() => {
    axios.get("http://localhost:3000/posts")
    .then((res) => {
      setPosts(res.data.posts)
    })
  }, [])

  return (
    <div>
      <h1 className='text-5xl text-orange-400 font-bold py-10 text-center hover:scale-110 transition-all duration-300 cursor-default hover:text-orange-400' style={{ textShadow: "0 0 15px rgba(255,255,255,0.6)" }}>MY LOVELY MEMORIES</h1>
      <div className='grid grid-cols-3 items-center gap-20 h-100% w-100% py-10 px-10 mb-15'>
        {
          posts.length > 0 ? (
            posts.map((post) => (
              <div key={post._id} className='bg-white px-10 py-12 rounded-4xl w-96 h-120 flex justify-between flex-col border-4 border-amber-500'>
                <div className='flex justify-center items-center flex-1 overflow-hidden'>
                  <img src={post.image} alt={post.caption} className='rounded-3xl max-w-100% max-h-80  border-2 border-amber-500' />
                </div>
                <div>
                  <p className='text-black text-xl text-center mt-5 font-medium'>{post.caption}</p>
                </div>
              </div>
            ))
          ) : (
            <h1>No Posts available</h1>
          )
        }
      </div>
    </div>
  )
}

export default Feed
