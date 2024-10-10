import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import PersonalProfile from "./PersonalProfile";
import WorkExperience from "./WorkExperience";
import Skills from "./Skills";
import Education from "./Education";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personInfo: {
        name: "Zh Rimel",
        occupation: "Data Scientist",
      },
      contactInfo: {
        email: "abc@gmail.com",
        web: "abc.github.io/abc",
        mobile: "01234567890",
      },
      personalProfile: {
        section: "Personal Profile",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                      enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat.`,
      },
      workExperience: {
        section: "Work Experience",
        job1: "Job Title at Company (August 2022 – December 2023)",
        desc1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.`,
        job2: "Job Title 2 at Company 2 (August 2020 – December 2021)",
        desc2: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.`,
      },
      keySkills: {
        section: "Key Skills",
        skill: "A Key Skill"
      },
      education: {
        section: "Education",
        uni: "New Jersey Institute of Technology",
        degree1: "BS in Computer Science",
        y1: "2018 - 2022",
        gpa1: "3.9",
        degree2: "MS in Computer Science",
        y2: "2022 - 2023",
        gpa2: "4.0"
      }
    };
  }

  render(){
    return(
      <div>
        <Header personInfo={this.state.personInfo} contactInfo={this.state.contactInfo}></Header>
        <hr size="10" color="gold"></hr>
        <PersonalProfile personalProfile={this.state.personalProfile}></PersonalProfile>
        <hr></hr>
        <WorkExperience workExperience={this.state.workExperience}></WorkExperience>
        <hr></hr>
        <Skills keySkills={this.state.keySkills}></Skills>
        <hr></hr>
        <Education education={this.state.education}></Education>
      </div>
    )
  }
}

export default App;
