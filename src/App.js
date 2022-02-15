import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Kinopy from './components/Kinopy/Kinopy';
import Molly from './components/Molly/Molly';
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Kinopy />} />
				<Route path="/molly" element={<Molly />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
