import React, { useState } from 'react';
import './Birthday.css';
import BirthdayData  from './BirthdayData'
import { BirthdayList } from './BirthdayList';


export const Birthday = () => {

    const [people, setPeople] = useState(BirthdayData)
  return (
    <>

<div className="list-wrapper">
<h2>{people.length} Birthday List</h2>
  <ul className="list">
  <BirthdayList people={people}/>
</ul>
<button type='button' onClick={() => setPeople([])}>Clear All</button>
</div>

    
    
    
    </>
  )
}
