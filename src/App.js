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
		<h1>Hello Lixin. Test from new PC. Go back to my Lenovo laptop.</h1>
		<h2>Start editing to see some magic happen!</h2>
  		</header>
      </div>
    );
  }
}

export default withAuthenticator(App, true);
