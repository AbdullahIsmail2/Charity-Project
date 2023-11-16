import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPhoneVolume,
	faEnvelope,
	faMapPin,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Footer = ({ setMenuOpen }) => {
	return (
		<footer className="w-full navy text-white text-sm flex items-center justify-between p-4  ">
			<Link
				to={"/Contact"}
				className="hover:underline"
				onClick={() => setMenuOpen(false)}
			>
				Contact Us
			</Link>
			<section>
				<p>&copy; 2023 All Rights Reserved</p>
				<p>Company Number: 12280079</p>
			</section>
		</footer>
	);
};

export default Footer;
