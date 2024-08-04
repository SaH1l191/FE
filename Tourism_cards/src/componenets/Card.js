import React from 'react'
import { useState } from 'react';

export default function Card({image,price,name,info,id,removeTour}) {


    const [readmore ,setReadmore] = useState(false);

    const fulldescription = info;
    const description =readmore?fulldescription:`${fulldescription.substring(0, 200)}...`;
   

function readmoreHandler(){
    setReadmore(!readmore);
}

  return (
    
        <div className='card'>
            <img src={image} className='image'></img>
            <div className='tour-info'>
            <div className='tour-details'>
                <h4 className='tour-price'>₹ {price}</h4>
                <h4 className='tour-name'>{name}</h4>
            </div>
            <div className='description'>
                {description}
                <span className="readMore" onClick={readmoreHandler}>
                {readmore ? `Show Less`:`Read More`}
                </span>
                
            </div>
            </div>

        <button className="btn-red" onClick={()=>{removeTour(id)}}>
        Not Interested</button>
        </div>
        
  )
}
