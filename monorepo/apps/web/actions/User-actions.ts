"use server";

import { prisma } from "@/lib/prisma";
import { auth, currentUser } from "@clerk/nextjs/server";

type profileData = {
    name: string;
    hobbies: string;
    description: string;
};

export async function createDbUser() {
    const user = await currentUser();

    if (!user) {
        throw new Error("Unauthorized");
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

    return {
        success: true,
        data: db_User,
    };
}

export async function createUserProfile(data: profileData) {
    const { name, hobbies, description } = data;

    const { userId } = await auth();

    if (!userId) {
        throw new Error("Unauthorized.");
    }

    const user = await prisma.user.findUnique({
        where: {
            clerkId: userId,
        },
    });

    if (!user) {
        throw new Error("User not found.");
    }

    const existingProfile = await prisma.profile.findUnique({
        where: {
            userId: user.id,
        },
    });

    if (existingProfile) {
        throw new Error("Profile already exists.");
    }

    await prisma.profile.create({
        data: {
            userId: user.id,
            name,
            hobbies,
            desc: description,
        },
    });

    return {
        success: true,
        message: "Profile created successfully.",
    };
}

export async function getUserProfile() {
    const { userId } = await auth();

    if (!userId) {
        return {
            success: false,
            message: "Unauthorized.",
        };
    }

    const user = await prisma.user.findUnique({
        where: {
            clerkId: userId,
        },
    });

    if (!user) {
        return {
            success: false,
            message: "User not found.",
        };
    }

    const profile = await prisma.profile.findUnique({
        where: {
            userId: user.id,
        },
    });

    if (!profile) {
        return {
            success: false,
            message: "Profile not found.",
        };
    }

    return {
        success: true,
        profile,
    };
}
