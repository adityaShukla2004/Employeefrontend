import React from 'react'
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';

function LeftManu() {
  return (
    <>
    

    <ListGroup flush>
        <ListGroupItem tag="a"><Link to="/">Home</Link></ListGroupItem>
        <ListGroupItem tag="a" ><Link to="/addEmployees">Add Employee</Link></ListGroupItem>
        <ListGroupItem tag="a" ><Link to="/allEmployees">View Employee</Link></ListGroupItem>
        <ListGroupItem tag="a" ><Link to="/abouteUs">AboutUs</Link></ListGroupItem>
        <ListGroupItem tag="a" ><Link to="/contactUs">ContactUs</Link></ListGroupItem>
      </ListGroup>
   
    </>
  )
}

export default LeftManu