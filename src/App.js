import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <body>
        <iframe width="420" height="315"
src="https://www.youtube.com/watch?v=nS7HJuXOv-4&ab_channel=offcampusrental">
</iframe>


    <p>Glassboro's finest! Walking Distance to Rowan University. Large living room and dining room and kitchen are ready for your party gathering. Need more space the lower level has a family room with half bath and large laundry room. A screened in back patio that extends to the entire back of the home gives you ample outdoor entertaining in warmer weather. 
      The upper level has 3 large bedrooms with spacious closets and full bathroom. The maintenance-free exterior home sits on a beautifully wooded property with gorgeous trees 
      and shrubs. This home will not be on the market long. Don't delay make an appointment today! Make sure to watch the video tour!</p>

    </body>
        </header>
      </div>
    );
  }
}

export default withAuthenticator(App, false);
