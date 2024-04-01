import React from 'react';
import './App.css'; // Import CSS file for global styles
import AboutMe from './components/aboutMe/aboutMe'; // Import AboutMe component
import Contact from './components/contact/contact'; // Import Contact component
import ContactForm from './components/contactForm/contactForm'; // Import ContactForm component

const App = () => {
  return (
    <div className="App">
      <AboutMe />
      <Contact />
      <ContactForm />
      {/* Render other sections/components here */}
    </div>
  );
};

export default App;
