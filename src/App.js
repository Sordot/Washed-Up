import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from './pages/Layout';
import Home from './pages/Home';
import Team from './pages/Team';
import FAQ from './pages/FAQ';
import Apply from './pages/Apply';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="/team" element={<Team />}/>
          <Route path="/apply" element={<Apply />}/>
          <Route path="/faq" element={<FAQ />}/>
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
