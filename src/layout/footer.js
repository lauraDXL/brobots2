import React from 'react';
import sponsori from '../assets/sponsors.png';
import * as styles from '../styles/layout.module.scss';

const Footer = () => {
  return ( 
<div style={{position: 'relative'}}>
    <div style=
    {{fontSize: '25px',
bottom: '20px',
color:'black',
fontWeight: 'bold',
left:'20px',
position:'absolute'}}>Supported by Edward</div>
    <div className={styles.footer}>
      <img src={sponsori} alt='sponsori' />
    </div>
</div>
  );
};

export default Footer;
