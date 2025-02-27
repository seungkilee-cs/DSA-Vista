import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DataStructure from './pages/DataStructure';
import Algorithm from './pages/Algorithm';
import ThemeToggle, { ThemeProvider } from './components/ThemeToggle';
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app">
          <ThemeToggle />
          <div className="main-content">
            <Routes>
              <Route path="/DSA-Vista/" element={<Home />} />
              <Route path="/DSA-Vista/data-structure/:name" element={<DataStructure />} />
              <Route path="/DSA-Vista/algorithm/:name" element={<Algorithm />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
