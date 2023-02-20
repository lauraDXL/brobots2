import React from 'react';
import sponsori from '../assets/sponsors.png';
import * as styles from '../styles/layout.module.scss';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <img src={sponsori} alt='sponsori' />
    </div>
  <div style="font-style:bold;font-size:35px;color:black;top:633px;left:30px;position:absolute;font-weight:100;">Supported by Edward</div>

  );
};

export default Footer;
