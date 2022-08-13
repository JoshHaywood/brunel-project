import * as React from "react";
import { Link } from "react-router-dom";

const pagesColumn = [
	{ name: "Home", path: "/" },
	{ name: "Camera", path: "/camera" },
	{ name: "About", path: "/history" },
];

const affiliatesColumn = [
	{ image: "../images/falmouth-logo.png", link: "https://www.falmouth.ac.uk/" },
	{
		image: "../images/kresen-kernow-logo.png",
		link: "https://kresenkernow.org/",
	},
];

export default class Footer extends React.Component {
	render() {
		return (
			<footer className="left-0 bottom-0 w-full bg-quaternary">
				<div className="flex flex-col md:flex-row justify-between m-auto space-y-7 md:space-y-0 py-4 px-1 w-4/6">
					{/* Pages column */}
					<div className="flex flex-col text-center md:text-left space-y-5">
						<h5 className="font-medium text-slate-400">Pages</h5>
						{pagesColumn.map((item) => (
							<Link
								key={`${item.name}-footer-link`}
								className="text-slate-400 hover:text-slate-500 hover:underline"
								to={item.path}
							>
								{item.name}
							</Link>
						))}
					</div>

					{/* Affiliates columns */}
					<div className="flex flex-col text-center items-center md:text-left md:items-start mt-1 md:mt-0 pb-1 md:pb-0">
						<h5 className="font-medium text-slate-400">Affiliates</h5>
						{affiliatesColumn.map((item) => (
							<a key={`${item.link}`} href={item.link}>
								<img alt={item.link} src={item.image} className="w-[170px]" />
							</a>
						))}
					</div>
				</div>

				{/* Footnote */}
				<div className="flex py-2 w-10/12 md:w-4/6 m-auto justify-between border-t-2 border-slate-400">
					<p className="mx-2">
						© 
						<a className="text-slate-300" href="https://www.joshhaywood-portfolio.com/"> Josh Haywood</a>,
						<a className="text-slate-300" href="https://www.dantcho.com/"> Yordan Hristov</a>,
						<a className="text-slate-300" href="https://www.louiswright.co.uk/"> Louis Wright</a>,
						<a className="text-slate-300" href="https://dannydaley.co.uk"> Danny Daley</a> - <span className="text-slate-300">{new Date().getFullYear()}</span>
					</p>

					<div id="backToTop" className="flex flex-row space-x-1 items-center text-slate-400">
						{/* Container used in place of span as CSS doesnt effect span correctly */}
						<button
							className="text-slate-300"
							onClick={() => {
								document.documentElement.scrollTop = 0;
							}}
						>
							Back to top
						</button>
						<p className="text-slate-300">↑</p>
					</div>
				</div>
			</footer>
		);
	}
}
