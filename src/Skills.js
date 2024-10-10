import React, { Component } from "react";

class Skills extends Component {
  render() {
    return (
      <div className="hd4">
        <div className="hd4_c1">
          <p>{this.props.keySkills.section}</p>
        </div>
        <div className="hd4_c2">
          <p>
            {this.props.keySkills.skill}<br></br>
            {this.props.keySkills.skill}<br></br>
            {this.props.keySkills.skill}<br></br>
          </p>
          <p>
            {this.props.keySkills.skill}<br></br>
            {this.props.keySkills.skill}<br></br>
            {this.props.keySkills.skill}<br></br>
          </p>
          <p>
            {this.props.keySkills.skill}<br></br>
            {this.props.keySkills.skill}<br></br>
            {this.props.keySkills.skill}<br></br>
          </p>
        </div>
      </div>
    );
  }
}

export default Skills;
