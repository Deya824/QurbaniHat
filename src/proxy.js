import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import { NextResponse } from "next/server";
import { auth } from "./lib/auth";
import { headers } from "next/headers";

// This function can be marked `async` if using `await` inside
export async function proxy(request) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

 if (!session) {
    
    const { pathname } = request.nextUrl;
    

    const signInUrl = new URL('/auth/signin', request.url);
    signInUrl.searchParams.set('callbackUrl', pathname);
    
    return NextResponse.redirect(signInUrl);
  }
}

export const config = {
 matcher: ["/profile", "/animals/:path"],
};