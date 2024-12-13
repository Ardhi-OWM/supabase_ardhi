


import { signInAction } from "../actions";
import { FormMessage, Message } from "@/components/reusable/form-message";
import { SubmitButton } from "@/components/reusable/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default async function SignInPage(props: Readonly<{ searchParams: Promise<Message> }>) {
    const searchParams = await props.searchParams;

    
    return (
        <div className="w-full flex items-center justify-center mx-auto p-6 rounded-lg shadow-lg">
            <div className="flex flex-col justify-center items-center w-full  p-12">
                <form >
                    <h1 className="text-2xl font-medium mb-8">Sign in</h1>
                    <p className="text-sm text-foreground">
                        You dont&apos;t have an account yet, with Ardhi? {" "}
                        <Link className="text-green-500 font-medium underline" href="/signup">
                            Sign up
                        </Link>
                    </p>
                    <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
                        <Label htmlFor="email">Email</Label>
                        <Input name="email" placeholder="you@example.com" required />
                        <div className="flex justify-between items-center">
                            <Label htmlFor="password">Password</Label>
                            <Link
                                className="text-xs text-green-500 underline "
                                href="/forgot-password"
                            >
                                Forgot Password?
                            </Link>
                        </div>
                        <Input
                            type="password"
                            name="password"
                            placeholder="Your password"
                            required
                        />
                        <SubmitButton pendingText="Signing In..." formAction={signInAction}>
                            Sign in
                        </SubmitButton>
                        <FormMessage message={searchParams} />
                    </div>
                </form>
                <p className="text-gray-500 text-sm mt-8">
                    By clicking continue, you agree to our{" "}
                    <a href="/terms-of-service" className="text-blue-500 underline">
                        Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="/privacy-policy" className="text-blue-500 underline">
                        Privacy Policy
                    </a>
                </p>
            </div>
        </div>
    );
}
