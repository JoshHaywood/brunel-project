import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";

const Header = () => {
	const location = useLocation();
	const [navbarState, setNavbarState] = useState(false);
	// Get the URI of the current page
	const currentPage = `/${location.pathname.split("/")[1]}`;
	// Used for the website page tab title
	const websiteTitle = "Photographing Brunel";
	// Pages shown in the navbar
	const pages = [
		{ name: "Home", path: "/" },
		{ name: "Camera", path: "/camera" },
		{ name: "About", path: "/history" },
	];
	// Updates the website page tab title
	useEffect(() => {
		document.title = `${
			pages.filter((page) => page.path === currentPage)[0] === undefined
				? `404 Page Not Found`
				: pages.filter((page) => page.path === currentPage)[0].name
		} | ${websiteTitle}`;
	});
	return (
		<nav className="w-full flex justify-end items-center p-5 gap-x-5 relative bg-quaternary">
			<button
				onClick={() => setNavbarState(!navbarState)}
				aria-label={
					navbarState ? "Close navigation menu" : "Open navigation menu"
				}
				title={navbarState ? "Close navigation menu" : "Open navigation menu"}
				className="w-8 h-8 z-50 block md:hidden"
			>
				<div
					className={`transition-all before:transition-all after:transition-all h-1 w-full  relative before:content-[''] before:h-1 before:w-full before:bg-white before:absolute before:-top-2.5 before:left-0 after:content-[''] after:h-1 after:w-full after:bg-white after:absolute after:-bottom-2.5 after:left-0 ${
						navbarState
							? `after:transform after:-translate-y-2.5 before:transform before:translate-y-2.5 after:rotate-45 before:-rotate-45 bg-quaternary`
							: "bg-white"
					}`}
				></div>
			</button>
			<div
				className={`${
					navbarState
						? `z-10 absolute w-full h-screen top-0 left-0 bg-quaternary flex flex-col justify-center items-center gap-y-10`
						: `hidden`
				} md:flex md:flex-row md:static md:w-auto md:h-auto md:gap-x-5`}
			>
				{pages.map((page) => (
					<a
						className={`text-2xl md:text-base text-white uppercase font-medium relative hover:before:w-full before:content-[''] before:h-0.5 before:transition-all before:bg-primary before:absolute before:-bottom-0.5 before:left-0 ${
							currentPage === page.path ? `before:w-full` : `before:w-0`
						}`}
						key={`navbar-link-${page.name}`}
						href={page.path}
					>
						{page.name}
					</a>
				))}
			</div>
		</nav>
	);
};

export default Header;
