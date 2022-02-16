import { createContext, useEffect, useState } from 'react';
const MoviesContext = createContext();
const movies = [
	{
		name: 'Black and White',
		title: 'Black and White',
		img: './images-2/girl.jpg',
		phrase: 'Black and White makes everything better.',
	},
	{
		name: 'Design Value',
		title: 'Design Value',
		img: './images-2/boy.jpg',
		phrase: 'Design adds value faster than it adds costs.',
	},
	// {
	// 	name: 'Dazed And Confused',
	// 	title: 'Dazed & confused',
	// 	img: './images-2/dazed.jpg',
	// 	phrase: "You Just Gotta Keep Livin' Man. L-I-V-I-N.",
	// },

	// {
	// 	name: 'tThe grand Budapest',
	// 	title: 'Grand Budapest',
	// 	img: './images-2/grand.jpg',
	// 	phrase: 'Did He Just Throw My Cat Out Of The Window?',
	// },
	{
		name: '	The Royal Tenenbaums',
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

	const selectNewPoster = (index, array, next = true) => {
		const condition = next ? index < array.length - 1 : index > 0;
		const nextIndex = next
			? condition
				? index + 1
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
	const selectSpecificPoster = (num) => {
		setPostersIndex(num);
	};
	const data = {
		selectedMovie,
		next,
		selectedNextMoviePreview,
		previous,
		movies,
		postersIndex,
		selectSpecificPoster,
	};

	return (
		<MoviesContext.Provider value={data}> {children} </MoviesContext.Provider>
	);
};

export default MoviesContext;
export { MoviesProvider };
