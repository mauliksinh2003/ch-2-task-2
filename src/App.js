import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import UserProfile from './UserProfile ';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Card from 'react-bootstrap/Card';

function App() {
 
  return (
  <div className='App'> 
    <UserProfile name = "Rahul" bio = "Computer engineer"/> 
    <UserProfile name = "Monil" bio = "Civil engineer"/> 
  </div>
  )
}
export default App;
