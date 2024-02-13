import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBars,
	faGift,
	faCircleQuestion,
	faCircleInfo,
	faPhone,
	faHouse,
	faBullseye,
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [subMenuOpen, setSubMenuOpen] = useState(false);

	const hamburgerClick = () => {
		if (menuOpen) {
			setMenuOpen(false);
		} else setMenuOpen(true);
	};

	const menuItemClicked = () => {
		setMenuOpen(false);
	};

	const subMenuClick = () => {
		subMenuOpen ? setSubMenuOpen(false) : setSubMenuOpen(true);
	};
	return (
		<header className="navy fixed left-0 top-0 right-0 h-20 lg:flex lg:items-center lg:justify-between z-20">
			<div className="navy fixed left-0 top-0 right-0 h-20 lg:flex lg:items-center lg:justify-between z-20 max-w-[1400px] m-auto">
				<section className="flex justify-between items-center  px-6 lg:px-10  lg:w-1/8">
					<Link
						to={"/"}
						className="flex items-center gap-2 text-white text-2xl font-semibold self-center mt-5 lg:mt-0"
					>
						{/* <FontAwesomeIcon icon={faGift} className="text-xl" />
						<p>Logo</p> */}
						<h1>Somali Parents</h1>
					</Link>
					<FontAwesomeIcon
						onClick={hamburgerClick}
						icon={faBars}
						className="text-2xl text-white mt-5 lg:hidden"
					/>
				</section>

				<section
					className={`navy absolute right-0 left-0 transition-[all] ease-linear duration-300 z-40 ${
						menuOpen ? "opacity-100" : "opacity-0"
					} ${
						menuOpen ? "top-20" : "top-12"
					} text-white lg:static lg:opacity-100
				 ${!menuOpen && window.innerWidth < 1024 ? "pointer-events-none" : ""}`}
				>
					<nav className="flex flex-col text-xl font-semibold px-6 py-4 gap-2 lg:flex-row lg:gap-8 ">
						<Link
							to={"/"}
							onClick={() => setMenuOpen(false)}
							className=" h-12 flex items-center gap-3 "
						>
							<FontAwesomeIcon icon={faHouse} />
							<p>Home</p>
						</Link>
						<Link
							to={"/AboutUs"}
							onClick={() => setMenuOpen(false)}
							className=" h-12 flex items-center gap-3"
						>
							<FontAwesomeIcon icon={faCircleInfo} />
							About Us
						</Link>
						<Link
							to={"/WhatWeDo"}
							className="flex items-center justify-between h-12 relative lg:gap-4"
							onClick={() => setMenuOpen(false)}
						>
							<p className="flex items-center gap-3 flex-grow ">
								<FontAwesomeIcon icon={faBullseye} />
								What We Do
							</p>
						</Link>
						<Link
							to={"/FAQs"}
							className={` h-12 flex items-center gap-3 transition-all duration-300 ${
								subMenuOpen ? "mt-52 lg:mt-0" : "mt-0 lg:mt-0"
							} lg:mt-0"`}
							onClick={() => setMenuOpen(false)}
						>
							<FontAwesomeIcon icon={faCircleQuestion} />
							FAQs
						</Link>
						<Link
							to={"/Contact"}
							className=" h-12 flex items-center gap-3 "
							onClick={() => setMenuOpen(false)}
						>
							<FontAwesomeIcon icon={faPhone} />
							Contact
						</Link>
					</nav>
				</section>
			</div>
		</header>
	);
};

export default Header;
