import React from 'react';

const About = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>About Our App</h1>
      <p>
        Welcome to our Note-Securing App, a cutting-edge platform designed to help you effortlessly manage and secure your personal and professional notes. Our app leverages the power of Express, React, MongoDB, and Node.js to provide a seamless and secure experience for our users.
      </p>
      <h2>Features</h2>
      <ul>
        <li><strong>Add Notes:</strong> Easily create and organize your notes with our intuitive interface.</li>
        <li><strong>Secure Cloud Storage:</strong> Your notes are securely stored in the cloud, ensuring they are always accessible and protected.</li>
        <li><strong>Cross-Platform Access:</strong> Access your notes from any device, anywhere, anytime.</li>
      </ul>
      <h2>Technology Stack</h2>
      <p>
        Our app is built using the following technologies:
      </p>
      <ul>
        <li><strong>Express:</strong> A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.</li>
        <li><strong>React:</strong> A JavaScript library for building user interfaces, allowing us to create a dynamic and responsive user experience.</li>
        <li><strong>MongoDB:</strong> A NoSQL database known for its scalability and flexibility, perfect for storing and managing large amounts of unstructured data.</li>
        <li><strong>Node.js:</strong> A JavaScript runtime built on Chrome's V8 JavaScript engine, enabling fast and efficient server-side scripting.</li>
      </ul>
      <h2>Our Mission</h2>
      <p>
        Our mission is to provide a reliable, secure, and user-friendly platform for note-taking and management. We understand the importance of keeping your information safe and accessible, and we are committed to continuously improving our app to meet your needs.
      </p>
      <p>
        Thank you for choosing our Note-Securing App. We hope it helps you stay organized and secure your important information with ease.
      </p>
    </div>
  );
};

export default About;
