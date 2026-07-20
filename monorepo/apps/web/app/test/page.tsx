import React from "react";
import { prisma } from "@/lib/prisma";

const test = async () => {
    const users = await prisma.user.findMany();

    return (
        <div>
            <h1>Total Users: {users.length}</h1>
        </div>
    );
};

export default test;
