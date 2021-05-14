import React from 'react';
import '../App.css';
import { ButtonD } from './ButtonD';
import { ButtonE } from './ButtonE';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='./videos/video-1.mp4' autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <ButtonD
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </ButtonD>
        <ButtonE
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </ButtonE>
      </div>
    </div>
  );
}

export default HeroSection;