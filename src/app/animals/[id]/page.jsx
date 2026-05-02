import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect, notFound } from "next/navigation";
import BookingModalForm from "./BookingModalForm"; // Import the client form
import { getTasks } from "@/lib/tasks";

// Note: Ensure getTasks() is properly imported at the top of your file

const AnimalsDetailspage = async ({ params }) => {
    const { id } = await params; 
    
    const animals = await getTasks();
    const animal = animals.find(a => a.id === parseInt(id));

    const session = await auth.api.getSession({
        headers: await headers()
    });
    const user = session?.user;
    
    // if (!user) {
    //    redirect(`/auth/signin?callbackUrl=/animals/${id}`);
    // }

    if (!animal) {
        notFound();
    }

    return (
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
                
                {/* Left Side: Animal Image */}
                <div className="overflow-hidden rounded-3xl bg-gray-50 shadow-md h-fit border border-emerald-100">
                    <img 
                        src={animal.image} 
                        alt={animal.name} 
                        className="h-full w-full object-contain sm:h-[500px]"
                    />
                </div>

                {/* Right Side: Details */}
                <div className="flex flex-col justify-center">
                    
                    <div className="mb-4 flex items-center justify-between">
                        <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-800 shadow-sm">
                            {animal.category}
                        </span>
                        <span className="text-sm font-medium text-gray-500">
                             {animal.location}
                        </span>
                    </div>

                    <h1 className="text-4xl font-extrabold text-emerald-950 sm:text-5xl">{animal.name}</h1>
                    <p className="mt-4 text-3xl font-bold text-emerald-600">৳ {animal.price.toLocaleString()}</p>

                    <div className="mt-6 grid grid-cols-2 gap-4 border-y border-emerald-100 py-6">
                        <div><p className="text-sm text-gray-500">Breed</p><p className="font-semibold text-emerald-900">{animal.breed}</p></div>
                        <div><p className="text-sm text-gray-500">Type</p><p className="font-semibold text-emerald-900">{animal.type}</p></div>
                        <div><p className="text-sm text-gray-500">Weight</p><p className="font-semibold text-emerald-900">{animal.weight} kg</p></div>
                        <div><p className="text-sm text-gray-500">Age</p><p className="font-semibold text-emerald-900">{animal.age} Years</p></div>
                    </div>

                    <p className="mt-6 text-gray-600 leading-relaxed mb-8">
                        {animal.description}
                    </p>

                    {/* --- BOOKING SECTION --- */}
                    <div className="rounded-2xl bg-emerald-50 p-6 border border-emerald-200 shadow-sm">
                        <h3 className="text-xl font-bold text-emerald-900 mb-2">Ready to purchase?</h3>
                        <p className="text-sm text-emerald-700 mb-6">
                            Secure this {animal.type.toLowerCase()} today by submitting your delivery details.
                        </p>
                        
                        {/* Render our client component here */}
                        <BookingModalForm 
                            user={user} 
                            animalName={animal.name} 
                            animalType={animal.type} 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnimalsDetailspage;