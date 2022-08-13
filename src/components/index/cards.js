import * as React from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

const cardContent = [
	{
		heading: "Interactive Camera",
	 	text: "Access the live camera feed as part of the experimental interactive workshop",
	  	link: "camera",
	},
	{
		heading: "About",
	 	text: "Learn more about the development of the project and the history behind it.",
	  	link: "history",
	},
];

export default class Cards extends React.Component {
	render() {
		return (
			<div className="md:flex mx-5 md:mx-2 md:space-x-5 space-y-5 md:space-y-0">
				{/* Text */}
				{cardContent.map((item, index) => (
					<div className="bg-secondary shadow-md rounded-md p-5 py-7 md:w-[50%] ">
						<h4 className="font-medium text-white">{item.heading}</h4>
						<p className="my-3 text-slate-300 space-y-5">
							{item.text}
						</p>
						
						<Link to={item.link}>
							<Button 
								variant="contained"
								sx={{
									bgcolor: '#f2a900',

									':hover': {
										bgcolor: 'rgba(242, 169, 0, 0.75)',
									},
								}}
							>
								View page
							</Button>
						</Link>
					</div>
				))}
			</div>
		);
	}
}
