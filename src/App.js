import React from "react";

import Home from "./Home";
import AboutUs from "./AboutUs";
import FAQs from "./FAQs";
import { Routes, Route } from "react-router-dom";
// import Missing from "./Missing";
import Layout from "./Layout";
import Contact from "./Contact";
import WhatWeDo from "./WhatWeDo";
import ScrollToTop from "./ScrollToTop";


const App = () => {
	return (
		<>
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="/AboutUs" element={<AboutUs />} />
					<Route path="/FAQs" element={<FAQs />} />
					{/* <Route path="/News" element={<News />} /> */}
					<Route path="/WhatWeDo" element={<WhatWeDo />} />
					<Route path="/Contact" element={<Contact />} />
					{/* <Route path="*" element={<Missing />} /> */}
				</Route>
			</Routes>
		</>
	);
};

export default App;
