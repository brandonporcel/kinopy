import { Routes, Route, HashRouter } from 'react-router-dom';
import Kinopy from './components/Kinopy/Kinopy';
import Kalli from './components/Kalli/Kalli';
function App() {
	return (
		<HashRouter>
			<Routes>
				<Route exact path="/" element={<Kinopy />} />
				<Route exact path="/kalli" element={<Kalli />} />
			</Routes>
		</HashRouter>
	);
}

export default App;
