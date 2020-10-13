import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Landing extends Component{
  render(){
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://www.iconfinder.com/data/icons/user-pictures/100/male3-512.png"
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

            <hr/>

          <p>HTML/CSS |JavaScript | React |  NodeJS | Bootstrap | Graphic Design</p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/nick-montgomery-6937271aa/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/Nickryan13" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>



        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
  }

  export default Landing;
