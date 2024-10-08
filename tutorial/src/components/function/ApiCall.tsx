import React, { useEffect, useState } from "react";
import { User, UserService } from "../../services/user.service";

const ApiCall: React.FC = () => {
    const [data, setData] = useState<User[]>([]);

    async function handleAPI(): Promise<void> {
        const response = await UserService.fetchUsers();
        setData(response);
    }

    useEffect(() => {
        handleAPI();
    }, [])

    return (
        <div className="api-call overflow-x-auto w-full">
            <h1 className="text-xl font-semibold ">Users</h1>
            <table className="w-full border-2 border-black mt-2">
                <thead>
                    <tr className="bg-black text-white text-nowrap select-none">
                        <td className="text-sm font-semibold p-3">#</td>
                        <td className="text-sm font-semibold p-3">name</td>
                        <td className="text-sm font-semibold p-3">username</td>
                        <td className="text-sm font-semibold p-3">email</td>
                        <td className="text-sm font-semibold p-3">street</td>
                        <td className="text-sm font-semibold p-3">suite</td>
                        <td className="text-sm font-semibold p-3">city</td>
                        <td className="text-sm font-semibold p-3">zipcode</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        data && data.length > 0
                        &&
                        (data.map((item, index) => (
                            <tr key={index} className="even:bg-gray-100 text-nowrap select-none">
                                <td className="text-sm font-semibold p-3">#</td>
                                <td className="text-sm font-semibold p-3">{item.name}</td>
                                <td className="text-sm font-semibold p-3">{item.username}</td>
                                <td className="text-sm font-semibold p-3">{item.email}</td>
                                <td className="text-sm font-semibold p-3">{item.address.street}</td>
                                <td className="text-sm font-semibold p-3">{item.address.suite}</td>
                                <td className="text-sm font-semibold p-3">{item.address.city}</td>
                                <td className="text-sm font-semibold p-3">{item.address.zipcode}</td>
                            </tr>
                        )))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ApiCall;