import React, { useState } from 'react'
import TourList from './TourList'
import './Tour.css'
import TourData from './TourData'

export default function Tour() {
    const [tour, setTour] = useState(TourData);
    const removeTour = (id) => {
      const newTours = tour.filter((tour) => tour.id !== id);
      setTour(newTours);
    };
  return (
    <div className='container'>
        <div>{tour.length} Total Tours</div>
        <TourList tour={tour} removeTour={removeTour}/>
    </div>
  )
}
