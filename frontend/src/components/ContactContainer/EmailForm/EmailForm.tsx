import React from 'react';
import styles from './EmailForm.module.css';


const EmailForm: React.FC = () => {
  const email = ['k', 'h', 'e', 'l', 'i', 'f', '9', '6', '@', 'g', 'm', 'a', 'i', 'l', '.', 'c', 'o', 'm'];

  function sendEmail() {
    window.location.href = `mailto:${email.join('')}?subject=Hello there&body=This is the body`;
  }
  return (
    <div
      onClick={sendEmail}
      onKeyDown={sendEmail}
      role="button"
      tabIndex={0}
      className={styles.container}
    >
      {email.map((letter, index) => <span key={index}>{letter}</span>)}
    </div>
  );
}

export default EmailForm;
