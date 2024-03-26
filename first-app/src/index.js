import React from "react";
import ReactDOM from "react-dom/client";
// importing Car Component
import Car from "./components/Car"

// ---------------------------------------
//  using variables in react
// const name = "Javlon";

// const myFirstElement = (
//   <>
//     <h1>React is {5 + 5} times better with JSX</h1>
//     {/* <h1>The learner name is {name}</h1> */}
//   </>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(myFirstElement);


// ---------------------------------------
// components with Props

function Garage() {
  return (
    <>
      <h1>Who lives in my Garage?</h1>
      <Car />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);