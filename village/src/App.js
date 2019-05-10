import React, { Component } from 'react';
import axios from 'axios';
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

  addSmurf = (smurf)=> {
    console.log(smurf)
    axios.post('http://localhost:3333/smurfs',smurf)
    .then(res=>{
      console.log(res)
      this.setState({
        smurfs: [...res.data]
      })
    })
    .catch(err=>console.log(err));
  }

  updateSmurf = (id,smurf)=>{
    console.log(smurf)
    console.log(id);
    axios.put(`http://localhost:3333/smurfs/${id}`,{...smurf})
      .then(res=>{
        this.setState({
          smurfs: [...res.data]
        })
      })
      .catch(err=> console.log(err));
  }
  deleteSmurf = (id)=>{
  console.log(id)
    axios.delete(`http://localhost:3333/smurfs/${id}`)
    .then(res=>{
      console.log(res)
      this.setState({
        smurfs: res.data,
      })
    })
    .catch(err=>console.log(err))
      
  }
  
  render() {
    return (
      <Router>
      <div className="App">
      <Navigation/>
      
      
      <Route exact path="/" render={(props)=><Smurfs {...props} updateSmurf = {this.updateSmurf} deleteSmurf={this.deleteSmurf} smurfs={this.state.smurfs} />}/>
       <Route  path="/smurf-form" render={()=><SmurfForm addSmurf={this.addSmurf}/>}/>
        
       
      </div>
      </Router>
    );
  }
}

export default App;
