import React from 'react';
import { Container, Row, Col, Form, FormControl, Button } from 'react-bootstrap';

function Header() {
  return (
    <div className='Container'>
      <div className="card" style={{ width: '18rem' }}>
        <img src="https://media.licdn.com/dms/image/C4D0BAQHD860IjDpO_w/company-logo_200_200/0/1631332142648?e=2147483647&v=beta&t=aTwJiKCatUSlqHPONbunooKf-Le50lFiRfiJzrYNpWk" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Academy of Technology</h5>
          <p className="card-text">Welcome to departments</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div className="card text-center" style={{ width: '18rem' }}>
      <h1 className='Dep-Header'>COMPUTER SCIENECE ENGINEERING</h1>
      </div>
      <div className="card" style={{ width: '18rem' }}>
        <div className='Search-bar'>
         <h1>Search</h1> 
        <input type='text' placeholder='Search Departments'></input>
        </div>
        
      </div>
    </div>


  );
}

export default Header;