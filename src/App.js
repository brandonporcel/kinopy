import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Kinopy from './components/Kinopy/Kinopy';
import Kalli from './components/Kalli/Kalli';
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Kinopy />} />
				<Route path="/kalli" element={<Kalli />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
