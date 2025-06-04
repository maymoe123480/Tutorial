"use client";
//examople14 using if statement in rendering
export default function Greeting({isLoggedIn}){
    if (isLoggedIn) return <h1>Welome back!</h1>;
    if (!isLoggedIn) return <h1>Please Log in.</h1>;

}