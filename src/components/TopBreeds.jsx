// components/TopBreeds.jsx
import React from 'react';

const TopBreeds = () => {
    const breeds = [
        'Deshi Shahi', 
        'Sahiwal Cross', 
        'Red Chittagong', 
        'Black Bengal Goat', 
        'Jamunapari',
        'Bhojpuri Sheep',
        'Brahma Cross'
    ];

    return (
        <section className="bg-emerald-900 py-16 sm:py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                <div className="mx-auto max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Popular Breeds We Offer
                    </h2>
                    <p className="mt-4 text-lg leading-8 text-emerald-200 mb-10">
                        From the robust Sahiwal to the premium Black Bengal goat, explore the most sought-after breeds sourced directly from trusted local farmers.
                    </p>
                </div>
                
                <div className="flex flex-wrap items-center justify-center gap-4">
                    {breeds.map((breed, index) => (
                        <span 
                            key={index} 
                            className="inline-flex items-center rounded-full bg-emerald-800/80 px-6 py-3 text-sm font-semibold tracking-wide text-emerald-50 border border-emerald-700 shadow-sm transition-colors hover:bg-emerald-700 hover:text-white cursor-default"
                        >
                            {breed}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TopBreeds;