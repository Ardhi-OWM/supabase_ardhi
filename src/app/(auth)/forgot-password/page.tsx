import { forgotPasswordAction } from "../actions";
import { FormMessage, Message } from "@/components/reusable/form-message";
import { SubmitButton } from "@/components/reusable/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";


export default async function ForgotPassword(props: Readonly<{
  searchParams: Promise<Message>;
}>) {
  const searchParams = await props.searchParams;
  return (

    <div className="w-full flex items-center justify-center mx-auto p-6 rounded-lg shadow-lg">
      <form>
        <div>
          <h1 className="text-2xl font-medium">Reset Password</h1>
          <p className="text-sm text-secondary-foreground">
            Do you already have an account?{" "}
            <Link className="text-green-500 underline" href="/signin">
              Sign in
            </Link>
          </p>
        </div>
        <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
          <Label htmlFor="email">Email</Label>
          <Input name="email" placeholder="you@example.com" required />
          <SubmitButton formAction={forgotPasswordAction}>
            Reset Password
          </SubmitButton>
          <FormMessage message={searchParams} />
        </div>
      </form>
      {/* <SmtpMessage /> */}
    </div>

  );
}
