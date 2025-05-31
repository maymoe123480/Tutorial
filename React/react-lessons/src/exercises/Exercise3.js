"use client";
import React from "react";
export default class Student extends React.Component {
    constructor(info) {
        super(info);
        this.state = {
            name: "Mg Kyaw",
            age: 23,
            address: "Yangon",
            date: new Date(),

        };

    }
    render() {
        return (
            <div>
                <h1> State in class Component</h1>
                <div> {this.state.name}</div>
                <div> {this.state.age}</div>
                <div> {this.state.address}</div>
                <div> {this.state.date.toString()}</div>
            </div>
        );
    }
}