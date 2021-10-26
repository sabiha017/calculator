import React from "react"

function Display(props){
    return(
        <div className="input-wrapper">
        <h1>{props.result}</h1>
        <h3>{props.nums}</h3>

        </div>
    )
}
export default Display