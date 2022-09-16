import React from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import "./styles/App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
	return (
		<div>
			<Header />
			<Home />
		</div>
	);
}

export default App;
