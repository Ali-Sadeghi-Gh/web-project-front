import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
      <footer className={styles.footer + ' ' + styles.py3}>
          <div className={styles.container}>
              <p className={styles.text_danger}>Feel free to leave us a message ...</p>
              <ul className={styles.pt3}>

              </ul>
          </div>
      </footer>
  );
};

export default Footer;