import React from 'react';
import '../../App.css';
import '../Cards.css';
import './Servicess.css';
import CardItem from '../CardItem';
export default function Services() {
  return (
    <>
    <h1>Services We Provide</h1>
    <div className='cards__container'>
    <div className='cards__wrapper'>
    <ul className='cards__items'>
            <CardItem
              src='./images/skydiving.jpg'
              text='launching yourself out of an airplane and experience a breathtaking freefall.'
              label='Sky Diving'
              path='/'
            />
            <CardItem
              src='./images/rafting.jpg'
              text="Grab a paddle, hop in an inflatable raft and explore world's most turbulent waters."
              label='Rafting'
              path='/'
            />
            <CardItem
              src='./images/racing.jpg'
              text='Live out your motoring fantasies in style, with an Exotic Car Driving Experiences.'
              label='Car Racing'
              path='/'
            />
          </ul>
      </div>
    <div className='cards__wrapper'>
    <ul className='cards__items'>
            <CardItem
              src='./images/bungy.jpg'
              text='Ultimate death-defying plunge with your nose skimming the floor or a short-and-sweet drop.'
              label='Bungy jumping'
              path='/'
            />
            <CardItem
              src='./images/sandboarding.jpg'
              text='Most entertaining way to get around in the desert is by sliding downhill on a sandboard.'
              label='Sandboarding'
              path='/'
            />
            <CardItem
              src='./images/rapelling.jpg'
              text='Even more thrilling than climbing up a mountain, is rappelling, or abseiling.'
              label='Rappelling'
              path='/'
            />
          </ul>
      </div>
    <div className='cards__wrapper'>
    <ul className='cards__items'>
            <CardItem
              src='./images/caving.jpg'
              text='Crawling through narrow rock crevices and scrambling through pitch black caves.'
              label='Caving'
              path='/'
            />
            <CardItem
              src='./images/paragliding.jpg'
              text='Experience the feeling of floating in mid-air with a tandem paragliding excursion.'
              label='Paragliding'
              path='/'
            />
            <CardItem
              src='./images/rockclimbing.jpg'
              text='Achievement of scaling a precipitous cliff-face with nothing but your bare hands.'
              label='Rock climbing'
              path='/'
            />
          </ul>
      </div>
    <div className='cards__wrapper'>
    <ul className='cards__items'>
            <CardItem
              src='./images/hanggliding.jpg'
              text='Dive like a bird on a hand gliding excursion with nothing beneath you but fresh air.'
              label='Hang gliding'
              path='/'
            />
            <CardItem
              src='./images/skyswinging.jpg'
              text='Make like a modern-day Tarzan, hanging from a harness and soaring through the jungle.'
              label='Sky swinging'
              path='/'
            />
            <CardItem
              src='./images/parasailing.jpg'
              text='If you prefer water to heights, ditch the paragliding and go parasailing instead.'
              label='Parasailing'
              path='/'
            />
          </ul>
      </div>
    <div className='cards__wrapper'>
    <ul className='cards__items'>
            <CardItem
              src='./images/biking.jpg'
              text='Forget rolling through country lanes and leisurely pedaling the beachfront.'
              label='Extreme biking'
              path='/'
            />
            <CardItem
              src='./images/skiing.jpg'
              text="There's an array of beginner runs, near-vertical black runs and challenging off-piste routes."
              label='Skiing'
              path='/'
            />
            <CardItem
              src='./images/surfing.jpg'
              text="Now's the time to learn to catch some waves for yourself and wrestle with the waves."
              label='Surfing'
              path='/'
            />
          </ul>
      </div>
      </div>
      </>
  );
}