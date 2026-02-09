import { Suspense, useState } from "react";
import React, { useEffect} from 'react'
import Card from "./Card";
import Loading from "./Loading";
import Searchbar from "./Searchbar";
import {Button, Skeleton} from "@radix-ui/themes";
import Category from "./Category";



const Dashboard = () => {

    const [selectedFood, setSelectedfood] = useState(null);
    const [visibleItems, setVisibleItems] = useState(9);
    const [food, setFood] = useState([]);
    const [activeCategory, setActivecategory] = useState("all");

    const filteredProducts = activeCategory === "all" 
    ? food.products
    : food.products.filter (item => 
        item.categories_tags?.includes(activeCategory)
    );

    
    useEffect(() => {
        const fetchData = async () => { 
            try { 
                const API_URL = "https://world.openfoodfacts.org/api/v2/search?page_size=100&fields=code,product_name,nutriments,image_url,categories";
                const response = await fetch(API_URL); 
                const data = await response.json(); 
                setFood(data); 
                console.log(data);
            } catch (error) { 
                console.error("Error fetching data:", error); 
            }
            
        }; 
        fetchData();
        
    }, []);
    const handleSearchResult = (selectedOptions) => {
        if (selectedOptions) {
            setFood({products: [selectedOptions]});
            setVisibleItems(1)
        }
        
    }
    const handleLoadMore = () => {
        setVisibleItems((prev) => prev + 6);
    }

  return (


    
        <div className="bg-zinc-800 ">
            <Searchbar onSearchChange ={(food) => setSelectedfood(food)}></Searchbar>
            
            <div className="flex justify-center">
                <Category></Category>
            </div>
            <main className="mt-10 justify-center flex">
                {selectedFood ? (
                <Card data={selectedFood} />
                ) : (
                <p className="text-center text-gray-500">Search for something to see its nutrition!</p>
                )}
            </main>
            <div className="mx-12 mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {food && food.products && food.products.slice(0, visibleItems).map((item, index) => (
                        <Suspense fallback ={<Skeleton/>}>
                            <Card key={index} data={item} />
                        </Suspense>
                ))}
                
            </div>
            
            <Button color="lime" radius="full" onClick={handleLoadMore}>Load More</Button>
        </div>
        
  )
}

export default Dashboard
