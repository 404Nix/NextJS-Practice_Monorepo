import Link from "next/link";

export default function Home() {
    return (
        <main>
            <h1>Welcome to TaskFlow</h1>

            <Link href="/sign-in">Sign In</Link>

            <br />

            <Link href="/sign-up">Sign Up</Link>
        </main>
    );
}
