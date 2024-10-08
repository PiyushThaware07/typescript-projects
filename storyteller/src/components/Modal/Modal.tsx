import React from "react";
import ReactDOM from "react-dom";
// ICONS
import { IoClose } from "react-icons/io5";
// COMPONENTS
import Button from "../Button/Button";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    const rootElement = document.getElementById("root");
    if (!rootElement) {
        console.error("Root element not found");
        return null;
    }

    return ReactDOM.createPortal(
        <div className="fixed top-0 left-0 bg-black/30 h-screen w-full flex flex-nowrap items-center justify-center p-3">
            <div className="w-full md:w-[35%] p-5 bg-white rounded shadow-lg relative">
                <Button onClick={onClose} className="absolute top-4 right-4">
                    <IoClose className="text-2xl text-gray-400" />
                </Button>
                {children}
            </div>
        </div>,
        rootElement
    );
};

export default Modal;
