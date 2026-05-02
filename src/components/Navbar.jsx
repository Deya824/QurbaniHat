'use client';
import { signOut, useSession } from "@/lib/auth-client";
import Link from "next/link";

const Navbar = () => {

    const { data, isPending } = useSession();

    if (isPending) {
        return <div className="flex h-16 items-center justify-center border-b border-separator bg-background/70">Loading...</div>
    }

   

    const user = data?.user;

    return (
        <div>
            <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
                <header className="flex h-16 items-center justify-between px-6">
                    
                    <div className="flex items-center gap-2">
                        <span className="text-xl">🐂</span>
                        <Link href="/" className="font-bold text-lg">QurbaniHat</Link>
                    </div>

                    <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
                        <li><Link className="hover:text-emerald-500 transition-colors" href="/">Home</Link></li>
                        <li><Link className="hover:text-emerald-500 transition-colors" href="/animals">All Animals</Link></li>
                        
                    </ul>

                   
                    <div className="flex items-center gap-4 text-sm font-medium">
                        {user ? (
                            <>
                                {/* Added Avatar */}
                                <img 
                                    src={user.image || `https://ui-avatars.com/api/?name=${user.name || 'User'}&background=10b981&color=fff`} 
                                    alt="User Avatar" 
                                    className="h-8 w-8 rounded-full border border-separator"
                                />
                                <p className="hidden sm:block">Welcome, {user.name}!</p>
                                <button
                                    className="text-red-500 hover:text-red-600 transition-colors"
                                    onClick={() => signOut()}
                                >
                                    Sign Out
                                </button>
                            </>
                        ) : (
                            <>
                                <Link className="hover:text-emerald-500 transition-colors" href="/auth/signin">Sign In</Link>
                                {/* Added Register Button */}
                                <Link 
                                    className="rounded-md bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700 transition-colors" 
                                    href="/auth/signup"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </div>
                </header>
            </nav>
        </div>
    );
};

export default Navbar;