import React, { Suspense } from 'react'
import Loading from './Loading';

const Card = ({ data }) => {
  // Check if data exists; if it's an array with items, take the first one
  const item = Array.isArray(data) ? data[0] : data;

  if (!item) return null;

  return (
    
    <div className='hover:bg-lime-300 tracking-tight  hover:text-black border-zinc-500 border-1 font-sans  text-white p-8 cursor-pointer  shadow-sm rounded-4xl w-full max-w-sm flex flex-col items-center justify-center text-center hover:-translate-y-2 transition-all bg-zinc-700'>
      <div className="mt-4">
        {/* Added a fallback image if image_url is missing */}
        <img 
          src={item.image_url || 'https://via.placeholder.com/150'} 
          alt={item.product_name} 
          className='w-32 h-32 bg-white  rounded-full object-contain mx-auto'
          
        />
        <h2 className=' text-xl my-4 font-semibold'>{item.product_name || "Unknown Product"}</h2>
        
        {/* Optional Chaining */}
        <div className="space-y-1 tracking-tight">
          <p>Calories: <span className="font-bold">{(item.nutriments)?.['energy-kcal_100g']  ?? "N/A"} </span></p>
          <p>Fat: <span className="font-bold"> {item.nutriments?.fat_100g ?? 0}g</span></p>
          <p>Carbohydrates: <span className="font-bold">{item.nutriments?.carbohydrates_100g ?? 0}g</span></p>
          <p>Proteins: <span className="font-bold">{item.nutriments?.proteins_100g ?? 0}g</span></p>
        </div>
      </div>
    </div>
    
  )
}

export default Card