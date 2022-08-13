import * as React from "react";

export default class Hero extends React.Component {
	render() {
		return (
			<div className="relative text-center">
				{/* Heading */}
				<h1 className="absolute top-[50%] translate-y-[-50%] left-0 right-0 mx-5 text-white font-bold z-[1]">
					Photographing Brunel at Kresen Kernow
				</h1>

				{/* Background video */}
				<video autoPlay muted loop className="w-full h-[350px] object-cover brightness-[75%]">
					{/* Object cover allows videos aspect ratio to be overridden */}
					<source src="../videos/bridge.mp4" type="video/mp4" />
					Your browser does not support videos
				</video>
			</div>
		);
	}
}
