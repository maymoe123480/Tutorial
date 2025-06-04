"use client";
//example19 short circuiting with ||(fallback rendering)
export default function Username({name}){
    console.log(name);
    return(
        //if name is null or underfined, "Guesr" will be displayed
        <p> hello, {name|| "Guest"}! </p>
    );
}