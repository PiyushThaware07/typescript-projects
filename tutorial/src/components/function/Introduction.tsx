import React, { useState } from "react";


interface PropsInterface {
    name: string,
    email: string,
    password: number,
    age?: number,
}


interface StateInterface {
    name: string,
    email: string,
    password: number,
    status: boolean,
}

const Introduction: React.FC<PropsInterface> = ({ name, email, password }) => {
    const [state, setState] = useState<StateInterface>({ name, email, password, status: false });

    function UpdateDetails() {
        setState({
            name: "Ava Smith",
            email: "Ava.smith@gmail.com",
            password: 98765,
            status: true,
        })
    }
    return (
        <div>
            <h1 className="text-xl font-medium">1. Introduction to Functional Component</h1>
            <ul className="list-disc ps-4 text-sm font-medium my-3">
                <li className="">Name - {state.name}</li>
                <li className="">Email - {state.email}</li>
                <li className="">Password - {state.password}</li>
            </ul>
            <label htmlFor="" className="text-xs font-medium text-green-500 block mb-2">{state.status && "✅ Updated Successfully"}</label>
            <button className="text-xs font-medium tracking-wider bg-black text-white rounded-md inline-block px-5 py-2" onClick={UpdateDetails}>Update</button>
        </div>
    )
}

export default Introduction;



/*
// * Method 02
import React from "react";

interface PropsInterface {
    name: string;
    email: string;
    password: number;
}

const Introduction = ({ name, email, password }: PropsInterface) => {
    return (
        <div>
            <h1 className="text-xl font-medium">1. Introduction to Functional Component</h1>
            <ul className="list-disc ps-4 text-sm font-medium">
                <li>Name: {name}</li>
                <li>Email: {email}</li>
                <li>Password: {password}</li>
            </ul>
        </div>
    );
};

export default Introduction;
*/
