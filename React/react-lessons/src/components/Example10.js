"use client";
import { useState } from "react";
function LoginButton({ onClickButton }) {
    return (
        <div>
            <button onClick={onClickButton}>Login</button>
        </div>
    );
}
function UsernameInput({ value, onChangeName }) {
    return (
        <div>
            <input value={value} onChange={(e) => onChange(e.target.value)} />
        </div>
    )
}
//Example10: Passing a function as a prop
function Parent() {
    const [username, setUsername] = useState();
    return (
        <div>
            <UsernameInput value={username} onChangeName={(onChangeName) => setUsername(changeName)}
            />
            <LoginButton onClickButton={() => alert("Clicked Login Button.")}
            />
        </div>
    );
}
export default Parent;
