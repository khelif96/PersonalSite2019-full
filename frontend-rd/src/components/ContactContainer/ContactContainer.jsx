import React from 'react';
import EmailForm from './EmailForm/EmailForm';
import styles from './ContactContainer.module.css';

function ContactContainer() {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <h2>Find me on social media</h2>
        <div className={styles.iconsContainer}>
          <a href="https://github.com/khelif96" rel="noopener noreferrer">
            <i className="fab fa-github-square" />
          </a>
          <a href="https://linkedin.com/in/mohamedkhelif" rel="noopener noreferrer">
            <i className="fab fa-linkedin" />
          </a>
        </div>
      </div>
      <div className={styles.social}>
        <h2>Shoot me an email</h2>
        <EmailForm />
      </div>
    </div>
  );
}

export default ContactContainer;
