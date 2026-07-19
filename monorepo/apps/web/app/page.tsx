import { formatDate } from "@repo/utils";
import React from "react";

const page = () => {
    return (
        <header>
            <div className="flex flex-col items-center justify-center min-h-screen py-2">
                <h1 className="text-3xl font-bold">Welcome to My App</h1>
                <p>Date: {formatDate(new Date())}</p>
            </div>
        </header>
    );
};

export default page;
