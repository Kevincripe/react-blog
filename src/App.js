import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const title = 'Welcome to the new Blog';
  const likes = 50;

  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
      <Routes>
        <Route path="/" element={<Home />}></Route>

      </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
