import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { FaTimes } from "react-icons/fa";
import SignUpForm from "../Pages/SignUpForm";
import NotFound from "../Pages/NotFound";

function Navbar() {
	const navRef = useRef();

	const [active, setActive] = useState(0);

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<h1 id="logo">NAME</h1>
			<nav ref={navRef}>
				<ul>
					<li>
						<Link
							to="/"
							id="navLink1"
							className={active === 0 ? "active" : ""}
							onClick={() => setActive(0)}
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							to="/about"
							id="navLink2"
							className={active === 1 ? "active" : ""}
							onClick={() => setActive(1)}
						>
							About
						</Link>
					</li>
					<li>
						<Link
							to="/services"
							id="navLink3"
							className={active === 2 ? "active" : ""}
							onClick={() => setActive(2)}
						>
							Services
						</Link>
					</li>
					<li>
						<Link
							to="/contact"
							id="navLink4"
							className={active === 3 ? "active" : ""}
							onClick={() => setActive(3)}
						>
							Contact
						</Link>

						<Link
							to="/SignUpForm"
							id="getstarted"
							className={active === 5 ? "active" : ""}
							onClick={() => setActive(5)}
						>
							GET STARTED
						</Link>
					</li>
				</ul>

				<button
					className="nav-btn  nav-close-btn"
					onClick={() => {
						showNavbar();
						hideButton();
					}}
				>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<img src="./images/menubar.png" alt="menubar-image" width="50" />
			</button>
		</header>
	);
}

export default Navbar;
