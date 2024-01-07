import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Hobbies from './components/pages/Hobbies';
import Projects from './components/pages/Projects';
import Background from './components/pages/Background'

function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Routes>
      <Route path='/' exact Component={Home} />
      <Route path='/hobbies' exact Component={Hobbies} />
      <Route path='/projects' exact Component={Projects} />
      <Route path='/background' exact Component={Background} />
    </Routes>
    </Router>
    </>
  );
}

export default App;
