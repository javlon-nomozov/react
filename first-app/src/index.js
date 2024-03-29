import { useState } from "react";
import ReactDOM from "react-dom/client";
import MyForm from "./MyForm";
// css fayllarni import qisa bo'ldi ishlayveradi
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((c) => c + 1);
  };

  return (
    <>
      <MyForm />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
