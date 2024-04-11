import React from 'react';
import './app.css'; // Import CSS file for global styles
import AboutMe from './components/aboutMe/aboutMe'; // Import AboutMe component
import Contact from './components/contact/contact'; // Import Contact component
import ContactForm from './components/contactForm/contactForm'; // Import ContactForm component
import Footer from './components/footer/footer'; // Import Footer component
import Header from './components/header/header'; // Import Header component
import Portfolio from './components/portfolio/portfolio'; // Import Portfolio component
import Resume from './resume/SamanthaGreenwoodResume'; // Import Resume component

const projects = [
  {
    title: "christmas-movie-generator",
    image: "public/img/cmg.png",
    description: "Taking the guess work out of your holidays one movie at a time!",
    demoLink: "https://samgreenwood84.github.io/christmas-movie-generator/",
    githubLink: "https://github.com/SamGreenwood84/christmas-movie-generator.git"
  },
  {
    title: "Project 2",
    image: "public\img\dnd.png",
    description: "Coding and fantasy merge in an epic learning adventure.",
    demoLink: "link",
    githubLink: "https://github.com/Maximilian93B/DungeonsAndDevs.git"
  },
  {
    title: "festivalfriends",
    image: "public\img\ff.png",
    description: "Social Network for Festival Enthusiasts",
    demoLink: "link",
    githubLink: "https://github.com/SamGreenwood84/festivalfriends.git"
  },
];

const App = () => {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Portfolio projects={projects} />
      <Contact />
      <ContactForm />
      <Resume />
      <Footer />
    </div>
  );
};

export default App;
