import React, { Suspense } from "react";
import Loading from "./Loading";
import { AlertDialog, Button, Flex } from "@radix-ui/themes";

const Card = ({ data }) => {
  // Check if data exists; if it's an array with items, take the first one
  const item = Array.isArray(data) ? data[0] : data;

  if (!item) return null;

  return (
    <div className="tracking-tight font-inter   border-zinc-500 border-1  text-white p-8 cursor-pointer  shadow-sm rounded-4xl w-full max-w-sm flex flex-col items-center justify-center text-center hover:-translate-y-1 transition-all bg-zinc-700">
      

      <div className="mt-4">
        {/* Added a fallback image if image_url is missing */}
        <img
          src={item.image_url || console.log("Image not found")}
          alt={item.product_name}
          className="w-32 h-32 bg-white  rounded-full object-contain mx-auto"
        />
        <h2 className=" text-xl my-4 font-semibold  ">
          {item.product_name || "Unknown Product"}
        </h2>

        {/* Optional Chaining */}
        <div className="space-y-1 tracking-tight ">
          <p className="flex justify-between">
            Calories:{" "}
            <span className="font-bold">
              {item.nutriments?.["energy-kcal_100g"] ?? "N/A"}{" "}
            </span>
          </p>
          <p className="flex justify-between">
            Fat:{" "}
            <span className="font-bold">
              {" "}
              {item.nutriments?.fat_100g ?? 0}g
            </span>
          </p>
          <p className="flex justify-between">
            Carbohydrates:{" "}
            <span className="font-bold">
              {item.nutriments?.carbohydrates_100g ?? 0}g
            </span>
          </p>
          <p className="flex justify-between">
            Proteins:{" "}
            <span className="font-bold">
              {item.nutriments?.proteins_100g ?? 0}g
            </span>
          </p>
          <AlertDialog.Root>
        <AlertDialog.Trigger>
          <Button radius="full" color="lime">
            Log
          </Button>
        </AlertDialog.Trigger>
        <AlertDialog.Content maxWidth="450px">
          <AlertDialog.Title>{item.product_name}</AlertDialog.Title>
          <AlertDialog.Description size="2">
            Add this to your diet?
          </AlertDialog.Description>

          <Flex gap="3" mt="4" justify="end">
            <AlertDialog.Cancel>
              <Button variant="soft" color="gray">
                Cancel
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action>
              <Button variant="solid" color="lime">
                Add
              </Button>
            </AlertDialog.Action>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>
        </div>
      </div>
    </div>
  );
};

export default Card;
