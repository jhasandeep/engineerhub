import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from "./components/Home";
import Footer from "./components/Footer"

import './App.css';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Header/>

        <Routes>
          <Route exact path='/' element={<Home/>}/>
          
        </Routes>
        <Footer/>
      </Router>
      

      
      
    </div>
  );
}

export default App;
