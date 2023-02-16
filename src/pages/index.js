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
        <div style="
          background: transparent;
          color: black;
          font-size: 4.375em;
          position: absolute;
          left: 1.250em;
          top: 25em;">BroBots</div>
        {language === 'en'
              ?'BroBots'
              :'BroBots'
        }
      </div>
      <div className={styles.image}>
        <img src={robotel} alt='robotel' />
      </div>
    </Layout>
  );
};

export default IndexPage;
