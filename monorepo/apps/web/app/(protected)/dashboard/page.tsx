import { prisma } from "@/lib/prisma";
import { UserButton } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";
import { log } from "console";
import React from "react";

const dashboard = async () => {
    await auth.protect();

    const user = await currentUser();

    if (!user) {
        return <h1>Unauthorized</h1>;
    }

    let db_User = await prisma.user.findUnique({
        where: {
            clerkId: user?.id,
        },
    });

    if (!user.primaryEmailAddress) {
        throw new Error("No primary email found.");
    }

    if (!db_User) {
        db_User = await prisma.user.create({
            data: {
                clerkId: user.id,
                email: user.primaryEmailAddress?.emailAddress,
                name: user.fullName,
            },
        });
    }

    console.log(db_User);

    return (
        <div>
            <UserButton />
            <h1>{db_User.name}</h1>
        </div>
    );
};

export default dashboard;
