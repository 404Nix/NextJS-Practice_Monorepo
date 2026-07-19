import { auth } from "@clerk/nextjs/server";
import React from "react";

const dashboard = async () => {
    await auth.protect();

    return <div>dashboard</div>;
};

export default dashboard;
