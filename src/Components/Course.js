import axios from 'axios';
import React from 'react'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container
} from 'reactstrap';
import base_url from '../api/bootApi';
import { useNavigate } from 'react-router-dom';


function Course({ Employee, update }) {


  const navigate = useNavigate();

  const deleteData = (id) => {
    axios.delete(`${base_url}/employees/${id}`).then(
      (Response) => {
        console.log(Response);
        update(id);
      }, (error) => {
        console.log(error);
      }
    );

  }
  return (
    <div>
      <Card className='my-3'>
        
        <CardBody className='text-center'>
          <CardTitle className="font-weight-bold">{Employee.name} </CardTitle>
          <CardSubtitle>{Employee.email}</CardSubtitle>
          <CardSubtitle> Employee Id is :{Employee.id}</CardSubtitle>
          <CardText>{Employee.phone}</CardText>
          <Container className='text-center'>
            <Button color='warning' className='my-2' onClick={

              () => navigate("/update", { state: { id: Employee.id, name: Employee.name, email: Employee.email, phone: Employee.phone } })

            }>Update</Button>
            <Button color="danger" onClick={() => deleteData(Employee.id)}>Delete</Button>
          </Container>



        </CardBody>
      </Card>
    </div>
  )
}

export default Course