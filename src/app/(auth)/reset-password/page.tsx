import { resetPasswordAction } from "../actions";
import { FormMessage, Message } from "@/components/reusable/form-message";
import { SubmitButton } from "@/components/reusable/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default async function ResetPassword(props: Readonly<{
  searchParams: Promise<Message>;
}>) {
  const searchParams = await props.searchParams;
  return (
    <div className="w-full flex items-center justify-center mx-auto p-6 rounded-lg shadow-lg">
      <form className="flex flex-col w-full max-w-md p-4 gap-2 [&>input]:mb-4">
        <h1 className="text-2xl font-medium">Reset password</h1>
        <p className="text-sm text-foreground/60">
          Please enter your new password below.
        </p>
        <Label htmlFor="password">New password</Label>
        <Input
          type="password"
          name="password"
          placeholder="New password"
          required
        />
        <Label htmlFor="confirmPassword">Confirm password</Label>
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirm password"
          required
        />
        <SubmitButton formAction={resetPasswordAction}>
          Reset password
        </SubmitButton>
        <FormMessage message={searchParams} />
      </form>
    </div>
  );
}