import React from "react";
import { FaDownload } from "react-icons/fa";
import { MdOutlineRateReview } from "react-icons/md";
import { TbWorldCancel } from "react-icons/tb";
import Footer from "../Components/Footer";
import { GiShadowFollower } from "react-icons/gi";

function Mainsection() {
	return (
		<>
			<div className="wrapper">
				{/*section1 */}
				<div className="section-1">
					<div className="para-section1">
						<strong>Ready to join? Seamless Payments</strong>

						<p>
							Value Added Services (VAS) organization that offers instant
							recharge of Airtime, Data Bundle, CableTV (DStv, GOtv &
							Startimes), Electricity Bill Payment, Recharge Card Printing and
							so much more to our customers.
						</p>
						<p className="numbers-of-users">
							<img
								src="./images/image.png"
								alt="user-image"
								width="200"
								height="100"
								className="users-image"
							/>
							4.8K+ Used this App
						</p>
					</div>

					<img
						src="./images/mobile-phone.GIF"
						alt="mobile-phone"
						className="office-pic"
					/>
				</div>

				<div className="wave-section">
					<img src="./images/gif.GIF" alt="gif" width="97%" height="150" />
				</div>
				{/*section2 */}
				<div className="section-2">
					<img
						src="./images/office-pic2.jpg"
						alt="office-pix2"
						className="office-pic"
					/>

					<div className="focus-section">
						<div className="focus-text">
							<strong>We focus on quality</strong>
							<br></br>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco.
							</p>
						</div>
						<div className="focus-section-div">
							<div className="info">
								<div className="inner-circle">
									<FaDownload />
								</div>
								2K+ Download
							</div>
							<div className="info">
								<div className="inner-circle">
									<GiShadowFollower />
								</div>
								25K+ Followers
							</div>

							<div className="info">
								<div className="inner-circle">
									<MdOutlineRateReview />
								</div>
								1500+ Review
							</div>

							<div className="info">
								<div className="inner-circle">
									<TbWorldCancel />
								</div>
								4+ Countries
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Mainsection;
