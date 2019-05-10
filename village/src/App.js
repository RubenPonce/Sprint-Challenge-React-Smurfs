import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Smurf from './components/Smurf'
import Navigation from "./components/Navigation";
import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  componentDidMount(){
    axios.get('http://localhost:3333/smurfs')
    .then(res=>{
      console.log(res)
      this.setState({
        smurfs: res.data,
      })
    })
    .catch(err=>console.log(err));
  }




  
  render() {
    return (
      <Router>
      <div className="App">
      <Route component={Navigation}/>
      
      
      <Route exact path="/" render={(props)=><Smurfs {...props} smurfs={this.state.smurfs} />}/>
       <Route path="/smurf-form" component={SmurfForm}/>
        
       
      </div>
      </Router>
    );
  }
}

export default App;
