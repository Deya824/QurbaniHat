'use client';
import { authClient } from "@/lib/auth-client";
import { Check, Eye, EyeSlash } from "@gravity-ui/icons";
import { Button, FieldError, Form, Input, InputGroup, Label, TextField } from "@heroui/react";
import { useState, Suspense } from "react"; // Added Suspense
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";

// 1. Move logic into a sub-component
const SignInForm = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [isVisible, setIsVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const callbackUrl = searchParams.get("callbackUrl") || "/";

    const onSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());

        const { data, error } = await authClient.signIn.email({
            email: userData.email,
            password: userData.password,
            rememberMe: true,
            callbackURL: callbackUrl 
        });

        setIsLoading(false);

        if (error) {
            toast.error(error.message || "Invalid email or password");
        } else {
            toast.success("Successfully logged in!");
            router.push(callbackUrl);
        }
    };

    const handleGoogleSignIn = async () => {
        const { data, error } = await authClient.signIn.social({
            provider: "google",
            callbackURL: callbackUrl, 
        });

        if (error) {
            toast.error(error.message || "Google sign-in failed");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center py-16 px-4">
            <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-sm border border-emerald-100">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-emerald-950">Welcome Back</h2>
                    <p className="mt-2 text-sm text-gray-600">Please sign in to your account</p>
                </div>
                <Form className="flex flex-col gap-5 w-full" onSubmit={onSubmit}>
                    <TextField isRequired name="email" type="email" className="w-full">
                        <Label>Email</Label>
                        <Input name="email" placeholder="Your Email Address" className="w-full" />
                        <FieldError />
                    </TextField>
                    <TextField isRequired className="w-full" name="password">
                        <Label>Password</Label>
                        <InputGroup className="w-full">
                            <InputGroup.Input
                                className="w-full"
                                type={isVisible ? "text" : "password"}
                                name="password"
                                placeholder="Your Password"
                            />
                            <InputGroup.Suffix className="pr-0">
                                <Button
                                    isIconOnly
                                    size="sm"
                                    variant="ghost"
                                    onPress={() => setIsVisible(!isVisible)}
                                >
                                    {isVisible ? <Eye className="size-4" /> : <EyeSlash className="size-4" />}
                                </Button>
                            </InputGroup.Suffix>
                        </InputGroup>
                        <FieldError />
                    </TextField>
                    <Button 
                        type="submit" 
                        isDisabled={isLoading}
                        className="w-full bg-emerald-600 text-white hover:bg-emerald-700 mt-2 font-semibold py-6"
                    >
                        <Check className="mr-2" />
                        {isLoading ? "Signing In..." : "Log In"}
                    </Button>
                </Form>
                <div className="flex items-center gap-3 my-6">
                    <hr className="flex-1 border-gray-200" />
                    <span className="text-gray-400 text-sm font-medium">OR</span>
                    <hr className="flex-1 border-gray-200" />
                </div>
                <Button 
                    onPress={handleGoogleSignIn} 
                    variant="outline" 
                    className="w-full border-gray-300 py-6 text-gray-700 font-medium hover:bg-gray-50"
                >
                    Log in with Google
                </Button>
                <div className="text-center mt-8 text-sm text-gray-600">
                    Don't have an account?{" "}
                    <Link href="/auth/register" className="font-semibold text-emerald-600 hover:text-emerald-500 hover:underline">
                        Register here
                    </Link>
                </div>
            </div>
        </div>
    );
};


const SignInPage = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <SignInForm />
        </Suspense>
    );
};

export default SignInPage;