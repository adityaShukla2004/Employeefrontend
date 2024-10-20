import React, { useEffect, useState } from 'react'
import Course from './Course'
import base_url from '../api/bootApi'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import Error from './Error';

function AllCourses() {

    const [courses, setcourses] = useState([]);


    

    useEffect(()=>{
        document.title="View all Employees || Aditya Shukla";
    })



    // Get data from the server 
    const getData=()=>{
             axios.get(`${base_url}/employees`).then(
                (Response)=>{
                    console.log(Response.data);
                    toast.success("Employee data has been loaded");
                    setcourses(Response.data);
                }
             ,(error)=>{
                console.log(error);
                toast.error("Server down");
                
             }
            );
         };

         useEffect(()=>{
            getData();
         },[]);

         const updateCourse=(id)=>
         {
              setcourses(courses.filter((e)=>e.id!=id));
         }
    return (
        <div>
             <h1 style={{color:"green"}}>All Courses</h1>
             <p >List of courses:</p>
             {
                courses.length>0? courses.map((item,index)=>{ return <Course key={index}Employee={item} update={updateCourse}/>}):<Error/>
             }
        </div>
    )
}

export default AllCourses