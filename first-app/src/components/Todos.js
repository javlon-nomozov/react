import { memo } from "react";
import styles from '../styles/my-style.module.css';

const Todos = ({ todos }) => {
  const myStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Sans-Serif"
  };
  console.log("child render");
  return (
    <>
      <h2 style={{backgroundColor: '#ff0', color: 'white', padding: '10px' || 10}}>My Todos</h2>
      <h2 className={styles.bigblue}>CSS module</h2>
      {todos.map((todo, index) => {
        return <p key={index} style={myStyle}>{todo}</p>;
      })}
    </>
  );
};

export default memo(Todos);