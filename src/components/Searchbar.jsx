import { React, useState } from "react";
import { Link } from "react-router-dom";
import {Button, Avatar} from "@radix-ui/themes"
import { AsyncPaginate } from "react-select-async-paginate";


const Searchbar = ({onSearchChange}) => {
  const [search, setSearch] = useState(null);

  

    const customStyles = {
      input: (base) => ({
        ...base,
        backgroundColor: "transparent",
      }),
    };



  const loadOptions = async (inputValue) => {
    if (!inputValue) return { options: [] };

    try {
      // Fetching from Open Food Facts search endpoint
      const API_URL = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${inputValue}&search_simple=1&action=process&json=1&fields=code,product_name,nutriments,image_url`;
      const response = await fetch(API_URL);
      const data = await response.json();
      return {
        options:
          data.products.map((product) => ({
            value: product.code,
            label: product.product_name || "Unknown Product", 
            //pasing the full product data
            ...product,
          })) 
      };
      
    } 
    catch (error) {
      // print error to console when fetch fails
      console.error("Error fetching search results:", error);
      return { options: [] };
    }
    
  };
  const handleOnChange = (selectedOption) => {
    setSearch(selectedOption);
    onSearchChange(selectedOption);
    
  }
  return (
    <div className="mx-4 max-h-screen justify-between mt-4 bg-zinc-800 font-sans space-x-3 flex flex-row gap-4">
      <Link to="/">
        <h1 className="font-extrabold text-lime-300">BroScience</h1>
      </Link>
      <AsyncPaginate
        placeholder="Search for foods..."
        debounceTimeout={600}
        onChange={handleOnChange}
        loadOptions={loadOptions}
        className="flex items-center w-full px-4 py-1 rounded-full border border-zinc-400 transition-all duration-300"
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,

            backgroundColor: "transparent", // Removes the white background
            color: "white",
            border: "none", // Matches zinc-600
            borderRadius: "9999px", // Matches rounded-full
            padding: "2px 16px",
            boxShadow: "none",
            "&:hover": {
              borderColor: "#71717a", // Matches zinc-500 on hover
            },
            input: (baseStyles) => ({
              ...baseStyles,
              color: "white", // Ensures typed text is visible
            }),
            placeholder: (baseStyles) => ({
              ...baseStyles,
              color: "#a1a1aa", // zinc-400 for placeholder
            }),
          }),
        }}
      />
      <div className="flex gap-4">
      <Link to="/bmi"><Button color="lime" radius="full" variant="solid">BMI </Button></Link>
      <Avatar radius="full" src="/profile.jpg"></Avatar>
      </div>
    </div>
  );
};

export default Searchbar;
