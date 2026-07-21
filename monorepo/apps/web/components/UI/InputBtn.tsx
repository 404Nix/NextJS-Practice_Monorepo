import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

const Input = ({ label, ...props }: InputProps) => {

    return (
        <div className="flex flex-col gap-2">
            <label>{label}</label>

            <input {...props} className="rounded-md outline-none border p-2" />
        </div>
    );
};

export default Input;
