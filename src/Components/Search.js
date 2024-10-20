import React, { useEffect, useState } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import axios from 'axios';
import base_url from '../api/bootApi';
import Course from './Course';



function Search() {
    const location = useLocation();

    const [Employee,setEmployee]=useState({});
    const [sta,setsta]=useState(false);

    useEffect(()=>{
        serchData(location.state.data);
    },[location.state.data]);

    const serchData=(id)=>{
        axios.get(`${base_url}/employees/${id}`).then(
            (Response) => {
              console.log(Response);
              setEmployee(Response.data);
              setsta(true);
              
            }, (error) => {
              console.log(error);
              setsta(false);
              
            }
          );
    }
  return (
      <>
          { sta==true?< Course key={Employee.id}Employee={Employee} />:"Employee is not Exist"}
      
      </>

  )
}

export default Search