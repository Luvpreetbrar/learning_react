import React, { useState } from 'react'

export default function TourList({tour, removeTour, setTour}) {
    const [readMore, setReadMore] = useState(false);
  return (
    <>
        {
            tour.length > 0 ?
            tour.map((trip) => {
                return(
                    <>
                        <h3>{trip.name}</h3>
                        <h5>{trip.price}</h5>
                        <p>{readMore ? trip.detail : `${trip.detail.substring(0,100)}...`}
                        <button onClick={() => setReadMore(!readMore)}>
                            {readMore ? 'View Less' : 'View More'}
                        </button>
                            </p>
                            <button onClick={() => removeTour(trip.id)}>Remove Tour</button>
                    </>
                )
            })
            :
            <div>No Tour
            </div>
        }
    </>
  )
}
