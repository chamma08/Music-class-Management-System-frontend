import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ListTeacherComponent from './components/ListTeacherComponent';
import HeaderComponent from './components/HeaderComponent';
import React from 'react';
import FooterComponent from './components/FooterComponent';
import CreateTeacherComponent from './components/CreateTeacherComponent';
import ViewTeacherComponent from './components/ViewTeacherComponent';
import ListStudentComponent from './components/ListStudentComponent';
import CreateStudentComponent from './components/CreateStudentComponent';
import ListClassDetailComponent from './components/ListClassDetailComponent';
import CreateClassDetailsComponent from './components/CreateClassDetailsComponent';
import Login from './components/Login';
import { ContactUs } from './components/Contact';
import Preloader from './components/Preloader';


function App() {

  return (
    <div className='App'>

       
      <Router>
       
        <HeaderComponent/>
        <Preloader />
        <div className="container">
          <Routes>
            
            <Route path="/" element={<ListTeacherComponent />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/teachers" element={<ListTeacherComponent />} />
            <Route path="/students" element={<ListStudentComponent />} />
            <Route path="/class-details" element={<ListClassDetailComponent />} />
            <Route path="/add-teacher" element={<CreateTeacherComponent />} />
            <Route path="/add-student" element={<CreateStudentComponent />} />
            <Route path="/add-details" element={<CreateClassDetailsComponent />} />
            <Route path = "/edit-teacher/:id" element = { <CreateTeacherComponent />}></Route>
            <Route path = "/edit-student/:id" element = { <CreateStudentComponent />}></Route>
            <Route path = "/edit-details/:id" element = { <CreateClassDetailsComponent />}></Route>
            <Route path = "/view-teacher/:id" element = { <ViewTeacherComponent />}></Route>
          </Routes>
        </div>
        <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;
