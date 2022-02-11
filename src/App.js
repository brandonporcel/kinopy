import { useEffect, useRef, useState } from 'react';

import './index.css';
import postersJson from './api/posters.JSON';
import PosterItem from './components/PosterItem';
import LetterSpy from './components/LetterSpy';
import Footer from './components/Footer';
function App() {
	const wrapperRef = useRef(),
		spyLetterRef = useRef();
	const [postersData, setPostersData] = useState([]);
	const [allItems, setAllItems] = useState([]);
	// api
	useEffect(() => {
		const a = async (endpoint) => {
			try {
				const res = await fetch(endpoint);
				const data = await res.json();
				setPostersData(data);
				setAllItems(document.querySelectorAll('.poster-item-wrapper'));
			} catch (err) {
				console.log(err);
			}
		};
		a(postersJson);
	}, []);
	// intersection->letter,bground
	useEffect(() => {
		const options = {
			threshold: 0.8,
		};
		const detectIntersection = (entries) => {
			entries.forEach((el) => {
				if (el.isIntersecting) {
					spyLetterRef.current.textContent = el.target.dataset.title[0];
					wrapperRef.current.style.background = el.target.dataset.color;
				}
			});
		};
		const observer = new IntersectionObserver(detectIntersection, options);
		allItems.forEach((el) => {
			observer.observe(el);
		});
	}, [allItems]);

	return (
		<div className="wrapper" ref={wrapperRef}>
			<h1 className="title">KINOPY</h1>
			<LetterSpy spyLetterRef={spyLetterRef} />
			{postersData.map((el) => (
				<PosterItem
					id={el.id}
					background={el.background}
					title={el.title}
					key={el.id}
					poster={el.poster}
				/>
			))}
			<Footer />
		</div>
	);
}

export default App;
