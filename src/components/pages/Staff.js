/* eslint-disable */
import React, { Component } from 'react';

import Person from '../models/Person';
import MaleImg from '../../assets/img/people/Male.png';
import FemaleImg from '../../assets/img/people/Female.png';
import TylerImg from '../../assets/img/Tyler.jpg';

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

                                                            <Person name="Pastor: TBA" image={MaleImg} blurb="Short blurb about the new pastor." />

                                                            <Person name="Volunteer Women’s Worker: Barbara" image={FemaleImg} blurb="Barbara grew up and spent most of her adult life in far western NSW.  After retiring from a career in education, she moved to the Wimmera to support her family. She has three daughters, a grandson and a granddaughter. In between caring for family and tutoring, she is completing a Master of Divinity at Ridley College. God has done marvellous things in Barbara’s life, and she is passionate about wanting everyone to share in the gospel." />

                                                            <Person name="METRO Prepare Trainee: Tyler" image={TylerImg} blurb="Tyler was born it Taree NSW and lived a sporadic lifestyle, constantly moving between states and towns until he moved to Horsham in 2009. He was baptised in November 2019 and now he is hoping to become a minister to help teach and spread the word of God." />


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
