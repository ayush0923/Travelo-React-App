import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutUs from './components/pages/AboutUs';
import Destination from './components/pages/Destination';
import Services from './components/pages/Services';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';
import Trailer from './components/pages/Trailer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about-us' exact component={AboutUs} />
          <Route path='/destination' exact component={Destination} />
          <Route path='/services' exact component={Services} />
          <Route path='/contact-us' exact component={ContactUs} />
          <Route path='/sign-up'  exact component={SignUp} />
          <Route path='/trailer'  exact component={Trailer} />
        </Switch>
      </Router>
    </>
  );
}

export default App;