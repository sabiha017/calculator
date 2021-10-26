import React from "react"
function Button (props){
        
    return (
        <React.Fragment>
         <button className= "button-wrapper"
         onClick={() => props.handleclick(props.symbol)}
         >
             {props.symbol} </button>

    </React.Fragment>
     
    )
}
export default Button