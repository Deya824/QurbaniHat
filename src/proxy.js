import { NextResponse } from "next/server";
import { auth } from "./lib/auth";
import { headers } from "next/headers";

// Next.js expects the function name to be 'middleware'
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

  return NextResponse.next(); // Allow the request to continue if session exists
}

export const config = {
  // Use :path* to cover all sub-routes of /animals
  matcher: ["/profile", "/animals/:path"],
};