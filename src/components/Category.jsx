import React from 'react'
import { categories } from '../constants'


const Category = () => {
  return (
    <div className='flex flex-row mt-16 gap-8 rounded-full border-zinc-200 border-1 bg-zinc-50 p-4 items-center justify-center tracking-wider'>
      {categories.map(({id, name}) => (
        <button   className='text-xs text-center text-black hover:bg-lime-300 p-2 cursor-pointer  rounded-full w-20  hover:text-black transition-colors' key={id}>{name}</button>
      )
      )}
    </div>
  )
}

export default Category
