import React from "react";

interface PropsInterface { }
interface StateInterface {
    name: string,
    email: string,
    password: number,
}

export default class RevisionClass extends React.Component<PropsInterface, StateInterface> {
    constructor(props: PropsInterface) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: 0
        }
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = event.target;
        this.setState({
            ...this.state,
            [name]: value
        })
    }

    handleSubmit = (event: React.FormEvent): void => {
        event.preventDefault();
        console.log(this.state);
    };
    render() {
        return (
            <div className="class-revision max-w-sm mr-auto my-5">
                <form onSubmit={this.handleSubmit} className="flex flex-col gap-4 bg-gray-100 rounded-xl p-5">
                    <input type="text"
                        name="name" placeholder="Name" className="p-2"
                        onChange={this.handleChange} value={this.state.name} />
                    <input type="text"
                        name="email" placeholder="Email" className="p-2"
                        onChange={this.handleChange} value={this.state.email} />
                    <input type="number"
                        name="password" placeholder="Password" className="p-2"
                        onChange={this.handleChange} value={this.state.password} />
                    <button type="submit" className="text-xs font-medium bg-black inline px-5 py-2 text-white tracking-wider rounded-md ">Submit</button>
                </form>
            </div>
        )
    }
}