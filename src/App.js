import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import fakeData from './fakeData';
import Header from './Components/Header/Header';
import { useState } from 'react';
import Main from './Components/Main/Main';
import Add from './Components/Add/Add';



//Counting Total price...
const findTotalPrice = (course) => {
  if(course.length === 0){
      return 0.00;
  }
  // console.log(course);
  const total = course.reduce((a, c) => (a+c.cost), 0).toFixed(2);
  // console.log(total);
  return total;
}

//Main Function..
function App() {
  // console.log(fakeData);
  const courses = [...fakeData];
  const [course, setCourse] = useState([]);

  // Enroll Now Button Handler...
  const handleCourse = (addedCourse) => {
    const newCourse = [...course, addedCourse];
    let uniq = [];
    let uniqCourse = [];
    for (let i = 0; i < newCourse.length; i++) {
      if(uniq.indexOf(newCourse[i].id)===-1){
        uniq.push(newCourse[i].id);
        uniqCourse.push(newCourse[i]);
      }
    }
    // console.log(uniqCourse);
    setCourse(uniqCourse);
  }

  // Remove Course Handler...
  const handleRemoveCourse = (removedCourse) => {
    const finalCourses = course.filter(crs => crs.id !== removedCourse.id);
    setCourse(finalCourses);
  }
  return (
    <div className="App bg-dark">
      
      <Header ></Header> 
    
      
      <div className="container course">
        <div className="row course-details">
          {
            // Main Components For Displaying Course List...
            courses.map(crs => <Main key={crs.id} handleCourse={handleCourse} course={crs}></Main>)
          }
        </div>
        <div className="course-cart text-center"> 
          <h5 className="text text-warning">Enrolled Courses: {course.length}</h5>
          <h6 className={`text text-light`}>Total Price: ${findTotalPrice(course)} USD</h6>
          <div className="cart">
            {
              
              course.map(crs => <Add key={crs.id} handleRemoveCourse={handleRemoveCourse} addCourse={crs}></Add>)
             }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
