'use client';
import { authClient } from "@/lib/auth-client";
import { Check, Eye, EyeSlash } from "@gravity-ui/icons";
import { Button, FieldError, Form, Input, InputGroup, Label, TextField } from "@heroui/react";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";

const SignInPage = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [isVisible, setIsVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // Get the return URL from the address bar (e.g., ?callbackUrl=/animals/1)
    // If it doesn't exist, default to the Home page ("/")
    const callbackUrl = searchParams.get("callbackUrl") || "/";

    // 1. Email/Password Sign In
    const onSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());

        const { data, error } = await authClient.signIn.email({
            email: userData.email,
            password: userData.password,
            rememberMe: true,
            callbackURL: callbackUrl // Navigate back to where they came from
        });

        setIsLoading(false);

        if (error) {
            toast.error(error.message || "Invalid email or password");
        } else {
            toast.success("Successfully logged in!");
            router.push(callbackUrl);
        }
    };

    // 2. Google Social Sign In
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

                    {/* Email Field */}
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        className="w-full"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label>Email</Label>
                        <Input name="email" placeholder="Your Email Address" className="w-full" />
                        <FieldError />
                    </TextField>

                    {/* Password Field */}
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
                                    aria-label={isVisible ? "Hide password" : "Show password"}
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
                        {isLoading ? "Signing In..." : "Sign In"}
                    </Button>
                </Form>

            
                <div className="flex items-center gap-3 my-6">
                    <hr className="flex-1 border-gray-200" />
                    <span className="text-gray-400 text-sm font-medium">OR</span>
                    <hr className="flex-1 border-gray-200" />
                </div>

                {/* Google Sign In Button */}
                <Button 
                    onPress={handleGoogleSignIn} 
                    variant="outline" 
                    className="w-full border-gray-300 py-6 text-gray-700 font-medium hover:bg-gray-50"
                >
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                    Sign in with Google
                </Button>

                {/* Register Link */}
                <div className="text-center mt-8 text-sm text-gray-600">
                    Don't have an account?{" "}
                    <Link href="/register" className="font-semibold text-emerald-600 hover:text-emerald-500 hover:underline">
                        Register here
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SignInPage;