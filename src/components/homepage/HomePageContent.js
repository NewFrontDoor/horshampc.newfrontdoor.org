/* eslint-disable */
import React, { Component } from 'react';

import LatestSermon from './LatestSermon';
import WhereToFindUs from './WhereToFindUs';
import UpcomingEvents from './UpcomingEvents';

class HomePageContent extends Component {
  render() {
    return (
      <section>
        <div className="content-2 bg-color-white text-color-default" >
          <div className="container">
            <div className="row text-center">

              <br />
              {/*<h4>We meet on Sunday mornings at 10 am, to sing, pray, think, read the Bible and listen to a sermon. Afterwards we chat over light refreshments. You’re welcome to join us.</h4>*/}
              <h4>Services and church activities are currently suspended due to the COVID-19 virus. However, we are still contactable via phone and email. Our contact details can be found below at the bottom of the page or on <a href="/ContactUs">this page</a>.</h4>
              <br /></div>
            <div className="row">
              <LatestSermon />
              <WhereToFindUs />
              {/*<UpcomingEvents />  */}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default HomePageContent;
