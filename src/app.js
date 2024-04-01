import React from 'react';
import './app.css'; // Import CSS file for global styles
import AboutMe from './components/aboutMe/aboutMe'; // Import AboutMe component
import Contact from './components/contact/contact'; // Import Contact component
import ContactForm from './components/contactForm/contactForm'; // Import ContactForm component
import Footer from './components/footer/footer'; // Import Footer component
import Header from './components/header/header'; // Import Header component
import Portfolio from './components/portfolio/portfolio'; // Import Portfolio component

const projects = [
  {
    title: "Project 1",
    image: "path/to/image1.jpg",
    description: "Description of project 1",
    demoLink: "link/to/demo1",
    githubLink: "link/to/github1"
  },
  {
    title: "Project 2",
    image: "path/to/image2.jpg",
    description: "Description of project 2",
    demoLink: "link/to/demo2",
    githubLink: "link/to/github2"
  },
  // Add more projects as needed
];

const App = () => {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Portfolio projects={projects} />
      <Contact />
      <ContactForm />
      {/* Render other sections/components here */}
      <Footer />
    </div>
  );
};

export default App;
