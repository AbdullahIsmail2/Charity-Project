import React, { useState } from "react";
import { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faDiagramProject,
	faCalendarDays,
	faHandHoldingHeart,
	faQuoteLeft,
	faQuoteRight,
} from "@fortawesome/free-solid-svg-icons";

import Maths from "./imgs/maths.jpg";
import Food from "./imgs/food.png";
import Water from "./imgs/water.png";
import Healthcare from "./imgs/healthcare.png";
import Education from "./imgs/education.png";
import Residence from "./imgs/home.png";
import Social from "./imgs/people.png";

import Group from "./imgs/group.png";
import Involvement from "./imgs/fighting (2).png";
import Support from "./imgs/support.png";

import Cancer from './imgs/cancer.png'

import { Link } from "react-router-dom";

const Home = () => {
	const [buttonHeight, setButtonHeight] = useState("s");
	const [divHeight, setDivHeight] = useState("aa");


	useEffect(() => {
		// Scroll to the top of the page on component mount (page refresh)
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const updateHeight = () => {
			const button = document.getElementById("sourceButton");
			if (button) {
				const height = button.offsetHeight;
				setButtonHeight(height);
			}

			const div = document.getElementById("sourceDiv");
			if (div) {
				const height = div.offsetHeight;
				setDivHeight(height);
			}
		};

		// Initial height update
		updateHeight();

		// Update height whenever the window is resized
		window.addEventListener("resize", updateHeight);

		return () => {
			// Remove the event listener when the component is unmounted
			window.removeEventListener("resize", updateHeight);
		};
	}, []);

	const elementRef = useRef(null);
	const elementRef2 = useRef(null);

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

	return (
		<main className="flex-grow pb-16">
			<section className="w-5/5 m-auto flex flex-col  relative z-10 slide-in-left min-h-screen text-white justify-center">
				<h1 className="font-bold text-4xl  z-10 p-3 text-center ">
					{/* Empowering Lives, Easing Burdens: Together, We Transform Challenges */}
					{/* into Opportunites */}
				</h1>
				<h4 className="text-2xl z-10 p-3 text-center font-semibold">
					{/* Bridging Gaps in Education and Livelihoods for Lasting Impact. */}
				</h4>
				<img
					src={Cancer}
					// className="max-w-100vw h-full min-w-full object-cover absolute -mt-40 object-custom xs:object-center"
					className=" xl:w-[58%] lg:w-[67%] left-1/2 absolute -translate-x-1/2"
					alt=""
				/>
			</section>

			<h4 className="text-4xl md:text-5xl font-semibold font-markazi w-10/12 m-auto text-center mt-24 mb-48 max-w-7xl ">
				Breaking barriers to education and transforming lives, Somali Parents
				offers a range of essential services, including access to nutritious
				meals, education, community support, and much more. We strive to ensure
				that everyone, despite facing rising living costs, has the opportunity
				for a brighter future through comprehensive assistance.
			</h4>

			<section className="w-[95%] m-auto text-center flex flex-col md:flex-row mb-24 items-center gap-32 md:gap-2 max-w-7xl ">
				<div className="w-4/5 md:w-1/3 after:h-1/4 relative md:after:absolute after:bg-[#252b37] after:right-0 after:bottom-0 after:top-1/2 after:-translate-y-1/2  after:w-[2px] flex flex-col px-2 md:px-4 lg:px-6  ">
					<h1 className="text-3xl md:text-5xl font-semibold navy2 mb-4">
						Who We Are
					</h1>
					<img
						src={Group}
						alt=""
						className="w-[40%] md:w-1/2 m-auto sm:p-4 md:p-0 md:mb-4 mder:p-2 lg:p-4 xl:p-6"
					/>

					<p
						id="sourceDiv"
						style={{ height: `${divHeight}px` }}
						className="mb-8 flex items-center"
					>
						Committed advocates for community well-being, shaping brighter
						futures through sustainable initiatives.
					</p>
					<Link to={"/Aboutus"} className="">
						<button
							id="sourceButton"
							style={{ height: `${buttonHeight}px` }}
							className="navy2 border navy-border py-4 px-2 text-lg rounded-md  max-w-sm w-[90%] md:w-full"
						>
							Learn More About Somali Parents
						</button>
					</Link>
				</div>
				<div className="w-4/5 md:w-1/3 after:h-1/4 relative md:after:absolute after:bg-[#252b37] after:right-0 after:bottom-0 after:top-1/2 after:-translate-y-1/2  after:w-[2px] flex flex-col px-2 md:px-4 lg:px-6">
					<h1 className="text-3xl font-semibold navy2 mb-4">What We Do</h1>
					<img
						src={Support}
						alt=""
						className="w-[40%] md:w-1/2 m-auto  sm:p-10 p-5 md:mb-4 md:p-4 mder:p-6 lg:mder:p-8 xl:p-10"
					/>
					<p
						style={{ height: `${divHeight}px` }}
						className="flex items-center mb-8"
					>
						Fueling positive change through vital services. Uplifting
						communities for lasting well-being.
					</p>
					<Link to={"/whatwedo/#projects"} className="">
						<button
							className="navy2 border navy-border py-4 px-2 text-lg rounded-md  max-w-sm w-[90%] "
							style={{ height: `${buttonHeight}px` }}
						>
							More On What We Do
						</button>
					</Link>
				</div>
				<div className="w-4/5 md:w-1/3  flex flex-col px-2 md:px-4 lg:px-6">
					<h1 className="text-3xl font-semibold navy2 mb-4">Get Involved</h1>
					<img
						src={Involvement}
						alt=""
						className="w-[40%] md:w-1/2  m-auto sm:p-10 p-5 md:mb-4 md:p-4 mder:p-6 lg:p-8 xl:p-10"
					/>
					<p
						style={{ height: `${divHeight}px` }}
						className="mb-8 flex items-center"
					>
						Unite for impactful change! Volunteer, donate, or spread awareness.
					</p>
					<Link to={"/Contact"} className="">
						<button
							className="navy2 border navy-border py-4 px-2 text-lg rounded-md  max-w-sm w-[90%] "
							style={{ height: `${buttonHeight}px` }}
						>
							Join Us And Make A Change
						</button>
					</Link>
				</div>
			</section>

			<section className="flex flex-col gap-24 text-left py-28 w-11/12 m-auto mb-24 mt-0 max-w-7xl">
				<h1 className="navy2 text-4xl font-semibold text-center ">
					Our Key Services
				</h1>
				<section className="grid grid-cols1 md:grid-cols-2 gap-x-12 gap-y-24">
					<div className=" flex gap-4">
						<img
							src={Food}
							className="self-center w-5/12 inline-block"
							alt=""
						/>
						<div className="relative w-[10px] flex items-center">
							<div className="w-[3px] h-1/2 absolute top-1/2 -translate-y-1/2 self-center navy rounded-full"></div>
						</div>
						<div className="flex flex-col gap-2">
							<p className="navy2 font-semibold text-4xl font-markazi">
								Healthy Food
							</p>
							<span className="navy2">
								Fueling communities with wholesome goodness: Our charity
								provides nutritious meals, promoting well-being and food
								security for all.
							</span>
						</div>
					</div>
					<div className=" flex gap-4">
						<img
							src={Water}
							className="self-center w-5/12 inline-block"
							alt=""
						/>
						<div className="relative w-[10px] flex items-center">
							<div className="w-[3px] h-1/2 absolute top-1/2 -translate-y-1/2 self-center navy rounded-full"></div>
						</div>
						<div className="flex flex-col gap-2">
							<p className="navy2 font-semibold text-4xl font-markazi">Water</p>
							<span className="navy2">
								Quenching community thirst: Our charity delivers safe, clean
								water, a lifeline for health and resilience in every
								neighborhood.
							</span>
						</div>
					</div>
					<div className=" flex gap-4">
						<img
							src={Healthcare}
							className="self-center w-5/12 inline-block"
							alt=""
						/>
						<div className="relative w-[10px] flex items-center">
							<div className="w-[3px] h-1/2 absolute top-1/2 -translate-y-1/2 self-center navy rounded-full"></div>
						</div>
						<div className="flex flex-col gap-2">
							<p className="navy2 font-semibold text-4xl font-markazi">
								Health Support
							</p>
							<span className="navy2">
								Empowering health journeys: Our charity offers support for
								disability grants and various health initiatives, fostering
								inclusivity and well-being.
							</span>
						</div>
					</div>
					<div className=" flex gap-4">
						<img
							src={Education}
							className="self-center w-5/12 inline-block"
							alt=""
						/>
						<div className="relative w-[10px] flex items-center">
							<div className="w-[3px] h-1/2 absolute top-1/2 -translate-y-1/2 self-center navy rounded-full"></div>
						</div>
						<div className="flex flex-col gap-2">
							<p className="navy2 font-semibold text-4xl font-markazi">
								Education
							</p>
							<span className="navy2">
								Educating minds, igniting futures. Our services empower through
								knowledge, shaping bright, resilient communities for sustained
								progress.
							</span>
						</div>
					</div>
					<div className=" flex gap-4">
						<img
							src={Residence}
							className="self-center w-5/12 inline-block"
							alt=""
						/>
						<div className="relative w-[10px] flex items-center">
							<div className="w-[3px] h-1/2 absolute top-1/2 -translate-y-1/2 self-center navy rounded-full"></div>
						</div>
						<div className="flex flex-col gap-2">
							<p className="navy2 font-semibold text-4xl font-markazi">
								Housing Support
							</p>
							<span className="navy2">
								Promoting stability through housing support. Guiding individuals
								to suitable, accessible homes, ensuring dignity and security in
								every living situation.
							</span>
						</div>
					</div>
					<div className=" flex gap-4">
						<img
							src={Social}
							className="self-center w-5/12 inline-block"
							alt=""
						/>
						<div className="relative w-[10px] flex items-center">
							<div className="w-[3px] h-1/2 absolute top-1/2 -translate-y-1/2 self-center navy rounded-full"></div>
						</div>
						<div className="flex flex-col gap-2">
							<p className="navy2 font-semibold text-4xl font-markazi">
								Social Care
							</p>
							<span className="navy2">
								Building strong communities through social care. Our initiatives
								prioritize connection, support, and resilience, enhancing lives
								with compassion and understanding
							</span>
						</div>
					</div>
				</section>
			</section>

			<section className="light-navy text-white px-20 pt-16 mder:pt-28 flex flex-col text-center gap-8 ">
				<div className="flex flex-col justify-between gap-20 md:gap-12  mt-12 mder:flex-row max-w-6xl mder:m-auto mder:gap-40 lg:gap-48  ">
					<div className="flex flex-col gap-4 lg:gap-6">
						<FontAwesomeIcon icon={faDiagramProject} className="text-5xl" />
						<h3 className="text-4xl font-markazi">15+</h3>
						<p className="text-xl">Projects executed</p>
					</div>
					<div className="flex flex-col gap-4 lg:gap-6">
						<FontAwesomeIcon icon={faHandHoldingHeart} className="text-5xl" />
						<h3 className="text-4xl font-markazi">1000+</h3>
						<p className="text-xl">Lives Changed</p>
					</div>
					<div className="flex flex-col gap-4 lg:gap-6">
						<FontAwesomeIcon icon={faCalendarDays} className="text-5xl" />
						<h3 className="text-4xl font-markazi">365 days</h3>
						<p className="text-xl">Year round support</p>
					</div>
				</div>
				<Link
					to={"/whatwedo/#projects"}
					className="border-white border-2 max-w-[300px] md:w-2/3 m-auto text-[navy2] p-6 font-semibold text-xl mt-20 mb-24 shadow-lg"
				>
					Learn about our projects{" "}
				</Link>
			</section>

			<section
				ref={elementRef2}
				id="testimonials"
				className="mt-24 flex flex-col gap-8 items-center scroll-mt-24 z-10 text-center max-w-7xl m-auto"
			>
				<h2 className="text-3xl font-bold sm:text-5xl mb-8">
					Heartfelt Testimonials
				</h2>
				<div className="flex flex-col gap-4 items-center w-10/12">
					<article className="light-navy text-white p-12 rounded-3xl relative ">
						<FontAwesomeIcon
							icon={faQuoteLeft}
							className="fa-solid fa-quote-left absolute text-4xl top-4 left-3"
						/>
						<p className="text-xl sm:text-2xl pl-2">
							Thanks to Somali Parents, my daughter got into her dream school,
							and things are going great. For the past two years, they've been
							rockstars, helping her with the right education and health stuff.
							Their support isn't just a boost; it's like having a whole squad
							ensuring she's on the path to success. I can't thank Somali
							Parents enough for making a real difference in my daughter's life
						</p>
						<FontAwesomeIcon
							icon={faQuoteRight}
							className=" absolute text-4xl bottom-4 right-3 "
						/>
					</article>
					<p className="self-end text-gray-400 text-xl italic sm:text-2xl mb-8">
						&mdash; Bushra, 40
					</p>
				</div>
				<div className="flex flex-col gap-4 items-center w-10/12">
					<article className="light-navy text-white p-12 rounded-3xl relative">
						<FontAwesomeIcon
							icon={faQuoteLeft}
							className="fa-solid fa-quote-left absolute text-4xl top-4 left-3"
						/>
						<p className="text-xl sm:text-2xl pl-2">
							Huge thanks and gratitude to Somali Parents! My daughter nailed
							her science GCSE exam in 2023, scoring excellent grades. This
							achievement is a testament to the invaluable extra lessons and
							unwavering support provided by Somali Parents. Their dedication
							has been the key ingredient in her success story, and I couldn't
							be more thankful for the impactful role they've played in her
							academic journey.
						</p>
						<FontAwesomeIcon
							icon={faQuoteRight}
							className=" absolute text-4xl bottom-4 right-3 "
						/>
					</article>
					<p className="self-end text-gray-400 text-xl italic sm:text-2xl mb-8">
						&mdash; Noora, 40
					</p>
				</div>
				<div className="flex flex-col gap-4 items-center w-10/12">
					<article className="light-navy text-white p-12 rounded-3xl relative">
						<FontAwesomeIcon
							icon={faQuoteLeft}
							className="fa-solid fa-quote-left absolute text-4xl top-4 left-3"
						/>
						<p className="text-xl sm:text-2xl pl-2">
							Somali Parents supported my brother to get the support and care he
							needs. My brother quality of life has improved so much and he is
							much happier
						</p>
						<FontAwesomeIcon
							icon={faQuoteRight}
							className=" absolute text-4xl bottom-4 right-3 "
						/>
					</article>
					<p className="self-end text-gray-400 text-xl italic sm:text-2xl">
						&mdash; Halima, 60
					</p>
				</div>
			</section>
		</main>
	);
};

export default Home;
