"use client";
import React from "react";
export default class Person extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "Mg Kyaw Min",
            email: "mkm@gmail.com",
            phoneNo: "09877655554",
        };
        this.onChangePhoneNo = this.onChangePhoneNo.bind(this);
    }
    onChangeEmail(changedEmail) {
        this.setState({ email: changedEmail });
    }
    onChangePhoneNo(onChangePhoneNo) {
        this.setState({ phoneno: event.target.value });
    }
    onClickButton() {
        alert("Button 1 clicked");
    }
    onClickButton2() {
        alert("Button 2 clicked");
    }
    render() {
        return (
            <div>
                <h1> Event in Class Component</h1>
                <input
                    value={this.state.value}
                    placeholder="Enter Name"
                    onChange={(event) => {
                        this.setState({ name: event.target.value })
                    }} 
                    />

                <input
                    value={this.state.email}
                    placeholder="enter email"
                    onChange={(event) => this.onChangeEmail(event.target.value)} />

                <input
                    value={this.state.phoneNo}
                    placeholder="enter phone number"
                    onChage={this.onChangePhoneNo} />
                <button onClick={this.onclickButton}>Button1 </button>
                <button onClick={() => this.onClickButton2()}>Button2</button>

            </div>
        )
    }


}