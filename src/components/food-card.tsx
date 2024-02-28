"use client";
import { Plus } from "lucide-react"


interface FoodCardProps {
    name: string;
    price: number;
    image: string;
    alt: string;
    onClick: () => void;
}

export function FoodCard({ name, price, image, onClick, alt }: FoodCardProps) {
    return (
        <div className="group w-64 h-80 bg-white bg-none rounded-2xl border-2 border-zinc-100 hover:shadow-md hover:border-none hover:bg-gradient-to-br from-blue-beatiful/70 to-blue-beatiful transition-transform duration-300 ease-in-out transform hover:scale-105">
            <div className="flex justify-center py-6 border-none">
                <img src={image} alt={alt} className="size-32 m-2 rounded-full object-cover border-none shadow-lg group-hover:shadow-none" />
            </div>
            <h2 className="text-zinc-500 text-center text-lg tefont-semibold py-4 w-full group-hover:text-white">{name}</h2>
            <div className="w-full flex flex-row items-center justify-between px-4 mt-4">
                <p className="font-bold text-gray-500 mt-2 group-hover:text-white">R$ {price}</p>
                <button className="bg-gradient-to-br from-blue-beatiful/60 to-blue-beatiful shadow-none group-hover:bg-none group-hover:shadow-md group-hover:bg-white group-hover:text-blue-beatiful text-white px-1 py-1 rounded-md" onClick={onClick}>
                    <Plus size={20}/>
                </button>
            </div>
        </div>
    );
}