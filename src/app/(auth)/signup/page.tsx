import { signUpAction } from "../actions";
import { FormMessage, Message } from "@/components/reusable/form-message";
import { SubmitButton } from "@/components/reusable/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";


export default async function Signup(props: Readonly<{
    searchParams: Promise<Message>;
}>) {
    const searchParams = await props.searchParams;
    if ("message" in searchParams) {
        return (
            <div className="w-full flex-1 flex items-center h-screen sm:max-w-md justify-center gap-2 p-4">
                <FormMessage message={searchParams} />
            </div>
        );
    }

    return (
        <div className="w-full flex items-center justify-center mx-auto p-6 rounded-lg shadow-lg">
            <form>
                <h1 className="text-2xl font-medium mb-10">Sign up</h1>
                <p className="text-sm text text-foreground">
                    Do you already have an account with Ardhi ?{" "}
                    <Link className="text-green-500 font-medium underline " href="/signin">
                        Sign in
                    </Link>
                </p>
                <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
                    <Label htmlFor="email">Email</Label>
                    <Input name="email" placeholder="you@example.com" required />
                    <Label htmlFor="password">Password</Label>
                    <Input
                        type="password"
                        name="password"
                        placeholder="Your password"
                        minLength={6}
                        required
                    />
                    <SubmitButton formAction={signUpAction} 
                    pendingText="Signing up..."
                    className="w-full bg-green-500 hover:bg-green-700 py-2 rounded-md mt-4"
                    >
                        Sign up
                    </SubmitButton>
                    <FormMessage message={searchParams} />
                </div>
            </form>
            {/* <SmtpMessage /> */}
        </div>
    );
}
