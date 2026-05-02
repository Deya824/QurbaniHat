'use client';

import { UpdateUserModal } from "@/components/UpdateUserModal";
import { useSession } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";

import 'animate.css/animate.min.css';

const ProfilePage = () => {
    const { data, isPending } = useSession();
    const user = data?.user;

    if (isPending) {
        return (
            <div className="flex min-h-[70vh] items-center justify-center">
                <span className="loading loading-spinner loading-lg text-emerald-600"></span>
            </div>
        );
    }

    return (
        <div className="mx-auto max-w-3xl px-6 py-20 animate__animated animate__fadeIn">
            <Card className="max-w-md mx-auto overflow-hidden rounded-3xl shadow-xl border border-emerald-100 p-0">
                <div className="h-24 bg-emerald-600 w-full"></div>
                
                <div className="flex flex-col items-center p-8 pt-0">
                    
                    <img
                        src={user?.image || `https://ui-avatars.com/api/?name=${user?.name || 'User'}&background=10b981&color=fff`} 
                        alt="User Avatar" 
                        className="h-24 w-24 -mt-12 rounded-full border-4 border-white bg-white shadow-md mb-4"
                    />

                    <div className="text-center space-y-1 mb-8">
                        <h1 className="text-2xl font-bold text-emerald-950">{user?.name}</h1>
                        <p className="text-emerald-700 font-medium">{user?.email}</p>
                    </div>

                   
                   <UpdateUserModal/>
                </div>
            </Card>
        </div>
    );
};

export default ProfilePage;