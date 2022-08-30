import { BrowserRouter, Navigate, Route, Routes, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/home/home';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} exact/>

          <Route path="*" element={<Navigate to="/home"/>} />
        </Routes>
      </BrowserRouter>
    );
}

export default App;
