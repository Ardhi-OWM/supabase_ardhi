import { type NextRequest, NextResponse } from 'next/server'
import { updateSession } from './src/utils/supabase/middleware'
import { createClient } from "@/utils/supabase/server";


export async function middleware(request: NextRequest) {
    // update user's auth session
    await updateSession(request);

    const supabase = await createClient();
    const {
        data: { user },
    } = await supabase.auth.getUser();

    // Redirect unauthenticated users to the sign-in page
    if (!user) {
        const signInUrl = new URL("/signin", request.url);
        return NextResponse.redirect(signInUrl);
    }

    // Allow the request to proceed if authenticated
    return NextResponse.next();

}


export const config = {
    matcher: [
        "/dashboard", "/api-connections", "/converter",
        /*
         * Match all request paths except for the ones starting with:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * Feel free to modify this pattern to include more paths.
         */
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
}