import React from "react";

import Conversation from "./imgs/conversation.png";

import { Link } from "react-router-dom";

import SingleFAQ from "./SingleFAQ";

const FAQs = () => {
	return (
		<main className="flex-grow pb-36">
			<h1 className="mt-12 flex items-center gap-8 justify-center">
				<span className="font-bold text-5xl navy2">FAQs</span>
				<img src={Conversation} className="w-[10%]" alt="" />
			</h1>
			<section className="w-10/12 m-auto mt-20 flex flex-col gap-4 max-w-7xl">
				<SingleFAQ
					question="Does Somali Parents only serve communities within Hammersmith and Fulham?"
					answer="No, Somali Parents was founded and is based in White City but we serve communities in neighbouting boroughs as well"
				/>
				<SingleFAQ
					question="How can I contact your support team?"
					answer="You can reach our team through the details on the Contact page."
				/>
				<SingleFAQ
					question="What services does your charity provide?"
					answer="We offer a range of services, including educational support through tuition, assistance with disability applications and grants, combating elderly isolation, and providing food and drink for the most vulnerable. All of this is made possible through the funding we achieve."
				/>
				<SingleFAQ
					question="How can I get involved as a volunteer?"
					answer="We welcome volunteers! Contact u through our Contact us page to learn more about opportunities and how to get started."
				/>
				<SingleFAQ
					question="What do i do if i need help to use PATCHES?"
					answer="If you require assistance please contact us so we can guide you step-by-step on how to use PATCHES"
				/>
				<SingleFAQ
					question="Is there a privacy policy in place for the information shared during consultations or support services?"
					answer="Yes, we prioritize your privacy. For detailed information on how we handle and protect your data, and how we ensure transparency and trust in all our services please contact us."
				/>
				<SingleFAQ
					question="How can I stay updated on upcoming events or initiatives by your charity?"
					answer="Stay connected to our website for the latest updates on our initiatives, including those supported by our funding."
				/>
				<SingleFAQ
					question="What health topics do you cover in your awareness campaigns?"
					answer="Our health campaigns cover a range of topics, including cancer screenings and general well-being. These initiatives are made possible through the funding we achieve."
				/>
				<SingleFAQ 
				question="How do I inquire about my child's progress or behavior with the school through your advocacy program?"
				answer='Reach out to us through our contact us form, and our team will guide you through the process of addressing concerns with the school. Tuition and additional support are part of our comprehensive approach.'/>
			</section>

			<p className="text-[#252b37] w-10/12 max-w-6xl text-center text-xl mt-20 m-auto">
				Is your question not answered above? {"  "}
				<Link className="underline text-gray-500" to={"/Contact"}>
					Contact Us here
				</Link>{" "}
				and we will get back to you within 2 working hours
			</p>
		</main>
	);
};

export default FAQs;
