import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='./images/amazon1.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='./images/bali1.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='./images/atlantic1.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='./images/himalayas1.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='./images/sahara3.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adventure'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;