/* eslint-disable */
import React, { Component } from 'react';
import headerImg from '../../assets/img/what-to-expect.png';

class WhatToExpect extends Component {

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

                                                            <ul>
                                                                <li>People usually arrive shortly before 10am</li>
                                                                <li>Parking in the paddock behind the church and along the street</li>
                                                                <li>Mens and women’s toilets behind the meeting hall  (The women’s toilet has a baby changing space and table)</li>
                                                                <li>Church services go for about an hour</li>
                                                                <li>You’re welcome to join us for a biscuit and a cup of tea afterwards in the Hall behind the church building</li>
                                                                <li>Each Sunday during one of the songs we take up an optional collection of money to fund the work of the church</li>
                                                                <li>Most people dress ‘smart-casual’</li>
                                                                <li>For now, until we figure out the best way to have a creche and Sunday school for little children, kids are welcome to sit with their parents, to read, listen or draw.</li>
                                                                <li>People sometimes come and go during the service, it might seem disruptive in a small space but no one minds</li>
                                                            </ul>

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

export default WhatToExpect;
