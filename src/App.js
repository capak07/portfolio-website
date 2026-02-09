import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/NavBar/Navbar';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop';
import Projects from './components/Projects/Projects';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Resume from './components/Resume/Resume';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/project" element={<Projects />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
