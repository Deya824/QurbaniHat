// src/app/animals/page.jsx
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import AnimalGrid from "@/components/AnimalGrid"; // Import the client grid
import { getTasks } from "@/lib/tasks";

const AnimalsPage = async () => {
    // 1. Check Authentication
    
   
    
    const animals =await getTasks();



    return (
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
            
           
            <div className="mb-8 border-b border-emerald-100 pb-6">
                <h1 className="text-3xl font-bold text-emerald-950">All Available Livestock</h1>
                <p className="mt-2 text-emerald-700">Browse, sort, and find the perfect animal for your Qurbani.</p>
            </div>

            {/* Interactive Client Component */}
            <AnimalGrid initialAnimals={animals} />
            
        </div>
    );
};

export default AnimalsPage;