import React from 'react'

export const BirthdayList = ({people}) => {
  return (
    <>
        {
        people.map((person,i) => {
            return (
                <li className="list-item">
      <div>
        <img src={`https://joeschmoe.io/api/v1/${person.name}`} className="list-item-image" />
      </div>
      <div className="list-item-content">
        <h4>{person.name}</h4>
        <p>{person.age} Years</p>
      </div>
    </li>
            )
        })   
    }
    </>
    
  )
}
