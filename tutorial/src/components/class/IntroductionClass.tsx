import React from "react";

interface PropsInterface {
    studentName: string;
    studentEmail: string;
    studentRollNo: number;
    studentScore: number;
    studentAge: number;
}

interface StateInterface {
    name: string,
    email: string,
    rollno: number,
    score: number,
    age: number,
}

export default class IntroductionClass extends React.Component<PropsInterface, StateInterface> {
    constructor(props: PropsInterface) {
        super(props);
        this.state = {
            name: this.props.studentName,
            email: this.props.studentEmail,
            rollno: this.props.studentRollNo,
            score: this.props.studentScore,
            age: this.props.studentAge
        }
    }


    UpdateDetails = () =>{
        this.setState({
            name: "Ema",
            email: "Ema@gmai.com",
            rollno: 123,
            score: 90,
            age: 19
        })
    }

    render() {
        return (
            <div className="">
                <h1 className="text-xl font-medium">2. Introduction to Class Component</h1>
                <ul className="text-sm font-medium tracking-wide list-disc ps-4 my-3">
                    <li>Student Name: {this.state.name}</li>
                    <li>Student Email: {this.state.email}</li>
                    <li>Student Roll No: {this.state.rollno}</li>
                    <li>Student Score: {this.state.score}</li>
                    <li>Student Age: {this.state.age}</li>
                </ul>
                <button className="text-xs font-medium tracking-wider bg-black text-white rounded-md inline-block px-5 py-2" onClick={this.UpdateDetails}>Update</button>
            </div>
        );
    }
}
