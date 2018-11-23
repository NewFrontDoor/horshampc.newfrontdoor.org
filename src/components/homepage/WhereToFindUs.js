/* eslint-disable */
import React, { Component } from 'react';
import GoogleMap from '../models/GoogleMap';


class WhereToFindUs extends Component {
  render() {
    return (
      <section>
        <div className="col-md-4 col-xs-12">
          <div className="region region-content-2-2">
            <div className="block block-block">
              <h2 >Where to Find Us</h2>
              <div className="content">

                <GoogleMap id="map_canvas" height="360px" />
                <br />
                <div><a href="https://goo.gl/maps/ska8Gp68jUG2" rel="noopener noreferrer" target="_blank">Horhsam Presbyterian Church</a></div>
                <div>Sunday 10am (9:30am Good Friday and Christmas)</div>
                <div>16 Kalkee Rd,</div>
                <div>Horsham, Victoria 3400</div>  </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default WhereToFindUs;
