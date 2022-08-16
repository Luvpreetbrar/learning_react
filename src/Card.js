import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './Card.css';
import CardItem from './CardItem';

class Card extends React.Component {

    constructor(){
        super();
        this.state = {
            heading:'Users'
        }
    }
    newheading(){
        this.setState(
            {
                heading:'I am new Heading'
            }
        )
    }

    
    render() {
      return (
        <div>
            <div className='container'>
            <h1>{this.state.heading}</h1>
            </div>
            <CardItem></CardItem>
            <div className='container'>
            <button onClick={() => this.newheading()}>Click me</button>
            </div>
        </div>
      )
      
    }
  }

export default Card;