import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mainsection from "./Components/Mainsection";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/NotFound";
import SignUpForm from "./Pages/SignUpForm";

function App() {
	return (
		<>
			<div className="wrapper">
				<Router>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/services" element={<Services />} />
						<Route path="/signupform" element={<SignUpForm />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</Router>
			</div>
		</>
	);
}

export default App;
