"use client";

import React, { useState } from "react";
import Input from "../UI/InputBtn";
import { createUserProfile } from "@/actions/User-actions";
import { useRouter } from "next/navigation";

interface FormButtonProps {
    onClose: () => void;
}

const FormButton = ({ onClose }: FormButtonProps) => {
    const [name, setName] = useState("");
    const [hobbies, setHobbies] = useState("");
    const [description, setDescription] = useState("");

    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const response = await createUserProfile({
            name,
            hobbies,
            description,
        });

        if (response.success) {
            setName("");
            setHobbies("");
            setDescription("");

            router.refresh();

            onClose();
        }

        console.log(response);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 text-black">
            <div className="rounded-lg bg-gray-400 p-6 shadow-lg">
                <button
                    className="mt-4 rounded-md bg-red-500 px-4 py-2 sm:px-10 md:px-20 lg:px-30"
                    onClick={onClose}
                >
                    Cancel
                </button>

                <form onSubmit={handleSubmit} className="space-y-5 mt-5">
                    <Input
                        value={name}
                        type="text"
                        placeholder="Name"
                        label="Name"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Input
                        value={hobbies}
                        type="text"
                        placeholder="Hoobies"
                        label="Hobbies"
                        onChange={(e) => setHobbies(e.target.value)}
                    />
                    <Input
                        value={description}
                        type="text"
                        placeholder="Description"
                        label="Description"
                        onChange={(e) => setDescription(e.target.value)}
                    />

                    <div className="w-full text-center">
                        <button className="bg-blue-400 px-6 py-4">
                            submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FormButton;
