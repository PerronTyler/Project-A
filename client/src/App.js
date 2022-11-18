import './App.css';
import Main from './pages/Main';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import MainHeader from './components/MainHeader';
import { useEffect } from 'react';


function App() {
  const location = useLocation()
  const navigate = useNavigate()
  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/dungeonCrawl')
    }
  }, [location.pathname, navigate])
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainHeader />}>
          <Route path='/dungeonCrawl' element={<Main />} />
          <Route path='/dungeonCrawl/:event/:id' element={<Main />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;