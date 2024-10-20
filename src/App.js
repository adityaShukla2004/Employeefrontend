
import './App.css';
import Header from './Components/Header';
import { Button, Container, Row, Col } from 'reactstrap';

import { ToastContainer, toast } from 'react-toastify';
import Home from './Components/Home';
import Course from './Components/Course';
import AllCourses from './Components/AllCourses';
import AddCourse from './Components/AddCourse';
import LeftManu from './Components/LeftManu';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Updatecourse from './Components/Updatecourse';
import Search from './Components/Search';

function App() {
     const btnhundler = () => {
          toast.success("hello my name is aditya shukla");
     }
     return (
          <>

               <Router>


                    <ToastContainer />
                    <Header />
                    <Container>
                         <Row>
                              <Col md="3">
                                   <LeftManu />


                              </Col>
                              <Col md="9">

                                   <Routes>

                                        <Route path='/' element={<Home />} />
                                        <Route path='/addEmployees' element={<AddCourse />} />
                                        <Route path='/allEmployees' element={<AllCourses />} />
                                        <Route path='/contactUs' element={<Home />} />
                                        <Route path='/abouteUs' element={<Home />} />
                                        <Route path='/update' element={<Updatecourse/>} />
                                        <Route path='/search' element={<Search/>} />
                                   </Routes>

                              </Col>
                         </Row>
                    </Container>
               </Router>
          </>
     );
}

export default App;
