"use client";

import React, { useState } from "react";
import FormButton from "./FormButton";

const CreateProfileButton = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button
                className="w-45 px-2 py-4 bg-red-900 border-2 border-amber-800  "
                onClick={() => setOpen(true)}
            >
                Complete Profile
            </button>
            
            {open && <FormButton onClose={() => setOpen(false)} />}
        </>
    );
};

export default CreateProfileButton;
