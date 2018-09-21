/* eslint-disable */
import React, { Component } from 'react';

//import LatestSermon from './LatestSermon';
//import WhereToFindUs from './WhereToFindUs';
//import UpcomingEvents from './UpcomingEvents';
import GoogleMap from '../models/GoogleMap';

class HomePageContent extends Component {
  render() {
    return (
      <section>
        <div className="content-2 bg-color-white text-color-default" >
          <div className="container">
            <div className="row text-center">
              {/*<LatestSermon />
              <WhereToFindUs />
              <UpcomingEvents />*/}

              <h2 style={{ marginTop: "20px", marginBottom: "0px" }}>10am this Sunday 16 Kalkee Rd Horsham</h2>
              <h3 style={{ marginTop: "0px" }}>(9:30am Good Friday and Christmas Day)</h3>
              <h4>We meet on Sunday mornings at 10 am, to sing, pray, think, read the Bible and listen to a sermon. Afterwards we chat over light refreshments. You’re welcome to join us.</h4>
              <GoogleMap id="map_canvas" height="270px" />

            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default HomePageContent;
