
"use client";

import { useState } from "react";
import AnimalCard from "./AnimalCard";

const AnimalGrid = ({ initialAnimals }) => {
    const [sortOrder, setSortOrder] = useState("default");

    
    const sortedAnimals = [...initialAnimals].sort((a, b) => {
        if (sortOrder === "low-to-high") return a.price - b.price;
        if (sortOrder === "high-to-low") return b.price - a.price;
        return 0; 
    });

    return (
        <div>
            {/* Sort Dropdown */}
            <div className="mb-6 flex justify-end">
                <select 
                    value={sortOrder} 
                    onChange={(e) => setSortOrder(e.target.value)}
                    className="rounded-lg border border-emerald-200 bg-white px-4 py-2 text-sm text-emerald-900 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                >
                    <option value="default">Sort by: Default</option>
                    <option value="low-to-high">Price: Low to High</option>
                    <option value="high-to-low">Price: High to Low</option>
                </select>
            </div>

            
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {sortedAnimals.map((animal) => (
                    <AnimalCard key={animal.id} animal={animal} />
                ))}
            </div>
        </div>
    );
};

export default AnimalGrid;