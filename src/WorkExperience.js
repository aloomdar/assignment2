import React, {Component} from "react";

class WorkExperience extends Component{
    render(){
        return(
            <div className="hd3">
                <div className="hd3_c1">
                    <p>{this.props.workExperience.section}</p>
                </div>
                <div className="hd3_c2">
                <p><b>{this.props.workExperience.job1}</b></p>
                <p>{this.props.workExperience.desc1}</p>
                <p><b>{this.props.workExperience.job2}</b></p>
                <p>{this.props.workExperience.desc2}</p>
                </div>
            </div>
        )
    }
}

export default WorkExperience;