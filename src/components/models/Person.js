import React, { Component } from 'react';


class Person extends Component {

    render() {
        return (
            <div className="row">
                <div className="person-container col-md-3">
                    <div className="person-image">
                        <img className="img img-responsive image-center" src={this.props.image} alt={this.props.name} />
                    </div>
                    <div className="person-name text-center">
                        {this.props.name}
                    </div>
                    <div className="person-title text-center">
                        {this.props.title}
                    </div>
                </div>
                <div className="person-blurb col-md-9">
                    <p dangerouslySetInnerHTML={{ __html: this.props.blurb }} style={{ paddingTop: "15px", marginBottom: "50px" }} />
                </div>
            </div>
        );
    }
}

export default Person;
