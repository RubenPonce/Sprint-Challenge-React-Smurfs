import React from "react";
import { Route, Link } from "react-router-dom";
import axios from "axios";
class Smurf extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      height: "",
      age: "",
    };
    
  }

  handleChange = event => {
    console.log(event.target)
    this.setState({ [event.target.name]: event.target.value });
  };
  deleteSmurf = ()=>{
    console.log(this.props.id)
    this.props.deleteSmurf(this.props.id)
  }


  formSubmit = e => {
    e.preventDefault();
    this.props.updateSmurf(this.props.id, {...this.state})
    
    this.setState({
      name: "",
      height: "",
      age: "",
    });
  };

  render() {
    return (
      <div className="Smurf">
        <form onSubmit={this.formSubmit}>
          <button>edit</button>
          <button type="button" onClick={this.deleteSmurf}>delete</button>
          <input  onChange= {this.handleChange} name="name" type="text" value={this.state.name} required placeholder="name"/>
          <input  onChange={this.handleChange} type="text" name="age" value={this.state.age}  required placeholder="age" />
          <input  onChange={this.handleChange} name="height" type="text" required value={this.state.height} placeholder="height"/>
        </form>
          
        <h3>{this.props.name}</h3>
        <strong>{this.props.height} tall</strong>
        <p>
          {this.props.age} smurf years old
        </p>
      </div>
    );
  }
}

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;
