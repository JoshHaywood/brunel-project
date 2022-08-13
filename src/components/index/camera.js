import * as React from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

export default class Camera extends React.Component {
	render() {
		return (
			<div className="border-2 p-3 pb-8 bg-gray-300 shadow-lg rounded-md space-y-8">
				{/* Video (Replace with camera feed) */}
				<video autoPlay muted loop className="h-full object-cover brightness-75">
					{/* Object cover allows videos aspect ratio to be overridden */}
					<source src="../videos/bridge.mp4" type="video/mp4" /> 
					Your browser does not support videos
				</video>
				
				<div className="mx-auto text-center">
					<h1 className="font-semibold mb-2 z-50 text-quaternary text-3xl">
						Live Camera View
					</h1>
					<h4 className="font-medium mb-6 z-50 text-gray-600 text-xl">
						Direct from Kresen Kernow workshop
					</h4>

					<Link to="/camera">
						<Button
							variant="contained"
							sx={{
								bgcolor: '#4da3b3',
								width: { xs: '55%', sm: '30%' },

								':hover': {
									bgcolor: 'rgba(77, 163, 179, 0.75)',
								},
							}}
						>
							View stream
						</Button>
					</Link>
				</div>
			</div>
		);
	}
}
