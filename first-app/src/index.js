import ReactDOM from "react-dom/client";

import React from "react";

import products from "./data/products";
import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";
import ProductFilter from "./components/ProductFilter";
// import About from "./components/About";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						exact
						path="/"
						element={<ProductFilter products={products} />}
					/>
					<Route
						exact
						path="/about"
						element={<p>about</p>}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

// export default App;


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);