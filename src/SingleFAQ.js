import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
	faChevronDown
} from "@fortawesome/free-solid-svg-icons";

const SingleFAQ = ({ question, answer }) => {
	const [showAns, setShowAns] = useState(false);
	return (
		<article
			onClick={() => (showAns ? setShowAns(false) : setShowAns(true))}
			className="grid grid-cols-4 w-full gap-y-6 border-b-2 p-6 navy-border cursor-pointer "
		>
			<p className="w-8/10 col-span-3 text-xl font-semibold">{question}</p>
			<FontAwesomeIcon
				icon={faChevronDown}
				className="text-lg self-center justify-self-end col-span-1"
			/>
			<span
				className={` ${!showAns ? "hidden" : ""} faq-answer col-span-4 text-lg`}
			>
				{answer}
			</span>
		</article>
	);
};

export default SingleFAQ;
