import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardBody, } from "reactstrap";
import { Button, Form, FormGroup, Label, Input, FormText,Container } from 'reactstrap';


const Header = (props)=>{
     const [eid,seteid]=useState( );
     const navigate = useNavigate();

     const submitHund=(e)=>{
             e.preventDefault();
             
             navigate('/search',{state:{data:eid}});
     }
    return (
        <>
           <div>
              
                  <Card className="my-2 bg-warning">
                    <CardBody>
                         <h1 style={{color:"green"}} className="text-center my-2">Welcome to Employee Management System</h1>
                         <Form>
                             <FormGroup>
                                <Input type="number" name="id"  placeholder="Enter the Id of Employee" value={eid} onChange={(e)=>seteid(e.target.value)}/>
                                <Button color="success" onClick={submitHund}>Search</Button>
                             </FormGroup>
                         </Form>
                    </CardBody>
                  </Card>
              
              
           </div>
        </>
    )
}

export default Header;