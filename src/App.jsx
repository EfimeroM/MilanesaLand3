import { Navigate, Route, Routes } from 'react-router-dom';
import './App.scss'
import { NavBarPc } from './components/NavBarPc/NavBarPc';
import { Home } from './pages/Home';

function App() {

  return (
    <div id="app">
      <div id='app-padding'>
        <NavBarPc />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element = { <Navigate to = '/' /> } />
        </Routes>
      </div>
    </div>
  )
}

export default App
