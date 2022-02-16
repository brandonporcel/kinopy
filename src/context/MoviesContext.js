import { createContext, useEffect, useState } from 'react';
const MoviesContext = createContext();
const movies = [
	{
		name: 'dazed and confused',
		title: 'Dazed & confused',
		img: './images-2/dazed.jpg',
		phrase: "You Just Gotta Keep Livin' Man. L-I-V-I-N.",
	},
	{
		name: 'the grand Budapest',
		title: 'Grand Budapest',
		img: './images-2/grand.jpg',
		phrase: 'Did He Just Throw My Cat Out Of The Window?',
	},
	{
		name: 'royal',
		title: 'The Royal Brothers',
		img: './images-2/royal.png',
		phrase: 'Hell of a damn grave. Wish it were mine. ',
	},
];
const MoviesProvider = ({ children }) => {
	const [postersIndex, setPostersIndex] = useState(0);
	const [selectedMovie, setSelectedMovie] = useState(movies[postersIndex]);

	const [posterPreviewIndex, setPosterPreviewIndex] = useState(
		postersIndex + 1
	);
	const [selectedNextMoviePreview, setSelectedNextMoviePreview] = useState(
		movies[posterPreviewIndex]
	);

	console.log(posterPreviewIndex, 'el index del q se v');
	const selectNewPoster = (index, array, next = true) => {
		const condition = next ? index < array.length - 1 : index > 0;
		const nextIndex = next
			? condition
				? postersIndex + 1
				: 0
			: condition
			? index - 1
			: array.length - 1;
		setSelectedMovie(array[nextIndex]);
		setPostersIndex(nextIndex);
	};
	const selectNewPosterPreview = (index, array, next = true) => {
		const condition = next ? index < array.length - 1 : index > 0;
		const nextIndex = next
			? condition
				? index + 1
				: 0
			: condition
			? index - 1
			: array.length - 1;
		setPosterPreviewIndex(nextIndex);
		setSelectedNextMoviePreview(array[nextIndex]);
	};
	const previous = () => {
		selectNewPoster(postersIndex, movies, false);
		selectNewPosterPreview(posterPreviewIndex, movies, false);
	};
	const next = () => {
		selectNewPoster(postersIndex, movies);
		selectNewPosterPreview(posterPreviewIndex, movies);
	};

	const data = { selectedMovie, next, selectedNextMoviePreview, previous };

	return (
		<MoviesContext.Provider value={data}> {children} </MoviesContext.Provider>
	);
};

export default MoviesContext;
export { MoviesProvider };
