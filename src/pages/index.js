import React from 'react';
import Layout from '../layout/layout';
import robotel from '../assets/Robotel2.svg';
import * as styles from '../styles/home.module.scss';
import ReactTypingEffect from 'react-typing-effect';

const IndexPage = props => {
  const { language } = props.pageContext;
  return (
    <Layout {...props}>
      <div className={styles.text}>
        <ReactTypingEffect
          style={{ marginBottom: '1.5vh' }}
          cursor={' '}
          displayTextRenderer={(text, i) => {
            return (
              <h1 key={i}>
                {text.split('').map((char, i) => {
                  const key = `${i}`;
                  return (
                    <span
                      key={key}
                      style={{ fontFamily: 'Zekton', fontSize: '2em' }}
                    >
                      {char}
                    </span>
                  );
                })}
              </h1>
            );
          }}
          text={['Bringing the future closer']}
        />
      </div>
  <h2 style={{fontSize: '40px', 
position: 'absolute',
bottom: '125px',
left: '70px'}}>BroBots</h2>
      <div className={styles.image}>
        <img src={robotel} alt='robotel' />
      </div>
    </Layout>
  );
};

export default IndexPage;
