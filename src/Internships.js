// Internships.js
import React from 'react';
import Navbar from './Navbar'; // Import Navbar
import './Internships.css'; // Import CSS for styling

const internshipsData = [
  {
    id: 1,
    title: 'Software Engineer Intern',
    description: 'Join our team to develop innovative software solutions.',
    image: 'https://via.placeholder.com/300',
  },
  {
    id: 2,
    title: 'Data Analyst Intern',
    description: 'Analyze data and provide insights to help our business grow.',
    image: 'https://via.placeholder.com/300',
  },
  {
    id: 3,
    title: 'Marketing Intern',
    description: 'Assist in creating marketing strategies and campaigns.',
    image: 'https://via.placeholder.com/300',
  },
  {
    id: 4,
    title: 'Graphic Design Intern',
    description: 'Design graphics and visual content for our brand.',
    image: 'https://via.placeholder.com/300',
  },
  {
    id: 5,
    title: 'Web Development Intern',
    description: 'Help build and maintain our web applications.',
    image: 'https://via.placeholder.com/300',
  },
  {
    id: 6,
    title: 'UX/UI Design Intern',
    description: 'Work on improving user experience and interface design.',
    image: 'https://via.placeholder.com/300',
  },
  {
    id: 7,
    title: 'Content Writer Intern',
    description: 'Create engaging content for our website and blog.',
    image: 'https://via.placeholder.com/300',
  },
  {
    id: 8,
    title: 'Research Intern',
    description: 'Conduct research and present findings to the team.',
    image: 'https://via.placeholder.com/300',
  },
];

const Internships = () => {
  return (
    <>
      <Navbar /> {/* Add Navbar here */}
      <div className="internships-container">
        <h1>Available Internships</h1>
        <div className="internship-cards-container">
          {internshipsData.map((internship) => (
            <div className="internship-card" key={internship.id}>
              <img src={internship.image} alt={internship.title} className="internship-image" />
              <h2>{internship.title}</h2>
              <p>{internship.description}</p>
              <button className="register-button">Register</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Internships;
