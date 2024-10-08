import React from "react";

interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
    className?: string;
    type?: "button" | "submit";
}

const Button: React.FC<ButtonProps> = ({ onClick, children, className, type = "button" }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={className}>
            {children}
        </button>
    );
};

export default Button;
