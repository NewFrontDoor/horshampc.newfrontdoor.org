/* eslint-disable */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navigation from '../Navigation';
import Slider from './Slider';
import Welcome from './Welcome';
import HomePageContent from './HomePageContent';

class HomePageWrapper extends Component {
  render() {
    return (
      <section>
        <div className="main-wrapper wide">
          {/*<Slider />*/}
          <HomePageContent />
        </div>
      </section>
    );
  }
}

export default HomePageWrapper;
