/* eslint-disable */
import React, { Component } from 'react';
import headerImg from '../../assets/img/about.png';

class About extends Component {

    render() {
        return (
            <section>
                <div id="top-content-region" className="top-content block-15 bg-color-grayLight1">
                    <div className="container">
                        <div className="row">

                            <img className="img img-responsive" src={headerImg} alt="" />
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

                                                            <p>Horsham Presbyterian Church is a congregation of about 35 people from a variety of backgrounds. We range in age from 1 to 80, there are a number of retirees, there’s also a couple of professionals, an aircraft mechanic, two shepherds, a farmer, students and some are self-employed. The thing we value most about being Presbyterian is thinking and speaking carefully about God. We also value practical heartfelt preaching and studying the Bible during the week. Like Christians everywhere we are a broken people being ministered to by a gracious God and we’d like to share that freedom and forgiveness with you.</p>

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

export default About;
