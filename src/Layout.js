import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const Layout = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [subMenuOpen, setSubMenuOpen] = useState(false);
	return (
		<div className="App flex flex-col pt-20 relative">
			<Header
				menuOpen={menuOpen}
				setMenuOpen={setMenuOpen}
				subMenuOpen={subMenuOpen}
				setSubMenuOpen={setSubMenuOpen}
			/>
			<Outlet />
			<Footer
        setMenuOpen={setMenuOpen}
      />
		</div>
	);
};

export default Layout;
