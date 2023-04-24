function randomIntFromInterval(min: number, max: number) {
	// min and max included
	return Math.floor(Math.random() * (max - min + 1) + min);
}
export const ImageURL = (): string => {
	const image = [
		'../../public/quan-short-nam-10f22dps001-burnt-oliver-_3__1.jpg',
		'../../public/d0cb5fc42fb3103f8f18c1c97e416f14.jpg',
		'../../public/ao-polo-nam-10f22pol015_covert_green_3__1.jpg',
	];
	// const random = Math.floor(Math.random() * 100) + 1;
	const random = Math.floor(Math.random() * 3);
	return image[random];
};
