import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Dashboard() {
    const supabase = await createClient();

    // Check if the user is authenticated
    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        redirect("/signin"); // Redirect to the sign-in page if not authenticated
    }

    // Render the dashboard if authenticated
    return (
        <div className="mt-16">
            <h1 className="text-2xl font-medium">Welcome to your dashboard</h1>
        </div>
    );
}
