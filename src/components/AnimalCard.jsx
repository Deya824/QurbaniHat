// components/AnimalCard.jsx
import Link from "next/link";

const AnimalCard = ({ animal }) => {
    return (
        <div className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm border border-emerald-100 transition-all hover:shadow-lg hover:border-emerald-300">
            
            <div className="relative h-64 w-full overflow-hidden bg-gray-50">
                <img 
                    src={animal.image} 
                    alt={animal.name} 
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-emerald-800 shadow-sm backdrop-blur-sm">
                    {animal.location}
                </div>
            </div>

            {/* Animal Details */}
            <div className="flex flex-1 flex-col p-5">
                <div className="mb-1 flex items-start justify-between gap-2">
                    <h3 className="text-lg font-bold text-emerald-950">{animal.name}</h3>
                    <span className="shrink-0 rounded bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-800">
                        {animal.category}
                    </span>
                </div>
                
                <p className="mb-4 text-sm text-gray-600">
                    {animal.breed} • {animal.weight}kg • {animal.age} Years
                </p>

                <div className="mt-auto flex items-center justify-between border-t border-emerald-50 pt-4">
                    <p className="text-xl font-extrabold text-emerald-600">
                        ৳ {animal.price.toLocaleString()}
                    </p>
                    <Link 
                        href={`/animals/${animal.id}`}
                        className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-emerald-700 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                    >
                        Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AnimalCard;