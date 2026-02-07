import React from 'react'
import { categories } from '../constants'


const Category = () => {
  return (
    <div className='flex flex-row w-1/3 mt-16 gap-8 rounded-full border-zinc-500 border-1  bg-zinc-700 p-4 items-center justify-center tracking-wider'>
      {categories.map(({id, name}) => (
        <button className='text-xs text-center hover:bg-lime-300 p-2 cursor-pointer  rounded-full w-20  hover:text-zinc-900 transition-colors' key={id}>{name}</button>
      )
      )}
    </div>
  )
}

export default Category
