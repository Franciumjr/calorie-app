"use client"

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
      
      <AsyncPaginate
        placeholder="Search for foods..."
        debounceTimeout={600}
        onChange={handleOnChange}
        loadOptions={loadOptions}
        className="flex items-center w-full px-4 py-1 rounded-full border border-zinc-400 transition-all duration-300"
        styles={{
    control: (base) => ({
      ...base,
      backgroundColor: "transparent",
      border: "transparent", // zinc-600
      borderRadius: "9999px",
      padding: "2px 16px",
      boxShadow: "none",
      "&:hover": {
        borderColor: "#71717a", // zinc-500
      },
    }),
    input: (base) => ({
      ...base,
      // Color of the text while you are typing
      color: "#e4e4e7", // zinc-200
    }),
    placeholder: (base) => ({
      ...base,
      color: "#a1a1aa", // zinc-400
    }),
    singleValue: (base) => ({
      ...base,
      // Color of the item after you select it
      color: "#e4e4e7", // zinc-200
    }),
    menu: (base) => ({
      ...base,
      backgroundColor: "#ffffff", // White background for the dropdown list
      borderRadius: "12px",
      marginTop: "8px",
      overflow: "hidden",
    }),
    option: (base, state) => ({
      ...base,
      // Autocomplete list text color
      color: "#000000", // Black text
      backgroundColor: state.isFocused ? "#f4f4f5" : "white", // zinc-100 on hover
      cursor: "pointer",
      "&:active": {
        backgroundColor: "#e4e4e7",
      },
    }),
  }}
      />
      <div className="flex gap-4">
      <Link to="/bmi"><Button color="lime" radius="full" variant="solid">BMI </Button></Link>
      
      </div>
    </div>
  );
};

export default Searchbar;
