import React, { Component } from 'react';
import './App.css';
import Notes from './components/Notes'
import './index.css'
import 'semantic-ui-css/semantic.min.css'


class App extends Component {
  render() {
    return (
      <div>
        
				<Notes />
      </div>
    );
  }
}

export default App;
