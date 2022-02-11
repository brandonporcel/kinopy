import { useEffect, useRef, useState } from 'react';

import './index.css';
import postersJson from './api/posters.JSON';
import PosterItem from './components/PosterItem';
function App() {
	const wrapperRef = useRef();
	const [postersData, setPostersData] = useState([]);
	const [allItems, setAllItems] = useState([]);

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
	useEffect(() => {
		const options = {
			threshold: 0.8,
		};
		const detectIntersection = (entries) => {
			entries.forEach((el) => {
				if (el.isIntersecting)
					wrapperRef.current.style.background = el.target.dataset.color;
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
			{postersData.map((el) => (
				<PosterItem
					id={el.id}
					background={el.background}
					title={el.title}
					key={el.id}
					poster={el.poster}
				/>
			))}
		</div>
	);
}

export default App;
