import React, { Component } from "react";

class Education extends Component{
    render(){
        return(
            <div className="hd5">
                <div className="hd5_c1">
                    <p>{this.props.education.section}</p>
                </div>
                <div className="hd5_c2">
                    <p>{this.props.education.uni}</p>
                    <p>{this.props.education.degree1}</p>
                    <p>{this.props.education.y1}</p>
                    <p>{this.props.education.gpa1}</p>
                    <p>{this.props.education.degree2}</p>
                    <p>{this.props.education.y1}</p>
                    <p>{this.props.education.gpa2}</p>
                </div>
            </div>
        )
    }
}

export default Education;