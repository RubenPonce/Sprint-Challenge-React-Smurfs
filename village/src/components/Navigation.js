import React from 'react'
import {NavLink} from 'react-router-dom';
export default function Navigation() {
  return (
    <div>
    <NavLink exact to="/"> Smurfs</NavLink>
      <NavLink to="/smurf-form">Add smurf</NavLink>
      
    </div>
  )
}
