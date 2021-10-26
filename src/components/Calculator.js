import React , {useState}from "react"
import * as math from "mathjs"
import "../styles.css"
import Header from "./Header"
import Display from "./Display"
import Button from "./Button"

function Calculator(){
    const [nums,setNums]=useState("")
    const [result, setResult] = useState("")


    function addnums(newNum){
        console.log(newNum)
        setNums(prevNum => {
            return [...prevNum, newNum + ""];
        });}
    
    function Result() {
        return(
           
            setResult(math.evaluate(nums.join("")))

        )}
    function Reset(){
        return (
            setNums(""),
            setResult("")
        )
    }
        
    return(
        <div className="main">
         
    <div className= "calc-wrapper">
    <Header/> 
        <Display nums={nums} result={result}/>
        <div className="row">
            <Button symbol= "7" handleclick= {addnums}/>
            <Button symbol= "8" handleclick= {addnums}/>
            <Button symbol= "9"handleclick= {addnums}/>
            <Button symbol= "/"handleclick= {addnums}/>
            
        </div>
        <div className="row">
            <Button symbol= "4" handleclick= {addnums}/>
            <Button symbol= "5" handleclick= {addnums}/>
            <Button symbol= "6" handleclick= {addnums}/>
            <Button symbol= "*" handleclick= {addnums}/>
        </div>
        <div className="row">
            <Button symbol= "1" handleclick= {addnums}/>
            <Button symbol= "2" handleclick= {addnums}/>
            <Button symbol= "3" handleclick= {addnums}/>
            <Button symbol= "+" handleclick= {addnums}/>
        </div>
        <div className="row">
            <Button symbol= "0" handleclick= {addnums}/>
            <Button symbol= "." handleclick= {addnums}/>
            <Button symbol= "=" handleclick= {Result}/>
            <Button symbol= "-" handleclick= {addnums}/> 
        </div>
        <div className= "row">
        <Button symbol= "Clear" handleclick= {Reset}/> 
        </div>
        </div>
        </div>
    )
}
export default Calculator