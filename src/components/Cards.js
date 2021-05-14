import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Amazon1 from '.././images/amazon1.jpg'
import Bali1 from '.././images/bali1.jpg'
import Atlantic1 from '.././images/atlantic1.jpg'
import Himalayas1 from '.././images/himalayas1.jpg'
import Sahara3 from '.././images/sahara3.jpg'
function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={Amazon1}
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src={Bali1}
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={Atlantic1}
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src={Himalayas1}
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src={Sahara3}
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