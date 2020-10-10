import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions,Button, CardMenu, IconButton} from 'react-mdl';

class Projects extends Component{
  constructor(props){
    super(props);
    this.state = {
      activeTab: 0
    };
  }
  toggleCategories(){
    if(this.state.activeTab === 0){
      {/* project 1 */}

      return(
        <div className = "projects-grid">
        <Card shadow={5} style = {{minwidth: '450', margin: 'auto'}}>
        <CardTitle style = {{color: 'black', height: '170px', background: 'url(https://nicholasmontgomerycom.files.wordpress.com/2020/10/ravenous-react-image.png?w=1024) center/cover'}}>  React project #1  </CardTitle>
        <CardText>

      a query based app using React.js to build the user interface and additionally using the Yelp api to deliver the search results.

        </CardText>

        <CardActions border>
        <Button colored a href="https://github.com/Nickryan13/react_portfolio_Nickryan13" rel="noopener noreferrer" target="_blank">GitHub</Button>
        <Button  a href="https://nickryan13.github.io/react_portfolio_Nickryan13/" rel="noopener noreferrer" target="_blank">Live Demo</Button>
        </CardActions>
        <CardMenu style = {{color: '#fff'}}>
        <IconButton name = "Share"/>
        </CardMenu>
        </Card>
{/* Project 2 */}
        <Card shadow={5} style = {{minwidth: '450', margin: 'auto'}}>
        <CardTitle style = {{color: 'black', height: '170px', background: 'url(https://nicholasmontgomerycom.files.wordpress.com/2020/10/video_player.png?w=1024) center/cover'}}>  React project #3 </CardTitle>
        <CardText>
        An app built using react that uses three different components to build out a responsive video player
        </CardText>

        <CardActions border>
        <Button colored a href="https://nickryan13.github.io/my-app/" rel="noopener noreferrer" target="_blank">Live Demo</Button>
        </CardActions>
        <CardMenu style = {{color: '#fff'}}>
        <IconButton name = "Share"/>
        </CardMenu>
        </Card>

        </div>
      )

    } else if(this.state.activeTab === 1){
      {/* html project 1 */}
      return(
        <div className = "projects-grid">
        <Card shadow={5} style = {{minwidth: '450', margin: 'auto'}}>
        <CardTitle style = {{color: 'black', height: '170px', background: 'url(https://nicholasmontgomerycom.files.wordpress.com/2020/08/cruise.jpg?w=371) center/cover'}}> HTML/css project  </CardTitle>
        <CardText>
        A single page, responsive, mock travel website that uses a functioning navigation and utlyzing php for the signup form
        </CardText>

        <CardActions border>
        <Button  a href="http://nmontgomery.mydevryportfolio.com/gmd311/Montgomery_wk7_lab/wk7_lab.html" rel="noopener noreferrer" target="_blank">Live Demo</Button>
        </CardActions>
        <CardMenu style = {{color: '#fff'}}>
        <IconButton name = "Share"/>
        </CardMenu>
        </Card>
        {/* html project 2 */}
        <Card shadow={5} style = {{minwidth: '450', margin: 'auto'}}>
        <CardTitle style = {{color: 'white', height: '170px', background: 'url(https://nicholasmontgomerycom.files.wordpress.com/2020/08/guitar-3.jpg?w=1024) center/cover'}}> HTML/css project </CardTitle>
        <CardText>
        a fully responsive web template that uses a guitar shop as an example. utlyzes a jquery slider and multiple CSS web animations
        </CardText>

        <CardActions border>
        <Button colored a href= "http://nmontgomery.mydevryportfolio.com/wgd242/tutorial_wk7/#&panel1-2" rel="noopener noreferrer" target="_blank">Live Demo</Button>
        </CardActions>
        <CardMenu style = {{color: '#fff'}}>
        <IconButton name = "Share"/>
        </CardMenu>
        </Card>
        { /* html project 3 */}
        <Card shadow={5} style = {{minwidth: '450', margin: 'auto'}}>
        <CardTitle style = {{color: 'black', height: '170px', background: 'url(https://nicholasmontgomerycom.files.wordpress.com/2020/08/tea-3.jpg?w=1024) center/cover'}}>  html/css project 3 </CardTitle>
        <CardText>
        A fully responsive website using a tea manufacturer as an example. Site contains Hero images and multiple media querys to work across multiple devices.
        </CardText>

        <CardActions border>
        <Button colored a href="http://nmontgomery.mydevryportfolio.com/wgd251/wk5_lab/hero.html" rel="noopener noreferrer" target="_blank">Live Demo</Button>
        </CardActions>
        <CardMenu style = {{color: '#fff'}}>
        <IconButton name = "Share"/>
        </CardMenu>
        </Card>


        </div>
      )
    } else if(this.state.activeTab === 2){
      {/*JavaScript project 1 */}
      return(
        <div className="projects-grid">
        <Card shadow={5} style = {{minwidth: '450', margin: 'auto'}}>
        <CardTitle style = {{color: 'black', height: '170px', background: 'url(https://nicholasmontgomerycom.files.wordpress.com/2020/08/canvas.jpg?w=1024) center/cover'}}>  JavaScript Project </CardTitle>
        <CardText>
        a mini game that implements javascript along with HTML5 canvas. Click for a live demo!
        </CardText>

        <CardActions border>
        <Button colored a href="http://nmontgomery.mydevryportfolio.com/wgd235/wk6_lab/wk6_lab.html.html" rel="noopener noreferrer" target="_blank">Live Demo</Button>
        </CardActions>
        <CardMenu style = {{color: '#fff'}}>
        <IconButton name = "Share"/>
        </CardMenu>
        </Card>
        {/* JavaScript project 2 */}
        <Card shadow={5} style = {{minwidth: '450', margin: 'auto'}}>
        <CardTitle style = {{color: 'black', height: '170px', background: 'url(https://nicholasmontgomerycom.files.wordpress.com/2020/10/wl.png?w=1024) center/cover'}}>  Javascript/json project</CardTitle>
        <CardText>
        A web application that uses javasctipt, AJAX, and json to pull information of a cities top attractions and current weather
        </CardText>

        <CardActions border>
        <Button colored a href="http://nmontgomery.mydevryportfolio.com/portfolio/wanderlust/wanderlust/" rel="noopener noreferrer" target="_blank">Live Demo</Button>
        </CardActions>
        <CardMenu style = {{color: '#fff'}}>
        <IconButton name = "Share"/>
        </CardMenu>
        </Card>

        </div>
      )
    }else if(this.state.activeTab === 3){
      {/* GD project 1 */}
      return(
        <div className="projects-grid">
        <Card shadow={5} style = {{minwidth: '450', margin: 'auto'}}>
        <CardTitle style = {{color: 'black', height: '400px', background: 'url(https://nicholasmontgomerycom.files.wordpress.com/2020/08/gpx2.jpg?w=311) center/cover'}}></CardTitle>
        <CardText>
        An advertisment for a game console done on Adobe Photoshop
        </CardText>

        <CardActions border>
        </CardActions>
        <CardMenu style = {{color: '#fff'}}>
        <IconButton name = "Share"/>
        </CardMenu>
        </Card>
        {/* GD project 2 */}
        <Card shadow={5} style = {{minwidth: '600', margin: 'auto'}}>
        <CardTitle style = {{color: 'white', height: '400px', background: 'url(https://nicholasmontgomerycom.files.wordpress.com/2020/08/kalio_jpg-3.jpg?w=1024) center/cover'}}></CardTitle>
        <CardText>
        a typography composition and styling done on Adobe Photoshop
        </CardText>

        <CardActions border>
        </CardActions>
        <CardMenu style = {{color: '#fff'}}>
        <IconButton name = "Share"/>
        </CardMenu>
        </Card>

        <Card shadow={5} style = {{minwidth: '600', margin: 'auto'}}>
        <CardTitle style = {{color: 'white', height: '400px', background: 'url(https://nicholasmontgomerycom.files.wordpress.com/2020/08/grunge-3.jpg?w=1024) center/cover'}}></CardTitle>
        <CardText>
        Compostion done on Adobe Photoshop
        </CardText>

        <CardActions border>
        </CardActions>
        <CardMenu style = {{color: '#fff'}}>
        <IconButton name = "Share"/>
        </CardMenu>
        </Card>

        </div>
      )
    }
  }

  render(){
    return(
      <div className = "catagory-tabs">
      <Tabs activeTab = {this.state.activeTab} onChange = {(tabId) => this.setState({activeTab: tabId})} ripple>
      <Tab>React</Tab>
      <Tab>HTML/CSS</Tab>
      <Tab>Javascript</Tab>
      <Tab>Graphic design</Tab>

      </Tabs>
      <Grid className = "projects-grid">
      <Cell col={12}>
      <div className = "content">{this.toggleCategories()}</div>
      </Cell>
      </Grid>
      </div>

    )
  }
}
export default Projects;
