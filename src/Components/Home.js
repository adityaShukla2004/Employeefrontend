import React, { useEffect } from 'react'
import { Button, Card, CardBody } from 'reactstrap'



function Home() {
    useEffect(()=>{
        document.title="Home || Aditya Shukla"
    });
    return (
        <div>
             
             <Card className='text-center py-2 my2'>

                <CardBody>

                    <h3>Hello ....</h3>
                    <h4 className='text-red'>Welcome I Employee Management System</h4>
                    <Button color='primary'>Click Hare</Button>
                </CardBody>
             </Card>
            




        </div>
    )
}

export default Home