import React, { Component } from "react";

class PersonalProfile extends Component{
    render(){
        return(
            <div className="hd2">
                <div className="hd2_c1">
                    <p>{this.props.personalProfile.section}</p>
                </div>
                <div className="hd2_c2">
                    <p>{this.props.personalProfile.description}</p>
                </div>
            </div>
        )
    }
}

export default PersonalProfile;