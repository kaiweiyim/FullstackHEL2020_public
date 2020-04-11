import React from 'react';
import Header from './Header';
import Content from './Content';


const Course = ({courses}) => (
    <>  
        <h1>Web development curriculum</h1>
        {courses.map(course => 
            <div key = {course.id}>
                <Header text = {course.name}/>
                <Content parts = {course.parts}/>       
            </div>
        )}
        
    </>

)


export default Course;