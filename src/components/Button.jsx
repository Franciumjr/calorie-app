import React from 'react'
import { Link } from 'react-router-dom'




const Button = ({ text, onClick, link, handleLoadMore }) => {
  return (
    <Link onClick={handleLoadMore} to={link} className=" w-36 bg-lime-300 text-center items-center flex justify-center text-black px-4 py-2 font-semibold rounded-full hover:bg-zinc-400 transition">
      
      {text}
    </Link>
  )
}

export default Button
