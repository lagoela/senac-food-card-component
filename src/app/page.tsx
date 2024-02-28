"use client";

import Image from "next/image";
import { FoodCard } from "../components/food-card";

interface Foods {
  name: string;
  price: number;
  image: string;
  alt: string;
  onClick: () => void;
}

const foods: Foods[] = [
  {
    name: "Hamburguer",
    price: 15,
    image: "hamburger.jpg",
    alt: "An Hamburger Photo",
    onClick: () => console.log("Hamburguer"),
  },
  {
    name: "Pizza",
    price: 25,
    image: "pizza.jpg",
    alt: "An Pizza Photo",
    onClick: () => console.log("Pizza"),
  },
  {
    name: "Sushi",
    price: 35,
    image: "sushi.jpg",
    alt: "An Sushi Photo",
    onClick: () => console.log("Sushi"),
  },
  {
    name: "Hot Dog",
    price: 10,
    image: "hotdog.jpg",
    alt: "A Hot Dog Photo",
    onClick: () => console.log("Hot Dog"),
  },
  {
    name: "Pasta",
    price: 12,
    image: "pasta.jpg",
    alt: "A Pasta Photo",
    onClick: () => console.log("Pasta"),
  },
  {
    name: "Salad",
    price: 8,
    image: "salad.jpg",
    alt: "A Salad Photo",
    onClick: () => console.log("Salad"),
  },
  {
    name: "Ice Cream",
    price: 6,
    image: "icecream.jpg",
    alt: "An Ice Cream Photo",
    onClick: () => console.log("Ice Cream"),
  },
];

export default function Home() {
  return (
    <main className="h-full flex flex-col justify-center items-center bg-white">
      <div className="m-10">
        <ul className="space-y-5 md:grid md:grid-cols-3 md:gap-5 md:space-y-0">
          {foods.map((food, index) => (
            <li key={index}>
              <FoodCard
                name={food.name}
                price={food.price}
                image={food.image}
                alt={food.alt}
                onClick={food.onClick}
              />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
