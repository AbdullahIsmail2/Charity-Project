import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
	return (
		<div className="App flex flex-col pt-20 relative">
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
};

export default Layout;
