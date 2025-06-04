"use client";
export default function Notification({hasMessage}){
    return (
        <div>
            <h1> Dashboard</h1>
            {hasMessage && <p> you have new message</p>}
        </div>
    );
}