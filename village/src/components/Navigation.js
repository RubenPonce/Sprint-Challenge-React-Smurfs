import React from 'react'
import {NavLink} from 'react-router-dom';
export default class Navigation extends React.PureComponent {
  render(){
      return (
    <div>
    <NavLink to="/"> Smurfs</NavLink>
      <NavLink to="/smurf-form">Add smurf</NavLink>
    </div>
  )}
}
