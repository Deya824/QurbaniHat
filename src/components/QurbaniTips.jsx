// components/QurbaniTips.jsx
import React from 'react';

const QurbaniTips = () => {
    const tips = [
        {
            icon: "🦷",
            title: "Check the Teeth",
            text: "Ensure the animal is of the correct age. Cows must have at least two permanent front teeth (2 years old), and goats must have at least one year of age."
        },
        {
            icon: "✨",
            title: "Physical Health",
            text: "The animal should be active, have clear eyes, a shiny coat, and no visible injuries. Check for normal breathing and ensure there is no limping."
        },
        {
            icon: "🌾",
            title: "Feeding Habits",
            text: "A healthy animal eats eagerly and ruminates (chews cud) regularly. Don't hesitate to ask the farmer about its recent diet and vaccination history."
        }
    ];

    return (
        <section className="bg-white py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight text-emerald-950 sm:text-4xl">Essential Qurbani Tips</h2>
                    <p className="mt-4 text-lg leading-8 text-gray-600">
                        Keep these important guidelines in mind to ensure you select a healthy and suitable animal for your Qurbani.
                    </p>
                </div>
                
                <div className="mx-auto grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
                    {tips.map((tip, index) => (
                        <div key={index} className="flex flex-col rounded-2xl bg-emerald-50 p-8 border border-emerald-100 shadow-sm transition-all hover:shadow-md">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl shadow-sm border border-emerald-100">
                                {tip.icon}
                            </div>
                            <h3 className="mb-3 text-xl font-bold text-emerald-900">{tip.title}</h3>
                            <p className="text-emerald-700 leading-relaxed flex-1">
                                {tip.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default QurbaniTips;