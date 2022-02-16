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
	const previous = () => {
		const condition = postersIndex > 0;
		const previousIndex = condition ? postersIndex - 1 : movies.length - 1;

		setSelectedMovie(movies[previousIndex]);
		setPostersIndex(previousIndex);

		const previewCondition = posterPreviewIndex > 0;
		const nextPreviewIndex = previewCondition ? posterPreviewIndex - 1 : 2;
		setPosterPreviewIndex(nextPreviewIndex);
		setSelectedNextMoviePreview(movies[nextPreviewIndex]);
	};
	const next = () => {
		const condition = postersIndex < movies.length - 1;
		const nextIndex = condition ? postersIndex + 1 : 0;
		setPostersIndex(nextIndex);
		setSelectedMovie(movies[nextIndex]);

		const previewCondition = posterPreviewIndex < movies.length - 1;
		const nextPreviewIndex = previewCondition ? posterPreviewIndex + 1 : 0;
		setPosterPreviewIndex(nextPreviewIndex);
		setSelectedNextMoviePreview(movies[nextPreviewIndex]);
	};

	const data = { selectedMovie, next, selectedNextMoviePreview, previous };

	return (
		<MoviesContext.Provider value={data}> {children} </MoviesContext.Provider>
	);
};

export default MoviesContext;
export { MoviesProvider };
