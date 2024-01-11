import React, { useState } from "react";

import { useRef, useEffect } from "react";

import Wavinghand from "./imgs/waving-hand.png";


// test
// test2

import Care from "./imgs/care (1).png";
import Book from "./imgs/book.png";
import Inclusivity from "./imgs/collaboration.png";
import Collobaration from "./imgs/partnership.png";
import Transparency from "./imgs/display.png";
import Advocacy from "./imgs/promotion.png";

import Who from "./imgs/who (1).png";
import Question from "./imgs/question-mark.png";
import Focus from "./imgs/hands-and-scope (3).png";
import Future from "./imgs/long-term (1).png";

const AboutUs = () => {
	const bricksRef = useRef(null);

	const elementRef = useRef(null);
	const elementRef2 = useRef(null);

	const [divHeight2, setDivHeight2] = useState("a");

	useEffect(() => {
		const updateHeight = () => {
			const div = document.getElementById("sourceDiv");
			if (div) {
				const height = div.offsetHeight;
				setDivHeight2(height);
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
	useEffect(() => {
		const video = bricksRef.current;

		if (video) {
			video.playbackRate = 0.9;
		}
	}, []);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.toggle(
							"text-animation",
							entry.intersectionRatio > 0
						);
					}
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
						entry.target.classList.toggle(
							"text-animation",
							entry.intersectionRatio > 0
						);
					}
				});
			},
			{ threshold: 0.1 }
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
		<main className="flex-grow ">
			<section className="w-4/5 m-auto flex mder:flex-row flex-col custom-height items-center pt-20 mder:pt-0 gap-24 mder:gap-16">
				<div className="mder:w-[60%] self-center flex flex-col gap-8 text-center">
					<h1 className="navy2 text-5xl sm:text-6xl md:text-7xl font-bold">
						About Us
					</h1>
					<p className="text-2xl 		">
						A voluntary organization committed to supporting individuals facing
						socio-economic challenges
					</p>
				</div>
				<img src={Wavinghand} className="justify-self-center" />
			</section>
			<section className="grid lg:grid-cols-2 gap-10 w-11/12 m-auto max-w-7xl mt-24">
				<article className="m-auto flex flex-col gap-10 mb-20 mt-0 border-2 border-[#252b37] rounded-xl py-12 px-8 navy2 relative shadow-2xl overflow-hidden cursor pointer">
					<div className="flex items-center gap-12">
						<img src={Who} className="w-1/5" />
						<h1 className="text-4xl font-semibold flex-grow">Who We are</h1>
					</div>
					<p className="z-10 text-xl ">
						Welcome to Somali Parents, a beacon of compassion and action
						uplifting ethnic minority individuals. Through dedicated funding
						initiatives, we secure resources for a tangible impact. Our
						commitment surpasses financial aid; tutors provide personalized
						attention, ensuring academic success for children. Navigating
						bureaucratic processes, we assist with crucial applications,
						including disability benefits, alleviating family burdens.
						Recognizing the fundamental role of nutrition, we extend our reach
						to provide nourishing food for those facing financial challenges,
						promoting a healthy, balanced diet. Join us in our compassionate
						journey, where every individual has the opportunity to thrive.
					</p>
				</article>
				<article className="m-auto flex flex-col gap-10 mb-20 mt-0 border-2 border-[#252b37] rounded-xl py-12 px-8 navy2 relative shadow-2xl overflow-hidden cursor pointer">
					<div className="flex items-center gap-12">
						<img src={Question} className="w-1/5" />
						<h1 className="text-4xl font-semibold flex-grow">Why We Started</h1>
					</div>
					<p className="z-10 text-xl ">
						The inception of our charity project is rooted in a deep-seated
						passion for making a difference. Witnessing the challenges faced by
						many individuals in the community, we were inspired to take action
						and be a catalyst for positive change. The realization that even
						small efforts can lead to significant improvements fueled our
						determination to start this charity. Our founders, driven by empathy
						and a sense of social responsibility, envisioned a platform that
						could address systemic issues and create opportunities for a
						brighter future. We believe that everyone deserves a chance to lead
						a fulfilling life, and it is this belief that propels us to work
						tirelessly towards building a more inclusive and compassionate
						world.
					</p>
				</article>
				<article className="m-auto flex flex-col gap-10 mb-20 mt-0 border-2 border-[#252b37] rounded-xl py-12 px-8 navy2 relative shadow-2xl overflow-hidden cursor pointer">
					<div className="flex items-center gap-12">
						<img src={Focus} className="w-1/5" />
						<h1 className="text-4xl font-semibold flex-grow">Focus</h1>
					</div>
					<p className="text-xl ">
						At Somali Parents, our unwavering commitment centers on empowering
						ethnic minorities through targeted initiatives. We allocate
						dedicated funding, ensuring a tangible impact beyond financial aid.
						Educational support is paramount; tutors provide personalized
						attention, fostering academic success for children. Our dedication
						extends to navigating bureaucratic complexities, aiding with crucial
						applications such as disability benefits. Acknowledging the
						importance of nutrition, we broaden our reach to provide nourishing
						food for those facing financial challenges, promoting a healthy,
						balanced diet. Join us in our focused mission to uplift and empower,
						creating a community where every individual thrives.
					</p>
				</article>
				<article className="m-auto flex flex-col gap-10 mb-20 mt-0 border-2 border-[#252b37] rounded-xl py-12 px-8 navy2 relative shadow-2xl overflow-hidden cursor pointer">
					<div className="flex items-center gap-12">
						<img src={Future} className="w-1/5" />
						<h1 className="text-4xl font-semibold flex-grow">Future Plans</h1>
					</div>
					<p className="text-xl ">
						As we reflect on our journey and the impact we've made so far, we're
						excited to share our vision for the future. Our commitment to our
						society remains unwavering, and we have ambitious plans to expand
						our reach and deepen our impact. In the coming years, we aim to
						launch new programs, collaborate with other charities and extend our
						geographic reach. We envision a future where our charity project
						plays an even more significant role in creating positive change and
						uplifting the lives of those we serve. Through innovation,
						collaboration, and a steadfast dedication to our mission, we aspire
						to bring about transformative outcomes that resonate far beyond our
						current efforts. Stay tuned as we embark on this inspiring journey,
						and together, let's shape a future filled with hope, opportunity,
						and lasting impact.
					</p>
				</article>
			</section>

			<section className="white navy2 py-16 pb-24 px-12 rounded-lg my-20 w-11/12 m-auto">
				<h1 className="mb-16 text-center text-3xl sm:text-5xl font-semibold">
					Our Core Values
				</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-16 gap-x-12">
					<article className="flex flex-col gap-6 lg:gap-8 navy-border rounded-2xl border-2 cursor-pointer p-8 ">
						<div className="flex items-center gap-4 ">
							<img src={Care} className="w-1/6" />
							<h3 className="text-xl  font-semibold flex-grow ">
								Empathy & Compassion
							</h3>
						</div>
						<p
							id="sourceDiv"
							style={{ height: `${divHeight2}px` }}
							className="text-[#252b37]"
						>
							We embody compassion, translating empathy into action.
							Understanding the unique struggles of those in low-income
							communities, our programs aim to bridge gaps and create positive
							change, fostering a culture of care and kindness in diverse
							environments.
						</p>
					</article>
					<article className="flex flex-col gap-6 lg:gap-8 navy-border rounded-2xl border-2 cursor-pointer p-8">
						<div className="flex items-center gap-4 ">
							<img src={Book} className="w-1/6" />
							<h3 className="text-xl  font-semibold flex-grow ">
								Education & Awareness
							</h3>
						</div>
						<p className="text-[#252b37]" style={{ height: `${divHeight2}px` }}>
							We're dedicated to illuminating paths through education. Our
							programs not only provide knowledge but ignite awareness. By
							empowering minds, we sow the seeds of lasting change, cultivating
							a community that values learning as a catalyst for transformation.
						</p>
					</article>
					<article className="flex flex-col gap-6 lg:gap-8 navy-border rounded-2xl border-2 cursor-pointer p-8">
						<div className="flex items-center gap-4 ">
							<img src={Inclusivity} className="w-1/6" />
							<h3 className="text-xl  font-semibold flex-grow ">
								Inclusvity & Equality
							</h3>
						</div>
						<p
							className="text-[#252b37] "
							style={{ height: `${divHeight2}px` }}
						>
							Our foundation rests on inclusivity and equality. Celebrating
							diversity, we cultivate an environment where every voice is
							honored. Committed to equality, we strive for a world free from
							bias, where opportunities are boundless for all.
						</p>
					</article>
					<article className="flex flex-col gap-6 lg:gap-8 navy-border rounded-2xl border-2 cursor-pointer p-8">
						<div className="flex items-center gap-4 ">
							<img src={Collobaration} className="w-1/6" />
							<h3 className="text-xl  font-semibold flex-grow ">
								Collobaration & Partnership
							</h3>
						</div>
						<p className="text-[#252b37]" style={{ height: `${divHeight2}px` }}>
							Collaboration is our cornerstone, forging powerful partnerships
							that amplify impact. Together, we create a collective force,
							fostering resilience and sustainable change. Our collaborative
							spirit transforms challenges into opportunities, making a lasting
							difference
						</p>
					</article>
					<article className="flex flex-col gap-6 lg:gap-8 navy-border rounded-2xl border-2 cursor-pointer p-8">
						<div className="flex items-center gap-4 ">
							<img src={Transparency} className="w-1/6" />
							<h3 className="text-xl  font-semibold flex-grow ">
								Transparency & Accountability
							</h3>
						</div>
						<p className="text-[#252b37]" style={{ height: `${divHeight2}px` }}>
							We uphold transparency and accountability as pillars of trust.
							Open communication and responsible actions define our commitment.
							With transparency, we build trust, ensuring every endeavor
							reflects our dedication to accountability and ethical practices.
						</p>
					</article>
					<article className="flex flex-col gap-6 lg:gap-8 navy-border rounded-2xl border-2 cursor-pointer p-8">
						<div className="flex items-center gap-4 ">
							<img src={Advocacy} className="w-1/6" />
							<h3 className="text-xl  font-semibold flex-grow ">Advocacy</h3>
						</div>
						<p className="text-[#252b37]" style={{ height: `${divHeight2}px` }} >
							Advocacy is our rallying cry for justice. We champion causes,
							amplify voices, and work tirelessly to create meaningful change.
							With advocacy as our guide, we stand resolute in our pursuit of a
							more equitable world.
						</p>
					</article>
				</div>
			</section>
		</main>
	);
};

export default AboutUs;
