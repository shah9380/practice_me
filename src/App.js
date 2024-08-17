import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
              <header>header</header>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Link to="/">Home</Link>} />
                <Route path='*' element={<h1>everywhere</h1>} />
              </Routes>
              <footer>footer</footer> 
    </BrowserRouter>  
  );
}

export default App;
