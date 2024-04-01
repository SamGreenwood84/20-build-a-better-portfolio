import React from 'react';
import AboutMe from './components/aboutMe/aboutMe';
import Contact from './components/contact/contact'; // Import Contact component
import ContactForm from './components/contactForm/contactForm'; // Import ContactForm component

const App = () => {
  return (
    <div className="App">
      <AboutMe />
      {/* Render other sections/components here */}
      <Contact />
      <ContactForm />
    </div>
  );
};

export default App;