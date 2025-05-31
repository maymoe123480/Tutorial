"use client";
import React, { useState } from "react";
export default function Student() {
    const [name, setName] = useState("Mg Kyaw");
    const [age, setAge] = useState(23);
    const [address, setAddress] = useState("Yangon");
    const [date, setDate] = useState(new Date());

    return (
        <div>
            <h1>State in functional Component</h1>
            <div> {name} </div>
            <div> {age} </div>
            <div> {address}</div>
            <div> {date.toString()}</div>
        </div>
    );
}