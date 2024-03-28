// import React from "react";
// import ReactDOM from "react-dom/client";
// // importing Car Component
// import Car from "./components/Car"

// // using react list
// function Garage() {
//   const cars = [
//     {id: 1, brand: 'Ford'},
//     {id: 2, brand: 'BMW'},
//     {id: 3, brand: 'Audi'}
//   ];
//   return (
//     <>
//       <h1>Who lives in my garage?</h1>
//       <ul>
//         {cars.map((car) => <Car key={car.id} brand={car.brand} />)}
//       </ul>
//     </>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Garage />);


// forms in react
import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function MyForm() {
  const [myCar, setMyCar] = useState("Volvo");
  const handleChange = (event) => {
    setMyCar(event.target.value)
    console.log(myCar);
  }

  return (
    <form>
      <select name='car' value={myCar} onChange={handleChange}>
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>
    </form>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);