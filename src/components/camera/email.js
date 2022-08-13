import React, { useEffect, useState } from "react";
import SelectedIcon from "../../images/selected";
import EmptySlotImage from "../../images/empty-slot-image.png";

const Email = () => {
	// Dummy Data
	const images = [EmptySlotImage, EmptySlotImage, EmptySlotImage];
	const [imageData, setImageData] = useState();
	useEffect(() => {
		const imageData = [
			images.map((image, index) => {
				return { id: index, src: image, selected: false };
			}),
		];
		setImageData(...imageData);
	}, []);
	const selectImageHandler = (imageId) => {
		let newImageData = [...imageData];
		newImageData.forEach((image, index) => {
			if (image.id === imageId) {
				newImageData[index].selected = !newImageData[index].selected;
			}
		});
		setImageData(newImageData);
	};
	return (
		<div className="flex flex-col justify-center items-center min-h-screen px-10">
			<h1 className="text-center mb-8">
				Choose the photos you want to receive
			</h1>
			<div className="flex flex-row gap-5">
				{typeof imageData !== "undefined"
					? imageData.map((image) => (
							<div
								key={`${image.src}-${image.id}`}
								className={`relative flex justify-center items-center ${
									imageData.filter((img) => img.id === image.id)[0].selected
										? "after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-green-300 after:opacity-40 after:z-10 after:pointer-events-none"
										: ""
								}`}
							>
								{imageData.filter((img) => img.id === image.id)[0].selected && (
									<SelectedIcon className="absolute z-20 text-green-700 pointer-events-none h-5/6" />
								)}
								<img
									className={`max-h-72 cursor-pointer relative `}
									alt={`Option ${image.id}`}
									src={image.src}
									onClick={() => selectImageHandler(image.id)}
								/>
							</div>
					  ))
					: "Loading"}
			</div>
		</div>
	);
};

export default Email;
