import React from 'react'
import {Link} from 'react-router-dom';
export default class Navigation extends React.PureComponent {
  render(){
      return (
    <div>
    <Link to="/"> Smurfs</Link>
      <Link to="/smurf-form">Add smurf</Link>
    </div>
  )}
}
