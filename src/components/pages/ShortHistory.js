/* eslint-disable */
import React, { Component } from 'react';
import headerImg from '../../assets/img/short-history.png';

class ShortHistory extends Component {

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

                                                            <p className="padding-top-15">
                                                            Gold brought all sorts of people to Western Victoria, including Presbyterians.
                                                            </p>

                                                            <p className="padding-top-15">
                                                            St Andrews, Horsham was founded in 1875. However after the formation of the Uniting Church in 1977 the continuing Presbyterians church-planted back into Horsham from Marnoo in 1980, originally meeting in the Anglican church hall before moving the old Presbyterian building from Wonwondah onto the existing Kalkee road site in 1984.
                                                            </p>

                                                            <p className="padding-top-15">
                                                            Horsham Presbyterian Church belongs to the Ballarat Presbytery, and previous ministers included Don Elliot (1985-1991), Wally Rakete (1994-1999), John Brennan (2002-2006), Willem Vandenberg (2007-2013) and Luke Isham (2014-2019).
                                                            </p>
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

export default ShortHistory;
