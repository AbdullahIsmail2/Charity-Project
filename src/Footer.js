import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="w-full navy text-white text-sm flex items-center justify-between p-4  ">
			<Link
				to={"/Contact"}
				className="hover:underline"
			>
				<p>Contact Us</p>
			</Link>
			<section>
				<p>&copy; 2023 All Rights Reserved</p>
				<p>Company Number: 13733549</p>
			</section>
		</footer>
	);
};

export default Footer;
