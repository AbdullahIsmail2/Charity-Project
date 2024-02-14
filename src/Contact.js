import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faLocationPin,
	faEnvelope,
	faPhone,
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

const Contact = () => {
	return (
		<main className="flex-grow flex items-center">
			<div
				className="w-11/12  mx-auto my-8 mder:my-0 flex flex-col mder:flex-row mder:rounded-2xl myshadow relative max-w-6xl max-height[90%]
			
			before:h-[30px] before:w-[30px] before:hidden mder:before:bg-[#252B37] before:absolute before:right-[25%] before:-translate-x-[25%] before:top-1/2 before:-translate-y-1/mder:before:left-[50%] mder:before:-translate-x-1/2 mder:before:top-[52px] before:rotate-45"
			>
				<section className="flex flex-col gap-4 p-12 mder:w-1/2 rounded-r-2xl rounded-l-2xl">
					<h1 className="navy2 text-3xl font-semibold mb-4">
						Let's get in touch
					</h1>
					<p className="navy2 text-lg">
						Have a question, suggestion, or want to volunteer? We'd love to hear
						from you! Our team is here to help. Reach out to us, and let's make
						a difference together.{" "}
					</p>

					<section className="text-lg flex flex-col gap-6 my-8">
						<div className="flex gap-4 items-center">
							<FontAwesomeIcon icon={faLocationPin} className="text-2xl mr-1" />
							<p>
								Office 4, India Way, White City Community Centre, London, W127QT
							</p>
						</div>
						<div className="flex gap-4 items-center ">
							<FontAwesomeIcon icon={faEnvelope} className="text-2xl " />
							<p>info@hfspa.org</p>
						</div>
						<div className="flex gap-4 items-center ">
							<FontAwesomeIcon icon={faPhone} className="text-2xl" />
							<p>0207 101 3426</p>
						</div>
					</section>
					<section className="text-gray-500 italic">
						<span>
							At HFAVSO, we value and respect your privacy. By reaching out to
							us, you acknowledge and agree that we may contact you in response
							to your message. Rest assured, we take appropriate measures to
							protect your data and ensure its confidentiality.
						</span>
					</section>
				</section>
				<form
					className="flex-grow navy p-12 text-white flex flex-col gap-4 rounded-l-2xl rounded-r-2xl"
					action="https://formsubmit.co/abdullahmusa2003@gmail.com"
					method="POST"
				>
					<h1 className="text-3xl font-semibold mb-4 ">Contact Us</h1>

					<div>
						<input
							type="text"
							placeholder="Name"
							className="bg-transparent border p-3 pl-5 rounded-full border-white w-full mb-2 text-lg placeholder:text-white"
							name="Name"
							required
						/>
					</div>
					<div>
						<input
							type="email"
							placeholder="Email"
							className="bg-transparent border p-3 pl-5 rounded-full border-white w-full mb-2 text-lg placeholder:text-white"
							name="Email"
							required
						/>
					</div>

					<div>
						<textarea
							cols="20"
							rows="8"
							placeholder="Message"
							className="bg-transparent border p-4 pl-5 rounded-[30px] border-white w-full text-lg placeholder:text-white overflow-hidden"
							name="Message"
							required
						></textarea>
					</div>
					<button
						type="Submit"
						className="border self-start py-4 text-xl rounded-full w-1/2 max-w[400px] min-w[150px] cursor-pointer "
					>
						Submit
					</button>
				</form>
			</div>
		</main>
	);
};

export default Contact;
