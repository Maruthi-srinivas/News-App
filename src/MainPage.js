// MainPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

const MainPage = () => {
  return (
    <div className={styles.start_page}>
      <h1>Welcome to News App</h1>
      <div className={styles.button_container}>
        <Link to="/login">
          <button className={styles.green_btn}>Login</button>
        </Link>
      </div>
    </div>
  );
};

export default MainPage;


