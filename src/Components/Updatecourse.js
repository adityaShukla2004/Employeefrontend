import React, { useEffect, useState} from 'react'
import { Button, Form, FormGroup, Label, Input, FormText,Container } from 'reactstrap';
import axios from 'axios';
import base_url from '../api/bootApi';
import {toast} from 'react-toastify'
import {useLocation, useNavigate} from 'react-router-dom'

function Updatecourse() {

    const location = useLocation();
    const navigate = useNavigate();

    const [courses,setcourses]= useState({
        name:location.state.name,
        email:location.state.email,
        phone:location.state.phone
    });
    useEffect(()=>{
        document.title="Update Employee || Aditya Shukla"
    })

    const submithundler=(e)=>{
          console.log(courses);
         e.preventDefault();

         updateCourse(location.state.id,courses);
         navigate('/allEmployees');
    }
    const updateCourse=(id,course)=>{
         axios.put(`${base_url}/employees/${id}`,course).then(
            (Response)=>{
                console.log(Response.data);
                toast.success("Data updated Successfully");
            },(error)=>{
                console.log(error);
                toast.error("Not Updated");
            }
         )
    }
    console.log(location.state)
  return (
        <>
             <h1>{location.state.data}</h1>
            <Form className='text-left mt-50px'onSubmit={submithundler}>
            <h3 style={{color:"green"}}>Fill Employee Details</h3>
         <FormGroup>
          <Label for="name">Name</Label>
          <Input type="text" name="name" id="name" placeholder="Enter the name" value={courses.name}onChange={(e)=>{setcourses({...courses,name:e.target.value})}} />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" id="email" placeholder="Enter the email" value={courses.email} onChange={(e)=>{setcourses({...courses,email:e.target.value})}}/>
        </FormGroup>
        <FormGroup>
          <Label for="phone">Phone</Label>
          <Input type="text" name="phone" id="phone" placeholder="Enter the Number" value={courses.phone} onChange={(e)=>{setcourses({...courses,phone:e.target.value})}}/>
        </FormGroup>

        <Container className='text-center'>
            <Button color="success" type='submit'>Update</Button>
            <Button color="danger ml-5" type='reset'>Clear</Button>
        </Container>

         </Form>
        </>
  )
}

export default Updatecourse