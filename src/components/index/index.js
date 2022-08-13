import * as React from "react";

import Hero from "./hero";
import Cards from "./cards";
import Camera from "./camera";
import Preamble from "./preamble";

export default class Index extends React.Component {
	render() {
		return (
			<>
				<Hero />

				<Preamble />
				
				<div className="px-5 max-w-[1000px] mx-auto py-16 space-y-16">
					<Camera />
					<Cards />
				</div>
			</>
		);
	}
}
