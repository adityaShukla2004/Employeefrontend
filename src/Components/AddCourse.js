import React, { useEffect, useState} from 'react'
import { Button, Form, FormGroup, Label, Input, FormText,Container } from 'reactstrap';
import axios from 'axios';
import base_url from '../api/bootApi';
import {toast} from 'react-toastify'
import {useNavigate} from 'react-router-dom'


function AddCourse() {

  const navigate = useNavigate();

    const [courses,setcourses]= useState({});
    useEffect(()=>{
        document.title="Add Employee || Aditya Shukla"
    })

    const submithundler=(e)=>{
          console.log(courses);
         e.preventDefault();

         postdata(courses);
    }

    //post funtion
    const postdata=(data)=>{
           axios.post(`${base_url}/employees`,data).then(
            (Response)=>{
                console.log(Response.data);
                toast.success("Added Employee Successfully");
                navigate("/");

            },(error)=>{
                console.log(error);
                toast.error("Something Went Worong");
            }
            );
           
    }
  return (
     <>
         <Form className='text-left mt-50px'onSubmit={submithundler}>
            <h3 style={{color:"green"}}>Fill Employee Details</h3>
         <FormGroup>
          <Label for="name">Name</Label>
          <Input type="text" name="name" id="name" placeholder="Enter the name" onChange={(e)=>{setcourses({...courses,name:e.target.value})}} />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" id="email" placeholder="Enter the email" onChange={(e)=>{setcourses({...courses,email:e.target.value})}}/>
        </FormGroup>
        <FormGroup>
          <Label for="phone">Phone</Label>
          <Input type="text" name="phone" id="phone" placeholder="Enter the Number" onChange={(e)=>{setcourses({...courses,phone:e.target.value})}}/>
        </FormGroup>

        <Container className='text-center'>
            <Button color="success" type='submit'>Add Course</Button>
            <Button color="danger ml-5" type='reset'>Clear</Button>
        </Container>

         </Form>
     
     </>
  )
}

export default AddCourse