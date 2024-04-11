import React from 'react';
import './contact.css'; // Import CSS file for styling

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <h2>Contact Me</h2>
            <div className="contact-content">
                <p>
                    Want to chat or collaborate on a project? Feel free to reach out to me via email or connect with me on social media. Let's create something amazing together!
                </p>
                <div className="contact-info">
                    <ul>
                        <li><span>Email:</span> <a href="mailto:asksam2023@gmail.com">asksam2023@gmail.com</a></li>
                        <li><span>Socials:</span> <a href="https://www.facebook.com/sagg84">Facebook</a></li>
                        <li><span>GitHub:</span> <a href="https://github.com/SamGreenwood84">GitHub</a></li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Contact;
