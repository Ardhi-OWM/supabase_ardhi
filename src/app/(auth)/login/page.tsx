import { signInAction, signUpAction } from '../../(auth-pages)/actions';
//import { signInAction, signUpAction } from "@/app/actions";

export default function LoginPage() {
    return (
        <form>
            <label htmlFor="email">Email:</label>
            <input id="email" name="email" type="email" required />
            <label htmlFor="password">Password:</label>
            <input id="password" name="password" type="password" required />
            <button formAction={signInAction}>Log in</button>
            <button formAction={signUpAction}>Sign up</button>
        </form>
    )
}