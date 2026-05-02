
import Link from "next/link";
import AnimalCard from "./AnimalCard";
import { getTasks } from "@/lib/tasks";

const FeaturedAnimals = async() => {
    

   const animals=await getTasks();
const featured=animals.slice(0,4);
    return (
        <section className="bg-emerald-50/50 py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                
                {/* Section Header */}
                <div className="mb-10 flex items-end justify-between">
                    <div>
                        <h2 className="text-3xl font-bold text-emerald-950">Featured Animals</h2>
                        <p className="mt-2 text-emerald-700">Top-rated livestock ready for booking.</p>
                    </div>
                   
                </div>

                
                <div className="grid grid-cols-1 gap-6 md:grid-cols-4 ">
                    {featured.map((animal) => (
                        <AnimalCard key={animal.id} animal={animal} />
                    ))}
                </div>
                
               
            </div>
        </section>
    );
};

export default FeaturedAnimals;