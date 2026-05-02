export default function Loading() {
    return (
        <div className="flex min-h-[70vh] w-full flex-col items-center justify-center space-y-4">
           
            <span className="loading loading-spinner loading-lg text-emerald-600"></span>
            
            <div className="text-center">
                <h3 className="text-xl font-bold text-emerald-950">Loading Livestock</h3>
                <p className="text-sm text-emerald-700 animate-pulse">
                    Fetching the best cattle for you...
                </p>
            </div>

          
            <div className="mx-auto mt-12 w-full max-w-7xl px-6 lg:px-8 opacity-20 grayscale">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="h-64 rounded-2xl bg-gray-200 animate-pulse"></div>
                    ))}
                </div>
            </div>
        </div>
    );
}