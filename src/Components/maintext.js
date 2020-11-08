import React  from "react";
import {Button} from 'reactstrap';
import '../css/maintext.css';
function Maintext() {

    return(
        <div>
        <div className="maintext" style = {{marginTop:50}}>
        <h2>FastCash Helping people majorly affected by Covid-19 crisis.</h2>
        </div>
        <div className="maintext" id="quote">
        <i>"Making Life Simplier"</i>
        </div>
        
        <div className="maintext" style = {{marginTop:20}} >
        <Button  color="success"  href = {"https://rzp.io/l/hRRNXqbsw"} >Donate</Button>
        <div class='pm-button'></div> 
        </div>
        </div>
    )
        
    
}

export default Maintext;