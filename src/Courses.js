// Courses.js
import React from 'react';
import './Courses.css';

const coursesData = [
  {
    id: 1,
    title: 'Full Stack Development',
    description: 'Learn full-stack development with hands-on projects.',
    image: 'https://via.placeholder.com/300',
  },
  {
    id: 2,
    title: 'Data Science and Analytics',
    description: 'Master data science and analytics techniques.',
    image: 'https://via.placeholder.com/300',
  },
  {
    id: 3,
    title: 'UI/UX Design',
    description: 'Learn design principles and create stunning user interfaces.',
    image: 'https://via.placeholder.com/300',
  },
  {
    id: 4,
    title: 'Machine Learning',
    description: 'Dive into the world of machine learning with real-world examples.',
    image: 'https://via.placeholder.com/300',
  },
  {
    id: 5,
    title: 'Cybersecurity',
    description: 'Learn how to protect systems and data from attacks.',
    image: 'https://via.placeholder.com/300',
  },
];

const Courses = () => {
  return (
    <div className="courses-container">
      <h1>Available Courses</h1>
      <div className="course-cards-container">
        {coursesData.map((course) => (
          <div className="course-card" key={course.id}>
            <img src={course.image} alt={course.title} className="course-image" />
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            <button className="enroll-button">Enroll Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
