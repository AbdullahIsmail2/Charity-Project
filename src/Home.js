import React from "react";
import { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faDiagramProject,
	faCalendarDays,
	faHandHoldingHeart,
	faQuoteLeft,
	faQuoteRight,
} from "@fortawesome/free-solid-svg-icons";

import Arrow from "./imgs/arrow.jpg";
import Maths from './imgs/pexels-pixabay-301943.jpg'

const Home = () => {
	const elementRef = useRef(null);
	const elementRef2 = useRef(null);
	// const elementRef3 = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					entry.target.classList.toggle(
						"slide-up",
						entry.intersectionRatio > 0
					);
				});
			},
			{ threshold: 0.1 }
		);

		if (elementRef.current) {
			observer.observe(elementRef.current);
		}

		// Cleanup the observer when the component unmounts
		return () => {
			observer.disconnect();
		};
	}, []);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("reveal");
					}
				});
			},
			{ threshold: 0 }
		);

		if (elementRef2.current) {
			observer.observe(elementRef2.current);
		}

		// Cleanup the observer when the component unmounts
		return () => {
			observer.disconnect();
		};
	}, []);

	// useEffect(() => {
	// 	const observer = new IntersectionObserver(
	// 		(entries) => {
	// 			entries.forEach((entry) => {
	// 				entry.target.classList.toggle(
	// 					"slide-up",
	// 					entry.intersectionRatio > 0
	// 				);
	// 			});
	// 		},
	// 		{ threshold: 0.2 }
	// 	);

	// 	if (elementRef3.current) {
	// 		observer.observe(elementRef3.current);
	// 	}

	// 	// Cleanup the observer when the component unmounts
	// 	return () => {
	// 		observer.disconnect();
	// 	};
	// }, []);
	return (
		<main className="flex-grow py-16">
			<section className=" w-4/5 m-auto flex flex-col gap-5 relative z-10 slide-in-left h-[400px]">
				<h1 className="font-semibold text-3xl z-10 p-3 text-center">
					Empowering Lives, Easing Burdens: Together, We Transform Challenges
					into Opportunites
				</h1>
				<h4 className="text-md z-10 p-3 text-center">
					Bridging Gaps in Education and Livelihoods for Lasting Impact.
				</h4>
			{/* <img src={Maths} className="m-auto max-w-xl absolute top-0 bottom-0 h-full w-full object-cover" alt="" /> */}
			</section>


			<section className="flex flex-col w-10/12 m-auto text-center mt-24 gap-6 ">
				<h2>Our Work</h2>
				<h4 className="text-3xl font-semibold font-markazi">
					Facing rising living costs, thousands in poverty lack access to
					education. We strive to break barriers, ensuring every child has a
					chance for a brighter future.
				</h4>
				<p>
					In the face of poverty's harsh realities and the escalating cost of
					living, our mission is clear: to uplift lives through vital support,
					foster resilience, and empower individuals with education. We stand as
					a beacon of hope, offering a pathway for those under immense pressure,
					providing the tools and resources needed to break free from the cycle
					of hardship.
				</p>
				<div
					className="flex flex-col justify-between gap-12 mt-12 sm:flex-row"
					ref={elementRef}
				>
					<div className="flex flex-col gap-4">
						<FontAwesomeIcon icon={faDiagramProject} className="text-5xl" />
						<h3 className="text-4xl font-markazi">40</h3>
						<p className="text-xl">Projects funded</p>
					</div>
					<div className="flex flex-col gap-4">
						<FontAwesomeIcon icon={faHandHoldingHeart} className="text-5xl" />
						<h3 className="text-4xl font-markazi">1500</h3>
						<p className="text-xl">lives Changed</p>
					</div>
					<div className="flex flex-col gap-4">
						<FontAwesomeIcon icon={faCalendarDays} className="text-5xl" />
						<h3 className="text-4xl font-markazi">365 days</h3>
						<p className="text-xl">Year round support</p>
					</div>
				</div>
				<button className="  border-[#252b37] border-2 max-w-[300px] w-2/3 m-auto text-[navy2] p-6 font-semibold text-xl mt-6">
					Learn about our projects{" "}
				</button>
			</section>

			<section
				ref={elementRef2}
				id="testimonials"
				className="mt-24 flex flex-col gap-8 items-center scroll-mt-24 z-10 text-center"
			>
				<h2 className="text-3xl font-bold sm:text-5xl">Heartfelt Testimonials</h2>
				<div className="flex flex-col gap-4 items-center w-10/12">
					<article className="light-navy text-white p-12 rounded-3xl relative">
						<FontAwesomeIcon
							icon={faQuoteLeft}
							className="fa-solid fa-quote-left absolute text-4xl top-4 left-3"
						/>
						<p className="text-xl sm:text-2xl pl-2">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
							soluta quam a, iure minus veritatis. Odit sed dolorem sint cum?
						</p>
						<FontAwesomeIcon
							icon={faQuoteRight}
							className=" absolute text-4xl bottom-4 right-3 "
						/>
					</article>
					<p className="self-end text-gray-400 text-xl italic sm:text-2xl">
						&mdash; Individual Name & Age
					</p>
				</div>
				<div className="flex flex-col gap-4 items-center w-10/12">
					<article className="light-navy text-white p-12 rounded-3xl relative">
						<FontAwesomeIcon
							icon={faQuoteLeft}
							className="fa-solid fa-quote-left absolute text-4xl top-4 left-3"
						/>
						<p className="text-xl sm:text-2xl pl-2">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
							soluta quam a, iure minus veritatis. Odit sed dolorem sint cum?
						</p>
						<FontAwesomeIcon
							icon={faQuoteRight}
							className=" absolute text-4xl bottom-4 right-3 "
						/>
					</article>
					<p className="self-end text-gray-400 text-xl italic sm:text-2xl">
						&mdash; Individual Name & Age
					</p>
				</div>
				<div className="flex flex-col gap-4 items-center w-10/12">
					<article className="light-navy text-white p-12 rounded-3xl relative">
						<FontAwesomeIcon
							icon={faQuoteLeft}
							className="fa-solid fa-quote-left absolute text-4xl top-4 left-3"
						/>
						<p className="text-xl sm:text-2xl pl-2">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
							soluta quam a, iure minus veritatis. Odit sed dolorem sint cum?
						</p>
						<FontAwesomeIcon
							icon={faQuoteRight}
							className=" absolute text-4xl bottom-4 right-3 "
						/>
					</article>
					<p className="self-end text-gray-400 text-xl italic sm:text-2xl">
						&mdash; Individual Name & Age
					</p>
				</div>
			</section>
		</main>
	);
};

export default Home;
