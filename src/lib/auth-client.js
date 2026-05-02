import { createAuthClient } from "better-auth/react"

export const authClient = createAuthClient({
    baseURL: "http://localhost:3000"
});

// Destructure directly from the client you just created above
export const { signIn, signUp, signOut , useSession } = createAuthClient();