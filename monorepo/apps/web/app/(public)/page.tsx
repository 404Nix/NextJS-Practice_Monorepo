import { SignOutButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";

export default async function Home() {
    const { isAuthenticated } = await auth();

    return (
        <main>
            <h1>Welcome to TaskFlow</h1>

            {isAuthenticated ? (
                <>
                    <Link href="/dashboard">Go to dashboard</Link>
                    <SignOutButton />
                </>
            ) : (
                <>
                    <Link href="/sign-in">Sign In</Link>

                    <br />

                    <Link href="/sign-up">Sign Up</Link>
                </>
            )}
        </main>
    );
}
