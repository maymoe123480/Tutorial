"use client";
import React, { useState } from "react";
export default function Person() {
    const [name, setName] = useState();
    const [email, setEmail] = useState("mkm@gmail.com");
    const [phoneNo, setPhoneNo] = useState("0987654334");
    const onChangeEmail = (changedEmail) => {
        setEmail(changedEmail);
    };
    const onChangePhoneNo = (event) => {
        console.log('onChangePhoneNo', event)
        setPhoneNo(event.target.value);
    };
    const onClickButton = () => {
        alert("Button 1 clicked");
    };
    const onClickButton2 = () => {
        alert("Button 2 clicked");
    };
    return (
        <div>
            <h1> Event in functional component</h1>
            <input
                value={name}
                placeholder="Enter name"
                onChange={(event) => setName(event.target.value)}
            />

            <input
                value={email}
                placeholder="Enter email"
                onChange={(event) => onChangeEmail(event.target.value)}
            />

            <input
                value={phoneNo}
                placeholder="Enter Pnone number"
                onChange={onChangePhoneNo}
            />
            <button onClick={onClickButton}>Button1</button>
            <button onclick={() => onClickButton2()}>Button2</button>
        </div>
    );
}