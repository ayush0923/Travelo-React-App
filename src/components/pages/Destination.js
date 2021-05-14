import React from 'react';
import '../../App.css';
import '../Cards.css';
import './Destinations.css'
import Paris from '../.././images/paris.jpg'
import BoraBora from '../.././images/borabora.jpg'
import London from '../.././images/london.jpg'
import Maldives from '../.././images/maldives.jpg'
import Tokyo from '../.././images/tokyo.jpg'
import Rome from '../.././images/rome.jpg'
import Phuket from '../.././images/phuket.jpg'
import Bali2 from '../.././images/bali2.jpg'
import India from '../.././images/india.jpg'
import NewYork from '../.././images/newyork.jpg'
import Dubai from '../.././images/dubai.jpg'
import Sydney from '../.././images/sydney.jpg'
import Amsterdam from '../.././images/amsterdam.jpg'
import StLucia from '../.././images/stlucia.jpg'
import Niagara from '../.././images/niagara.jpg'
import CostaRica from '../.././images/costarica.jpg'
import CardItem from '../CardItem';
export default function Destination() {
  return (
    <>
    <h1>Discover The World</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={Paris}
              text='Explore the Iconic Eiffel Tower, the Louvre and Arc de Triomphe.'
              label='Paris'
              path='/'
            />
            <CardItem
              src={BoraBora}
              text="Here, you'll find picturesque beaches, lush jungles and luxurious resorts."
              label='Bora Bora Islands'
              path='/'
            />
          </ul>
        </div>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={London}
              text='Explore the the Tower of London, Tate Modern, Buckingham Palace or the British Museum.'
              label='London'
              path='/'
            />
            <CardItem
              src={Maldives}
              text='Imagine waking up to the sound of the waves, a wonderland of white-sand beaches and turquoise lagoons.'
              label='Maldives'
              path='/'
            />
          </ul>
        </div>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={Tokyo}
              text="Simply setting foot in Japan's cosmopolitan capital is an experience within itself."
              label='Tokyo'
              path='/'
            />
            <CardItem
              src={Rome}
              text='Explore the Colosseum, the Trevi Fountain, the Pantheon and the Sistine Chapel.'
              label='Rome'
              path='/'
            />
          </ul>
        </div>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={Phuket}
              text="Explore the limestone cliffs of Phang Nga Bay and lounge on Phuket's gorgeous white sand beaches."
              label='Phuket'
              path='/'
            />
            <CardItem
              src={Bali2}
              text='Serene temples and beautiful beaches are the biggest draws to this lush Indonesian paradise.'
              label='Bali'
              path='/'
            />
          </ul>
        </div>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={India}
              text='One of the oldest civilisations in the world, India is a mosaic of multicultural experiences.'
              label='India'
              path='/'
            />
            <CardItem
              src={NewYork}
              text="Wander through Central Park, tour the exhibits at the Met, catch a Broadway show or peruse SoHo's stylish boutiques."
              label='New York'
              path='/'
            />
          </ul>
        </div>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={Dubai}
              text='Stunning Persian Gulf views, heart-pumping activities and historical landmarks await you in Dubai.'
              label='Dubai'
              path='/'
            />
            <CardItem
              src={Sydney}
              text="Sydney offers a dizzying array of landmarks, such as the Sydney Opera House and the Sydney Harbour Bridge."
              label='Sydney'
              path='/'
            />
          </ul>
        </div>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={Amsterdam}
              text='Famous museums, tulips, canal-lined streets, "coffee shops" and high-end boutiques await you in Amsterdam.'
              label='Amsterdam'
              path='/'
            />
            <CardItem
              src={StLucia}
              text='Dotted with luxurious boutique hotels, this Caribbean destination is tailor-made for lovebirds.'
              label='St. Lucia'
              path='/'
            />
          </ul>
        </div>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={Niagara}
              text="A spectacular cluster of three waterfalls, Niagara Falls is a must-see and one of North America's best sites."
              label='Niagara Falls'
              path='/'
            />
            <CardItem
              src={CostaRica}
              text='Explore the beaches of Nicoya Peninsula, hike along Arenal Volcano and spot exotic wildlife in Tortuguero National Park.'
              label='Costa Rica'
              path='/'
            />
          </ul>
        </div>
      </div>
      </>
        );
}