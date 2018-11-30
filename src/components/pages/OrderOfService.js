/* eslint-disable */
import React, { Component } from 'react';
import headerImg from '../../assets/img/order-of-service.png';

class OrderOfService extends Component {

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
                                                            <h5>We Approach</h5>
                                                            <ul className="padding-top-15">
                                                                <li>Welcome & Call to Worship</li>
                                                                <li><em>Song</em></li>
                                                                <li>Announcements</li>
                                                            </ul>


                                                            <h5>God Speaks</h5>
                                                            <ul className="padding-top-15">
                                                                <li>1st Reading: usually an Old Testament reading</li>
                                                                <li>Ministry Spot</li>
                                                                <li>(Sometimes a Children’s story)</li>
                                                                <li><em>Song</em></li>
                                                                <li>2nd Reading: usually a New Testament reading</li>
                                                                <li>Sermon</li>
                                                            </ul>


                                                            <h5>We Respond</h5>
                                                            <ul className="padding-top-15">
                                                                <li><em>Song</em> (offering taken up during song)</li>
                                                                <li>Prayer</li>
                                                                <li>(A monthly celebration of the Lord’s Supper)</li>
                                                                <li><em>Benediction</em></li>
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

export default OrderOfService;
