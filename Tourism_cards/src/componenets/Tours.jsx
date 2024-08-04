import React from 'react'
import Card from "./Card"
export default function Tours({tours,removeTour}) {
  return (
    <div className='container'>
        <h2 className='title'>Plan With Love</h2>
        <div className='cards'>
            {/* map function  */}

           {
            tours.map((tour)=>{
              return <Card {...tour} key={tour.id}  removeTour={removeTour}/>
             })
           }
            
        </div>

    </div>
  )
}
