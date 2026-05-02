import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="flex min-h-[70vh] flex-col items-center justify-center text-center px-4">
            <h1 className="text-9xl font-extrabold text-emerald-600">404</h1>
            <h2 className="mt-4 text-3xl font-bold text-emerald-950">Animal Not Found</h2>
            <p className="mt-2 text-gray-600">Sorry, we couldn't find the livestock you're looking for.</p>
            <Link 
                href="/animals" 
                className="mt-8 rounded-lg bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-700 transition-colors"
            >
                Back to All Animals
            </Link>
        </div>
    );
}