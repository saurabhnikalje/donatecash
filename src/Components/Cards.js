import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';
import "../css/Cards.css";

const Cards = ({image,cardname,Text}) => {
    return(

    <div className = "container" >
    <Card id="card">
    <CardImg  id ="img" src = {image} alt="Online"></CardImg>
        <CardBody>
            <CardTitle tag = "h5">{cardname}</CardTitle>
            <CardText>{Text}</CardText>
        </CardBody>
    </Card> 
    
    </div>

    );

  };

    

export default Cards;

 
