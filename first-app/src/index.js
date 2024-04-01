import { useState } from "react";
import ReactDOM from "react-dom/client";

// My code
// -----------------------------
function Nav() {
  return (
    <>
      <nav>
        <ul>Home</ul>
        <ul>About</ul>
      </nav>
    </>
  )
}

function FavoriteColor() {
  const [color, setColor] = useState("red");
  function changeColor(color){
    setColor(color)
  }
  return (
    <>
      <Nav />
      <a target="_blank" rel="noreferrer" href="https://github.com/javlon-nomozov/react/blob/day5.2/first-app/src/index.js">My solution</a>
    <h1 style={{color}} >My favorite color is {color}!</h1>
    <button onClick={color==='red'?()=>changeColor('blue'):()=>changeColor('red')}>Make it {color==='red'?'blue':'red'}</button>
    </>
  )
}
// -----------------------------

// W3shools.com solution
// -----------------------------
// function FavoriteColor() {
//   const [color, setColor] = useState("red");

//   return (
//     <>
//       <a style={{display:'none'}} target="_blank" rel="noreferrer" href="https://github.com/javlon-nomozov/react/blob/day5.2/first-app/src/index.js">My solution</a>
//       <a target="_blank" rel="noreferrer" href="https://www.w3schools.com/react/react_usestate.asp?goalId=313cbc7b-8d34-40a6-a00a-1e332cd58705">w3schools.com solution</a>
//       <h1>My favorite color is {color}!</h1>
//       <button
//         type="button"
//         onClick={() => setColor("blue")}
//       >Blue</button>
//     </>
//   )
// }
// -----------------------------


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FavoriteColor />);