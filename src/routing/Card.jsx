import React from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { NavLink } from "react-router-dom";


const Card =(props)=>{
    return(
        <>
         <div className='col-md-4 col-10 mx-auto '>
                <div className="card card_container">
                  <img src={props.imgsrc} class="card-img-top" alt="..." />
                  <div className="card-body">
                   <NavLink to='/price'> <h5 className="card-title font-weight-bold">{props.title} <ArrowForwardIcon /> </h5></NavLink>
                   
                  
                  </div>
                </div>
              </div>
        </>
    )
}

export default Card;