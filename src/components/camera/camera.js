import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";

const Camera = () => {
	const ytPlayerOptions = {
		playerVars: {
			autoplay: 1,
			controls: 0,
		},
	};
	const [showPlayer, setShowPlayer] = useState(false);
	useEffect(() => {
		const showPlayer = () => {
			setShowPlayer(true);
		};
		setTimeout(showPlayer, 1000);
	});
	return (
		<div className="flex flex-col justify-center items-center min-h-screen px-10">
			{/* <h1 className="text-center mb-8">It's your turn</h1> */}
			<div
				className={`mb-8 font-bold text-4xl w-full text-center xl:w-1/2 bg-gray-200 border-2 border-black ${
					showPlayer ? "block" : "hidden"
				}`}
			>
					<div className="relative h-0 pt-25px pb-56.25%">
					{/*<YouTube
						iframeClassName="absolute top-0 left-0 w-full h-full"					
						videoId="jfKfPfyJRdk"					
						opts={ytPlayerOptions}
			/>*/}
			<YouTube
						iframeClassName="absolute top-0 left-0 w-full h-full"						
						videoId="yGCrdgzSBbc"
						opts={ytPlayerOptions}
			/>
				</div>
			</div>
			<h1 className={`${!showPlayer ? "block" : "hidden"} text-black`}>
				Loading
			</h1>
			{/* <p className="text-2xl font-normal w-full xl:w-2/4 text-center mb-8 text-black">
				Stand infront of the camera and press the button to take a photo.
			</p> */}
			{/* <p className="text-2xl font-normal w-full xl:w-2/4 text-center mb-8">
				Stand infront of the camera and press the button to take a photo. You
				are allowed to take 3 photos before your turn ends.
			</p> */}
			{/* <p className="text-2xl font-normal w-full xl:w-2/4 text-center mb-8">
				Photos Left: <span className="font-bold">2</span>
			</p> */}
			{/* <div className="flex gap-5 flex-col-reverse xl:flex-row">
				<button className="text-2xl font-normal bg-gray-200 px-16 py-3 border-2 border-black hover:bg-gray-300">
					Finish
				</button>
				<button className="text-2xl font-normal text-black bg-gray-200 px-16 py-3 border-2 border-black hover:bg-gray-300">
					Take Photo
				</button>
			</div> */}
		</div>
	);
};

export default Camera;
