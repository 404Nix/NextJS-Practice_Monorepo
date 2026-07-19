import { auth } from "@clerk/nextjs/server";
import React from "react";

const profile = async () => {
    await auth.protect();

    return <div>profile</div>;
};

export default profile;
