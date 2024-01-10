import React from "react";

import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import Learning from "./imgs/learning-picture-2_auto_x2 (1).jpg";
import Elderly from "./imgs/pexels-mustak-jaman-12982208.jpg";
import Classroom from "./imgs/pexels-rdne-stock-project-8499580.jpg";
import Doctor from "./imgs/pexels-karolina-grabowska-4021775.jpg";

import HF from "./imgs/h&f logo.jpg";
import HUC from "./imgs/hucLogo.webp";
import HFGiving from "./imgs/HFGiving.png";
import NWLICS from "./imgs/NWLICS.png";

import { Link } from "react-router-dom";

import { useState } from "react";

import Application from "./imgs/profiles.png";
import MagGlass from "./imgs/loupe.png";
import Pie from "./imgs/graph.png";

const WhatWeDo = () => {
	const [showProjects, setShowProjects] = useState(false);

	const handleProjectsBtn = () => {
		showProjects ? setShowProjects(false) : setShowProjects(true);

		const sectionElement = document.getElementById("scrollto");

		if (sectionElement && showProjects === true) {
			const offset = 120; // Adjust this value based on your layout and styling
			const topPos = sectionElement.offsetTop - offset;

			document.documentElement.scrollTo({
				top: topPos,
				behavior: "smooth",
			});
		}
	};
	return (
		<main className="flex-grow ">
			<h1 className="text-5xl font-bold navy2 mt-16  text-center">
				What We Do
			</h1>
			<section className=" w-10/12 sm:w-11/12 m-auto  flex flex-col sm:flex-row items-center gap-24 sm:gap-4 mt-24 mb-52 sm:my-52 max-w-6xl 2xl:pb-12 pb-16">
				<article className="w-1/2 sm:w-1/3 grid grid-rows-[60%_15%_25%] gap-4">
					<img src={MagGlass} className="w-1/2 m-auto mb-4" />
					<h3 className="text-3xl font-semibold text-center">Identification</h3>
					<p className="text-center navy2 text-md ">
						Recognize needs, prioritize & tailor aid for funding preperation
					</p>
				</article>

				<article className="w-1/2 sm:w-1/3 grid grid-rows-[60%_15%_25%] gap-4">
					<img src={Application} className="w-1/2 m-auto mb-4" />
					<h3 className="text-3xl font-semibold text-center">Application</h3>
					<p className="text-center navy2 text-md  ">
						Plan funding, present compelling cases, secure vital financial
						support.
					</p>
				</article>

				<article className="w-1/2 sm:w-1/3 grid grid-rows-[60%_15%_25%] gap-4">
					<img src={Pie} className="w-1/2 m-auto mb-4" />
					<h3 className="text-3xl font-semibold text-center">Allocation</h3>
					<p className="text-center navy2 text-md ">
						Distribute resources strategically and efficiently to maximize the
						positive impacts.
					</p>
				</article>
			</section>

			<section className=" w-full p-12 relative max-w-7xl m-auto">
				<h2 className="text-center text-5xl font-bold navy2 mb-24">
					A Breakdown
				</h2>
				<VerticalTimeline lineColor="#252b38">
					<VerticalTimelineElement
						className="vertical-timeline-element--education border-b-0"
						iconStyle={{ background: "#252b37", color: "#fff" }}
					>
						<h4 className="text-2xl">1. Identification Of Issues</h4>
						<p className="">
							We cultivate an authentic connection with the communities we
							serve, actively engaging in open communication. Through dialogues
							with individuals, we listen attentively to diverse needs and
							concerns. This ongoing conversation enables us to understand the
							unique challenges faced by the community.
						</p>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						className="vertical-timeline-element--education border-b-0"
						iconStyle={{ background: "#252b37", color: "#fff" }}
					>
						<h4 className="text-2xl">2. Tailored Initiatives Planning</h4>
						<p className="">
							Armed with insights from community engagement, we embark on
							meticulous planning. Every initiative is carefully crafted to
							address the identified challenges effectively. By tailoring
							strategies to specific needs, we ensure our efforts are both
							impactful and meaningful.
						</p>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						className="vertical-timeline-element--education border-b-0"
						iconStyle={{ background: "#252b37", color: "#fff" }}
					>
						<h4 className="text-2xl">3. Funding Application</h4>
						<p className="">
							With well-defined plans in place, we navigate the process of
							securing funding. Our applications articulate the strategic and
							well-thought-out nature of our initiatives. This phase marks a
							crucial step in bringing our plans to life.
						</p>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						className="vertical-timeline-element--education border-b-0"
						iconStyle={{ background: "#252b37", color: "#fff" }}
					>
						<h4 className="text-2xl">4. Efficient Fund Distribution</h4>
						<p className="">
							Securing funding is just the beginning. We implement distribution
							methods with precision and efficiency, maximizing the impact of
							the resources at our disposal. This stage is where the plans
							materialize into tangible support for the community.
						</p>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						className="vertical-timeline-element--education border-b-0"
						iconStyle={{ background: "#252b37", color: "#fff" }}
					>
						<h4 className="text-2xl">
							5. Ongoing Support, Feedback and Impact Assessment
						</h4>
						<p className="">
							Our commitment doesn't end with fund distribution. We remain
							actively engaged, providing continuous support. This involves
							adapting our efforts to address evolving challenges, ensuring a
							sustained positive impact on the community's well-being. Regularly
							seeking feedback and conducting impact assessments are integral to
							our approach. This iterative process allows us to refine our
							initiatives, ensuring they align with the community's evolving
							needs. By staying responsive, we contribute to lasting positive
							transformation.
						</p>
					</VerticalTimelineElement>
				</VerticalTimeline>
			</section>

			<section
				id="projects"
				className="mt-48 mb-12 w-10/12 m-auto flex flex-col max-w-7xl"
			>
				<h1 className="text-center text-5xl font-bold navy2 mb-12">Projects</h1>
				<p className="navy2 text-xl text-center mb-20">
					Witness below the tangible effects of kindness, from empowered
					communities to lives forever touched. Each project is a ripple of
					hope, creating a wave of positive impact. Explore the stories of
					transformation and be a part of the change we're bringing to our
					community."
				</p>
			</section>

			<section
				id="scrollto"
				className="flex flex-col gap-16 lg:gap-24 w-11/12 m-auto max-w-7xl"
			>
				<article className="flex flex-col mder:flex-row gap-8 p-8 xs:p-12 border bg-slate-100 rounded-3xl">
					<div className="flex flex-col gap-8">
						<h3 className="text-2xl ">
							Supplementary Classes For Year 10 and 11 Students
						</h3>
						<p className="">
							We recognize that students from low-income backgrounds often face
							additional challenges in their educational journey. The
							supplmentary classes we provide are a powerhouse of
							transformation. We're not just offering additional lessons; we're
							igniting a passion for learning. Tenacious minds from grades 10
							and 11 delve into core subjects like Maths and Science, guided by
							seasoned educators. But we go beyond the classroom—working
							hand-in-hand with parents, we're creating a seamless bridge
							between school and home. It's not just about improvement; it's
							about unleashing potential. With qualified teachers and unwavering
							commitment, this project is a beacon for academic excellence and
							empowered futures."
						</p>
						<p>Got an enquiry? Interested in registering your child?</p>
						<Link to={"/Contact"} className="underline -mt-4">
							Let us know here
						</Link>
					</div>
					<img
						src={Learning}
						className="mder:w-1/2  object-cover rounded-3xl"
					/>
				</article>
				<article className="flex flex-col mder:flex-row gap-8 p-8 xs:p-12 border bg-slate-100 rounded-3xl">
					<div className="flex flex-col gap-8">
						<h3 className="text-2xl ">Support for the isolated elderly</h3>
						<p className="">
							Somali parents have volunteers who work with elderly people to
							support them by making telephone calls and or home visits, to
							identify their needs and help them accordingly. There are many of
							elderly who lives alone and isolated who need support for example
							to advocate for them and raise their concerns to the authorities
							or to socialise and to be engaged with the outside world. Recently
							we helped Mr Ahmed, a 75 years old to get a care package from the
							local council. If you know an elderly person who you might think
							needs support, please let us know. Fill out the form and we will
							get in touch with you
						</p>
						<p>
							If you know an elderly person who you might think needs support,
							please let us know. Fill out the form and we will get in touch
							with you
						</p>
						<Link to={"/Contact"} className="underline -mt-4">
							Let us know here
						</Link>
					</div>
					<img src={Elderly} className="mder:w-1/2  object-cover rounded-3xl" />
				</article>
				<article
					className={`flex flex-col mder:flex-row gap-8 p-8 xs:p-12 border bg-slate-100 rounded-3xl ${
						showProjects ? "block slide-up" : "hidden slide-up"
					}`}
				>
					<div className="flex flex-col gap-8">
						<h3 className="text-2xl ">Advocating for Parents Program</h3>
						<p className="">
							In our relentless pursuit of fostering a thriving educational
							environment, we proudly stand as advocates for parents. Our
							mission transcends the conventional, as we actively bridge the gap
							between parents and schools, providing unwavering support to
							address concerns related to their child's education, behavior, and
							overall progress. Through our commitment to championing parental
							needs, we serve as a catalyst for open communication,
							collaboration, and resolution. In every challenge, we see an
							opportunity for positive change, ensuring that parents not only
							voice their concerns but also witness tangible results. Together,
							we navigate the intricate landscape of education, empowering
							parents to actively engage in their child's journey with
							confidence and assurance.
						</p>
						<p>
							If you have any issues with your child’s school or have concerns
							about your child’s education progress or behaviour and need
							support please contact us.
						</p>
						<Link to={"/Contact"} className="underline -mt-4">
							Let us know here
						</Link>
					</div>
					<img
						src={Classroom}
						className="mder:w-1/2   object-cover rounded-3xl"
					/>
				</article>
				<article
					className={`flex flex-col mder:flex-row gap-8 p-8 xs:p-12 border bg-slate-100 rounded-3xl ${
						showProjects ? "block slide-up" : "slide-up-2 hidden"
					}`}
				>
					<div className="flex flex-col gap-8">
						<h3 className="text-2xl ">
							Raising Awareness on Welfare Benefits, Health, and Online Services
							for our Community
						</h3>
						<p className="">
							As a dedicated charity, we extend our mission beyond education to
							empower our users holistically. We strive to illuminate the path
							to well-being, shedding light on often overlooked opportunities
							like welfare benefits and disability grants that could immensely
							impact their lives. Our commitment extends to crucial health
							topics, advocating for awareness around cancer screenings.
							Additionally, we guide them on utilizing innovative solutions such
							as Patches, an online GP service, providing swift access to
							prescriptions. In our pursuit of holistic empowerment, we stand as
							beacons, ensuring our users not only receive vital information but
							also seize every opportunity for a healthier and more fulfilling
							life.
						</p>
						<p>
							Dont know what government support your eligble for? Need
							assistance for online GP services? Contact us and we will sort
							that out for you.
						</p>
						<Link to={"/Contact"} className="underline -mt-4">
							Let us know here
						</Link>
					</div>

					<img
						src={Doctor}
						className="mder:w-1/2  object-cover rounded-3xl focus:border-inherit active:border-inherit"
					/>
				</article>
				<button
					onClick={() => handleProjectsBtn()}
					className="mx-auto border-2 navy-border rounded-md max-w-[300px] text-[navy2] px-12 py-6 font-semibold text-xl mb-24 shadow-lg"
				>
					{showProjects ? "See Less" : "See More"}
				</button>
			</section>

			<section className=" w-10/12 m-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-20 items-center py-20 my-24">
				<h1 className="text-center text-5xl font-bold navy2 md:col-span-2">
					Our Funders
				</h1>
				<p className="md:col-span-2 navy2 text-xl text-center mb-8">
					At Somali Parents, our impactful work is made possible by the generous
					support of our four main funders. These visionary partners share our
					commitment to making a positive difference in the lives of those we
					serve. Their dedication to social impact and community well-being
					empowers us to pursue our mission with unwavering determination.
					Through their financial contributions, HFGiving, Hammersmith United
					Charities, H&F Council, and NWLICS play a vital role in helping us
					address pressing challenges and create lasting change. Together, we
					form a powerful alliance, united by a common goal of building a better
					and more compassionate city. Feel free to click on their logo to direct you to their respective websites.
				</p>
				<a href="https://hfgiving.org.uk/" className="w-1/2 md:w-2/3 m-auto">
					<img src={HFGiving} className="max-h-[150px]" alt="" />
				</a>
				<a
					href="https://hamunitedcharities.org.uk/"
					className="w-1/2 md:w-2/3 m-auto "
				>
					<img src={HUC} className="max-h-[150px] m-auto" alt="" />
				</a>
				<a href="https://www.lbhf.gov.uk/" className="w-1/2 md:w-2/3 m-auto ">
					<img src={HF} className="max-h-[150px] p-4 m-auto" alt="" />
				</a>
				<a
					href="https://www.nwlondonicb.nhs.uk/"
					className="w-1/2 md:w-2/3 m-auto"
				>
					<img src={NWLICS} className="max-h-[150px] m-auto" alt="" />
				</a>
			</section>
		</main>
	);
};

export default WhatWeDo;
