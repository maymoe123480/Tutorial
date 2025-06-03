"use client";
function Greeting({name="Guest", age="unknown"}){
    return(
        <h2>
            Hello, {name}! You are {age} years old.
        </h2>
    );
}
//Eample9: Default Props
function Parent(){
    return(
        <div>
            <Greeting name="Alice" age={25}/>
            <Greeting/>
            {/* will use default props */}
        </div>
    );
}
export default Parent;