import { createAuthClient } from "better-auth/react"

export const authClient = createAuthClient({
    baseURL: "https://qurbani-hat-8lyn.vercel.app"
});

// Destructure directly from the client you just created above
export const { signIn, signUp, signOut , useSession } = createAuthClient();