"use client";

//example15 using the terneary operator in rendering(?:)
 export default function Greeting({isLoggedIn}){
    return isLoggedIn?<h1> Welcome Back!</h1>: <h1> Please log in.</h1>;
}