import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBars,
	faGift,
	faChevronDown,
	faCircleQuestion,
	faCircleInfo,
	faNewspaper,
	faPhone,
	faHouse,
	faBullseye,
	faLayerGroup,
	faMagnifyingGlass,
	faUserTie,
	faHandshakeAngle,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [subMenuOpen, setSubMenuOpen] = useState(false);

	const hamburgerClick = () => {
		if (menuOpen) {
			setMenuOpen(false);
			setSubMenuOpen(false);
		} else setMenuOpen(true);
	};

	const triangleClick = () => {
		subMenuOpen ? setSubMenuOpen(false) : setSubMenuOpen(true);
	};
	return (
		<header className="navy fixed left-0 top-0 right-0 h-20 lg:flex lg:items-center lg:justify-between">
			<section className="flex justify-between items-center  px-6 lg:px-10  lg:w-1/8">
				<p className="flex items-center gap-2 text-white text-2xl font-semibold self-center mt-5 lg:mt-0">
					<FontAwesomeIcon
						icon={faGift}
						className="text-xl"
					/>
					Logo
				</p>
				<FontAwesomeIcon
					onClick={hamburgerClick}
					icon={faBars}
					className="text-2xl text-white mt-5 lg:hidden"
				/>
			</section>

			<section
				className={`navy absolute right-0 left-0 transition-[all] ease-linear duration-300 ${
					menuOpen ? "opacity-100" : "opacity-0"
				} ${
					menuOpen ? "top-20" : "top-12"
				} text-white lg:static lg:opacity-100`}
			>
				<nav className="flex flex-col text-xl font-semibold px-6 py-4 gap-2 lg:flex-row lg:gap-8">
					<a href="" className=" h-12 flex items-center gap-3">
						<FontAwesomeIcon icon={faHouse} />
						Home
					</a>
					<a href="" className=" h-12 flex items-center gap-3">
						<FontAwesomeIcon icon={faCircleInfo} />
						About Us
					</a>
					<button className="flex items-center justify-between h-12 relative lg:gap-4">
						<p className="flex items-center gap-3">
							<FontAwesomeIcon icon={faBullseye} />
							What We Do
						</p>
						<FontAwesomeIcon
							icon={faChevronDown}
							onClick={triangleClick}
							className=""
						/>
						<div
							className={`flex flex-col navy pl-8 py-4 gap-4 absolute transition-[all] duration-300 right-0 left-0 ${
								subMenuOpen ? "top-12" : "top-8"
							} ${
								subMenuOpen ? "opacity-100" : "opacity-0"
							} lg:-right-12 lg:-left-8 lg:pl-6 py-6`}
						>
							<a href="" className="h-8 flex items-center gap-3">
								<FontAwesomeIcon icon={faUserTie} />
								Advocacy
							</a>
							<a href="" className="h-8 flex items-center gap-3">
								<FontAwesomeIcon icon={faLayerGroup} />
								Capacity Building
							</a>
							<a href="" className="h-8 flex items-center gap-3">
								<FontAwesomeIcon icon={faMagnifyingGlass} />
								Community Research
							</a>
							<a href="" className="h-8 flex items-center gap-3">
								<FontAwesomeIcon icon={faHandshakeAngle} />
								Networking
							</a>
						</div>
					</button>
					<a
						href=""
						className={` h-12 flex items-center gap-3 transition-all duration-300 ${
							subMenuOpen ? "mt-52 lg:mt-0" : "mt-0 lg:mt-0"
						} lg:mt-0"`}
					>
						<FontAwesomeIcon icon={faCircleQuestion} />
						FAQs
					</a>
					<a href="" className=" h-12 flex items-center gap-3 ">
						<FontAwesomeIcon icon={faNewspaper} />
						News
					</a>
					<a href="" className=" h-12 flex items-center gap-3 lg:hidden">
						<FontAwesomeIcon icon={faPhone} />
						Contact
					</a>
				</nav>
			</section>
		</header>
	);
};

export default Header;
