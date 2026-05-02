'use client';

import { authClient, useSession } from "@/lib/auth-client";
import { Button, Input, Card } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const UpdateProfilePage = () => {
    const router = useRouter();
    const { data: session, isPending } = useSession();
    const [isLoading, setIsLoading] = useState(false);

    // Redirect if not logged in
    useEffect(() => {
        if (!isPending && !session) {
            router.push("/auth/signin");
        }
    }, [session, isPending, router]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const formData = new FormData(e.currentTarget);
        const newName = formData.get("name");
        const newImage = formData.get("image");

        // Better Auth updateUser logic
        const { error } = await authClient.updateUser({
            name: newName,
            image: newImage,
        });

        setIsLoading(false);

        if (error) {
            toast.error(error.message || "Failed to update profile");
        } else {
            toast.success("Profile updated successfully!");
            router.refresh();
            router.push("/profile");
           
        }
    };

    if (isPending) {
        return (
            <div className="flex min-h-[70vh] items-center justify-center">
                <span className="loading loading-spinner loading-lg text-emerald-600"></span>
            </div>
        );
    }

    return (
        <div className="mx-auto max-w-2xl px-6 py-16">
            <Card className="p-8 shadow-xl border border-emerald-100 bg-white">
                <h1 className="text-3xl font-bold text-emerald-950 mb-2">Update Information</h1>
                <p className="text-gray-600 mb-8">Modify your account details below.</p>

                <form onSubmit={handleUpdate} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-emerald-900 mb-2">Full Name</label>
                        <Input 
                            name="name" 
                            defaultValue={session?.user?.name} 
                            placeholder="Enter your name"
                            variant="bordered"
                            className="w-full"
                        />
                    </div>

                    

                    <div>
                        <label className="block text-sm font-medium text-emerald-900 mb-2">Profile Image URL</label>
                        <Input 
                            name="image" 
                            defaultValue={session?.user?.image} 
                            placeholder="https://example.com/photo.jpg"
                            variant="bordered"
                            className="w-full"
                        />
                    </div>

                    <div className="flex gap-3 pt-4">
                        <Button 
                            type="button"
                            variant="flat"
                            onPress={() => router.push("/profile")}
                            className="flex-1"
                        >
                            Cancel
                        </Button>
                        <Button 
                            type="submit"
                            isLoading={isLoading}
                            className="flex-1 bg-emerald-600 text-white font-semibold hover:bg-emerald-700"
                        >
                            Save Changes
                        </Button>
                    </div>
                </form>
            </Card>
        </div>
    );
};

export default UpdateProfilePage;