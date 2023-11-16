import React from "react";

import Home from "./Home";
import AboutUs from "./AboutUs";
import FAQs from "./FAQs";
import News from "./News";
import Advocacy from "./Advocacy";
import Networking from "./Networking";
import CommunityResearch from "./CommunityResearch";
import CapacityBuilding from "./CapacityBuilding";
import { Routes, Route } from "react-router-dom";
import Missing from "./Missing";
import Layout from "./Layout";
import Contact from "./Contact";

const App = () => {

	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="/AboutUs" element={<AboutUs />} />
				<Route path="/FAQs" element={<FAQs />} />
				<Route path="/News" element={<News />} />
				<Route path="/Advocacy" element={<Advocacy />} />
				<Route path="/Networking" element={<Networking />} />
				<Route path="/Contact" element={<Contact />} />
				<Route path="/CommunityResearch" element={<CommunityResearch />} />
				<Route path="/CapacityBuilding" element={<CapacityBuilding />} />
				<Route path="*" element={<Missing />} />
			</Route>
		</Routes>
	);
};

export default App;
