import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import { AsyncPaginate } from 'react-select-async-paginate'

const Searchbar = () => {

  const [search, setSearch] = React.useState(null);

  const handleOnChange = (searchData) => {
    setSearch(searchData);
  }

  const customStyles = {
    input: (base) => ({
      ...base,
      backgroundColor: 'transparent',
    }),
  };

  const loadOptions = async (inputValue) => {
    if (!inputValue) return { options: [] };

    try {
      // Fetching from Open Food Facts search endpoint
      const API_URL = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${inputValue}&search_simple=1&action=process&json=1&fields=code,product_name,nutriments,image_url`;
      const response = await fetch(API_URL);
      const data = await response.json();
      return { options: data.products.map(product => 
        ({ value: product.code,
           label: product.product_name,
           ...product,
           style: customStyles
          })) 
        || [] };
    } 
    catch (error) { // print error to console when fetch fails
      console.error("Error fetching search results:", error);
      return { options: [] };
    }
  
}
  return (
      <div className=" mt-4 bg-zinc-800 font-sans space-x-3 flex flex-row gap-4">
        
        <AsyncPaginate
          placeholder="Search for foods..."
          onChange={handleOnChange}
          loadOptions={loadOptions}
          className='w-1/3 justify-between flex flex-col mx-8 bg-none text-black focus:outline-none border border-zinc-600 rounded-full px-4 py-2'
        />
        <Button  text="BMI" link="/bmi" />
      </div>
  )
}

export default Searchbar
