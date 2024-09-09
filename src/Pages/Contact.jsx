import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
const Contact = () => {
	return (
		<>
			<Navbar />
			<div className="contact-wrapper">
				<div className="contact-container">
					<h1>Contact Us Today</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
						asperiores! Soluta alias impedit suscipit adipisci porro, beatae
						pariatur, nisi odio quaerat laudant
					</p>
					<div className="feedback">
						<input type="text" placeholder="Name*" required />
						<input type="email" placeholder="email*" required />
						<textarea placeholder="Message" required />
						<button type="submit">Submit</button>
					</div>
				</div>
				<Footer />
			</div>
		</>
	);
};

export default Contact;
