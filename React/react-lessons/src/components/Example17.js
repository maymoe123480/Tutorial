"use client";
//example17 using switch statements in rendering
export default function StatusMessage({status}){
    switch (status){
        case "success":
        return <h1> Operation successful!.</h1>
        case "error":
        return <h1> Something went wrong!</h1>
        default:
            return <h1> Waiting for action ..</h1>
    }
}