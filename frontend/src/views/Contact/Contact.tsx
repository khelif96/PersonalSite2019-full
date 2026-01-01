import React from 'react';
import { ContactContainer } from '../../components';
import styles from './Contact.module.css';

const Contact: React.FC = () => {
  return (
    <div id="contact" className={styles.container}>
      <h2>Contact</h2>
      <div className={styles.content}>
        <ContactContainer />
      </div>
    </div>
  );
}

export default Contact;
