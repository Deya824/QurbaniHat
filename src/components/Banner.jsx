import Link from "next/link";

const Banner = () => {
    return (
        <section className="relative bg-emerald-950 text-white overflow-hidden">
            {/* Background Image & Overlay */}
            <div className="absolute inset-0 z-0">
                {/* 
                  Note: Replace this src with your own high-quality farm/cattle image. 
                  This is a placeholder from Unsplash. 
                */}
                <img
                    src="https://images.unsplash.com/photo-1545652985-055d7fc7ebdd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                    alt="Cattle grazing in a field"
                    className="h-full w-full object-cover opacity-30"
                />
                {/* Gradient fade from left to right for text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-950/80 to-transparent"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start px-6 py-24 text-left sm:py-32 lg:px-8">
                
                {/* Status Badge */}
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-800/50 px-3 py-1.5 text-sm font-medium text-emerald-300 backdrop-blur-sm">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    Bookings for Qurbani are now open
                </div>

                {/* Main Heading */}
                <h1 className="mb-6 max-w-2xl text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                    Find the Perfect <span className="text-emerald-400">Qurbani</span> Livestock
                </h1>
                
                {/* Subheading/Description */}
                <p className="mb-10 max-w-2xl text-lg leading-relaxed text-emerald-100 sm:text-xl">
                    Skip the hassle, heat, and crowd of the traditional haat. Browse hundreds of healthy, verified cows and goats directly from trusted farmers across the country.
                </p>

                {/* Call to Action Buttons */}
                <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
                    <Link 
                        href="/animals"
                        className="group inline-flex items-center justify-center rounded-lg bg-emerald-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-emerald-500/30 transition-all duration-200 hover:bg-emerald-400"
                    >
                        Browse Animals
                       
                    </Link>
                    
                   
                </div>

            </div>
        </section>
    );
};

export default Banner;