import React from 'react';
import '../Footer.css';
// import { Button } from '../Button';
import { Link } from 'react-router-dom';
import '../../App.css';
import Footer from '../Footer'
import './ContactUss.css'
export default function ContactUs() {
  return (
    <>
    <div className="contain">
      <h1>Contact Us</h1>
      <p>We are here to help and answer any question you might have. We look forward
                to hearing from you &#x1F60A;</p>
                </div>
                <div style={{backgroundColor: 'black',position: 'relative', top: '-30vh'}}>
                <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='social-icons'>
          <a
              class='social-icon-link facebook'
              // to='/sign-up'
              exact
              href='https://www.facebook.com/ayush.goutam.507/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </a>
            <a
              class='social-icon-link instagram'
              href='https://www.instagram.com/ayush_23_09/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </a>
            <a
              class='social-icon-link youtube'
              href='https://www.youtube.com/watch?v=nkLQ_VTi91U&amp;t=22s'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </a>
            <a
              class='social-icon-link twitter'
              href='https://twitter.com/?lang=en'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </a>
            <a
              class='social-icon-link twitter'
              href='https://www.linkedin.com/in/ayush2309/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </a>
          </div>
          </div>
      </section>
      </div>
                <Footer />
    </>
  );
}