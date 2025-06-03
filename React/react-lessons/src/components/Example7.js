"use client";
function Greeting(props){
    return<h2> Hello, {props.name}!</h2>;
}
//Example7 Passing Props in react
export default function Parent(){
    <div>
        <Greeting name="Alice"/>
        <Greeting name="Bob"/>
        <Greeting name="May"/>
    </div>
}