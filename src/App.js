import { BrowserRouter, Navigate, Route, Routes, Switch } from 'react-router-dom';
import './App.css';
import { Hotels } from './hotels/Hotels';
import Home from './pages/home/home';
import { Lists } from './utils/Lists';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/hotels' element={<Lists/>}/>
          <Route path='/hotels/:id' element={<Hotels/>}/>
          <Route path="/home" element={<Home />} exact/>

          <Route path="*" element={<Navigate to="/home"/>} />
        </Routes>
      </BrowserRouter>
    );
}

export default App;
