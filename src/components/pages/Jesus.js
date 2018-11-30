/* eslint-disable */
import React, { Component } from 'react';
import headerImg from '../../assets/img/jesus.png';

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
                                                                The Gospel is good news about a Jew named Jesus who lived in the Middle East 2000 years ago. His mum was the virgin Mary and he told people about sin and grace, later he was crucified for claiming he was God. But then he rose from the dead and promised he’d return one day to judge the living and the dead.
                                                            </p>

                                                            <p className="padding-top-15">
                                                                If you’d like a more detailed but still easy to read, description of Jesus, then <a href="http://ukcatalogue.oup.com/product/9780199575275.do" target="_blank" rel="noopener noreferrer"><i>Jesus: A Very Short Introduction </i></a>by Richard Bauckham and published by the Oxford University Press&nbsp;is a great place to start. If you’re passing through Horsham and would like a free copy <a href="/ContactUs">contact us</a> and we’ll give you one.
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
