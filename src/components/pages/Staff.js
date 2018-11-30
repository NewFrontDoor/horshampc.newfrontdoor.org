/* eslint-disable */
import React, { Component } from 'react';

import Person from '../models/Person';
import LukeImg from '../../assets/img/luke-at-pilgrim-hill-launch-2010.jpg'

class Staff extends Component {

    render() {
        return (
            <section>
                <div id="top-content-region" className="top-content padding-top-15 padding-bottom-15 block-15 bg-color-grayLight1">
                    <div className="container">
                        <div className="row">
                            <div id="top-content-left-region" className="top-content-left col-xs-12 col-md-6 text-center-sm">
                                <div id="page-title-block" className="page-title block">
                                    <h1>Staff</h1>
                                </div>
                            </div>

                            <div id="top-content-right-region" className="top-content-right col-xs-12 col-md-6 text-right text-center-sm">
                                <div id="page-breadcrumbs-block" className="page-breadcrumbs block">
                                    <div className="breadcrumbs">
                                        <a href="/">Home</a>
                                        <span className="delimiter">›</span>
                                        <span title="" className="nolink">About Us</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="content-region">
                    <div className="container">
                        <div className="row">
                            <div id="main-content-region" className="main-content col-xs-12">
                                <div className="region region-content">
                                    <div id="block-system-main" className="block block-system">
                                        <div className="content">
                                            <div className="node node-page clearfix">
                                                <div className="content">
                                                    <div className="row">
                                                        <div className="col-md-12">

                                                            <Person name="Luke Isham" image={LukeImg} />
                                                            <div className="col-md-9">
                                                                <p>Luke is married to Amy and has two young kids. He was inducted as the new minister of Horsham Presbyterian Church in January 2015.</p>
                                                                <p>Originally Luke was ordained in the Anglican Diocese of Tasmania in 2009 after studying at Ridley Theological College in Melbourne. He jumped ship in 2012 to become a Presbyterian minister, which took three years of extra part time study. While doing this extra study, Luke worked first for Soul Presbyterian Church and then for University Fellowship of Christians (AFES).</p>
                                                            </div>


                                                        </div>





                                                    </div>

                                                </div>



                                            </div>
                                        </div>
                                    </div>
                                </div>



                            </div>




                        </div>
                    </div>
                </div>
            </section >
        );
    }
}

export default Staff;
