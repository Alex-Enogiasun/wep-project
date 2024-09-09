import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
const Services = () => {
	return (
		<>
			<Navbar />
			<div className="services-container">
				<div className="services-para">
					{" "}
					<h1>Services</h1>
					<p>
						Welcome to our website! We are dedicated to providing the best
						service and information about our products and services. Our mission
						is to deliver quality and excellence in everything we do.<br></br>
						<img
							src="./images/trx-img2.jpg"
							alt="trx-img2"
							width="100%"
							height="100%"
						/>
						Value Added Services (VAS) organization that offers instant recharge
						of Airtime, Data Bundle, CableTV (DStv, GOtv & Startimes),
						Electricity Bill Payment, Recharge Card Printing and so much more to
						our customers.
					</p>
					<h2>Our Team</h2>
					<p>
						We have a team of dedicated professionals who are passionate about
						their work and committed to our mission and values. Meet our team
						members and learn more about their roles in our success.
					</p>
				</div>

				<div className="services-image">
					<img
						src="./images/trx-img1.jpg"
						alt="trx-img1"
						width="100%"
						height="50%"
						id="id1"
					/>
					<img
						src="./images/trx-img3.jpg"
						alt="trx-img3"
						width="100%"
						height="50%"
						id="id3"
					/>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Services;
