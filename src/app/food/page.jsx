"use client"


import { Suspense, useState, lazy } from "react";
import React, { useEffect } from 'react'

import Loading from "../../components/Loading";
import Searchbar from "../../components/Searchbar";
import { Button, Skeleton } from "@radix-ui/themes";
import Category from "../../components/Category";

import CardSkeleton from "../../components/CardSkeleton";
const Card = React.lazy(() => import("../../components/Card"))
const Food = () => {

    const [selectedFood, setSelectedfood] = useState(null);
    const [visibleItems, setVisibleItems] = useState(9);
    const [food, setFood] = useState([]);
    const [activeCategory, setActivecategory] = useState("all");
    const [isLoading, SetisLoading] = useState(true)
    const filteredProducts = activeCategory === "all"
        ? food.products
        : food.products.filter(item =>
            item.categories_tags?.includes(activeCategory)
        );


    useEffect(() => {
        const fetchData = async () => {
            console.log("fetching data...")
            SetisLoading(true)
            try {
                const API_URL = "https://world.openfoodfacts.org/api/v2/search?page_size=100&fields=code,product_name,nutriments,image_url,categories";
                const response = await fetch(API_URL);
                const data = await response.json();
                setFood(data);
                console.log(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
            finally {
                SetisLoading(false)
            }

        };
        fetchData();

    }, []);
    const handleSearchResult = (selectedOptions) => {
        if (selectedOptions) {
            setFood({ products: [selectedOptions] });
            setVisibleItems(1)
        }

    }
    const handleLoadMore = () => {
        setVisibleItems((prev) => prev + 6);
    }

    return (
        <div className="bg-white ">

            <Searchbar onSearchChange={(food) => setSelectedfood(food)}></Searchbar>

            <div className="flex justify-center">
                <Category></Category>
            </div>

            <main className="mt-10 justify-center flex">
                {selectedFood ? (
                    <Suspense fallback={<CardSkeleton />}>
                        <Card data={selectedFood} />
                    </Suspense>
                ) : null}
            </main>
            {isLoading ? (
                <div className="mx-12 mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Array.from({ length: 9 }).map((_, index) => (
                        <CardSkeleton></CardSkeleton>
                    ))
                    }

                </div>
            )
                :
                (
                    <div className="mx-12 mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProducts && filteredProducts.slice(0, visibleItems).map((item, index) => (
                            <Suspense key={index} fallback={<CardSkeleton />}>
                                <Card data={item} />
                            </Suspense>)
                        )}
                    </div>
                )



            }

            <Button color="lime" radius="full" onClick={handleLoadMore}>Load More</Button>
        </div>
    )
}

export default Food
