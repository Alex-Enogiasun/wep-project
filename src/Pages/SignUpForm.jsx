import React from "react";
import { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
const SignUpForm = () => {
	const [action, setAction] = useState("Log In");

	return (
		<>
			<Navbar />
			<div className="background">
				<div className="container-div">
					<div className="header-div">
						<div className="text-div">{action}</div>
						<div className="underline"></div>
					</div>
					<div className="inputs">
						{action === "Log In" ? (
							<div></div>
						) : (
							<div className="input">
								<img src="./images/id-icon.png" width="20" alt="lock-icon" />
								<input type="text" name="name" placeholder="Name" required />
							</div>
						)}

						<div className="input">
							<img src="./images/email-icon.jpg" width="30" alt="email-icon" />
							<input type="email" name="email" placeholder="Email" required />
						</div>
						<div className="input">
							<img src="./images/lock-icon.png" width="20" alt="lock-icon" />
							<input
								type="password"
								name="password"
								placeholder="Password"
								required
							/>
						</div>
						{action === "Log In" ? (
							<div className="forgot-password">
								<span>
									Forget Password?
									<a href="" id="forgot-password">
										Click Here
									</a>
								</span>
							</div>
						) : (
							<div></div>
						)}
					</div>
					<div className="submit">
						<button
							className={action === "Log In" ? "signin-up" : "signin-up-grey"}
							onClick={() => setAction("Log In")}
						>
							Log In
						</button>

						<button
							className={action === "Sign Up" ? "signin-up" : "signin-up-grey"}
							onClick={() => setAction("Sign Up")}
						>
							Sign Up
						</button>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default SignUpForm;
