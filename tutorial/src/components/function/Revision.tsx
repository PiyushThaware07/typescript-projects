import React, { useRef, useState } from "react";

interface StateInterface {
    message: string[];
}

const Revision: React.FC = () => {
    const [state, setState] = useState<StateInterface>({ message: [] });

    // Create a ref for the input element
    const inputRef = useRef<HTMLInputElement>(null);

    // Handle input when user clicks the button
    const handleChange = (event: { key: string; }): void => {
        if (inputRef.current && event.key === "Enter") {
            const value = inputRef.current.value;
            setState((prevState) => ({
                message: [...prevState.message, value]
            }));
            inputRef.current.value = "";
        }
    };

    return (
        <div className="revision my-5">
            <input
                type="text"
                ref={inputRef}
                placeholder="Leave message here..."
                className="text-sm font-medium tracking-wide border-2 border-gray-800 p-2 rounded-lg "
                onKeyDown={handleChange} />

            <ul className="mt-2">
                {state.message.map((msg, index) => (
                    <li key={index} className="text-sm font-semibold tracking-wide capitalize">
                        {msg}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Revision;
