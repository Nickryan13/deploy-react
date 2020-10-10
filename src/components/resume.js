import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education'
import Experience from './Experience'
import Skills from './skills'

class Resume extends Component{
  render(){
    return(
      <div>
      <Grid>
      <Cell col={4}>
      <div style={{textAlign:"center"}}>
      <img
      src="https://nicholasmontgomerycom.files.wordpress.com/2020/08/20200731_133132-1.jpg?w=600"
      alt="avatar"
      style={{height:"400px"}}
      />
      </div>
      <h2 style={{paddingTop:"2em"}}>Nicholas Montgomery</h2>
      <h4 style={{color:"grey"}}>Programmer</h4>
      <hr style={{borderTop:"3px solid #833fb2", width:"50%"}}/>
      <p>Thank you for taking the time to view my online web portfolio! I am a web developer livingin in Southern California with 2 years experience and am about to recieve my Bachelors degree in the field. I am, creative, very hardworking and pay close attention to the details. My goal is to work as a web developer for a company helping to design a better web for everyone! </p>
      <hr style={{borderTop:"3px solid #833fb2", width:"50%"}}/>
      <h5>Phone # 949-619-9155</h5>
      <h5>Or message me on Linkedin!</h5>
      <a href="https://www.linkedin.com/in/nick-montgomery-6937271aa/" rel="noopener noreferrer" target="_blank" className="social-link">
        <i className="fa fa-linkedin-square" aria-hidden="true" />
      </a>

     <hr style={{borderTop:"3px solid #833fb2", width:"50%"}}/>

      </Cell>
      <Cell col={8} className="resume-right-col">


      <h2>Education</h2>


      <Education
        startYear={2006}
        endYear={2010}
        schoolName="Capistrano Valley high school"
        schoolDescription="High school diploma"
      />
      <Education
      startYear={2019}
      endYear={2020}
      schoolName="Devry University"
      schoolDescription="Undergraduate certification in graphic and web design"
      />
      <Education
      startYear={2020}
      endYear={2022}
      schoolName="Devry University"
      schoolDescription="Bachelors degree in Web Development"
      />
      <hr style={{borderTop:"3px solid #e22947"}} />
      <h2>Experience</h2>

      <Experience
      startYear={2017}
      endYear="Present"
      jobName="O'reilly Auto Parts"
      jobDescription="Store Manager"

      />

      <Experience
      startYear={2014}
      endYear={2016}
      jobName="Dana point Yacht Club"
      jobDescription="Event Coordinator"

      />

      <hr />

      <h2>Skills</h2>

      <Skills
      skills='JavaScript'
      progress={87}
      />

      <Skills
      skills='HTML/CSS'
      progress={80}
      />
      <Skills
      skills='React'
      progress={80}
      />
      <Skills
      skills='Adobe cs/Graphic design'
      progress={85}
      />
      </Cell>
      </Grid>
      </div>
    )
  }
}
export default Resume;
