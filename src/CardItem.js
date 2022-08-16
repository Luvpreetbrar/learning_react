import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';


const cardItems = [
    {
        id:1,
        image:'love',
        name: 'Lovepreet',
        work: 'UI Developer'
    },
    {
        id:2,
        image:'Zuzu',
        name: 'Zunisha',
        work: 'Proposal Writer'
    },
    {
        id:3,
        image:'Akashy',
        name: 'Akashy',
        work: 'UI Developer'
    },
    {
        id:4,
        image:'Sonu',
        name: 'Pardeep',
        work: 'UI Developer'
    }
]



class CardItem extends React.Component {

    render() {
      return (
            <div className='container'>
                <div className='card-wrapper'>
                {
                    cardItems.map( (card, i) => {
                        return <div className='card-item'>
                        <img src={`https://joeschmoe.io/api/v1/${cardItems[i].image}`} alt='img' />
                        <h3>{cardItems[i].name}</h3>
                        <p>{cardItems[i].work}</p>
                    </div>
                    } )
                }
                </div>
            </div>
      )
      
    }
  }

export default CardItem;