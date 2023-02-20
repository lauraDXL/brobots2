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
  <div style={
    fontSize:30px,
    color:black,
    top: 20vh,
    fontWeight:bold,
    position:absolute}
  >BroBots</div>

      <div className={styles.image}>
        <img src={robotel} alt='robotel' />
      </div>
    </Layout>
  );
};

export default IndexPage;
