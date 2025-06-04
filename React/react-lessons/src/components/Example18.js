"use client";
//example18 using conditional rendering with component
function LoggedInView(){

    return<h1> Welcome Back!</h1>
}
function LoggedOutView(){

    return<h1> Please Log in!</h1>
}
export default function Greeting({isLoggedIn}){
    return isLoggedIn?<LoggedInView/> : <LoggedOutView/>;
}