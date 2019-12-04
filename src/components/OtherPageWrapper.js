/* eslint-disable */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import OtherPageContent from './OtherPageContent';

import AllSermons from './pages/AllSermons';
import Sermons from './pages/Sermons';
import SermonPage from './pages/SermonPage';
import SermonSeriesPage from './pages/SermonSeriesPage';


//import OurPeople from './pages/OurPeople';
import VisionStatement from './pages/VisionStatement';
import OrderOfService from './pages/OrderOfService';
import Links from './pages/Links';
import WhatToExpect from './pages/WhatToExpect';
import About from './pages/About';
import Staff from './pages/Staff.js';
import ShortHistory from './pages/ShortHistory';
import Jesus from './pages/Jesus';
//import Vacancy from './pages/Vacancy';


import ContactUs from './pages/ContactUs';


class OtherPageWrapper extends Component {
  render() {
    return (
      <section>
        <Switch>
          <Route exact path="/AllSermons" component={AllSermons} />
          <Route exact path="/Sermons" component={Sermons} />
          <Route exact path="/sermon/:nid" component={SermonPage} />
          <Route exact path="/sermon/:nid/:title" component={SermonPage} />
          <Route exact path="/series/:nid" component={SermonSeriesPage} />
          <Route exact path="/series/:nid/:title" component={SermonSeriesPage} />

          <Route exact path="/VisionStatement" component={VisionStatement} />
          <Route exact path="/OrderOfService" component={OrderOfService} />
          <Route exact path="/VisionStatement" component={VisionStatement} />
          <Route exact path="/WhatToExpect" component={WhatToExpect} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Staff" component={Staff} />
          <Route exact path="/Links" component={Links} />
          <Route exact path="/ContactUs" component={ContactUs} />
          <Route exact path="/ShortHistory" component={ShortHistory} />
          <Route exact path="/Jesus" component={Jesus} />

          <Route path="/*" component={OtherPageContent} />
        </Switch>
      </section>
    );
  }
}

export default OtherPageWrapper;
