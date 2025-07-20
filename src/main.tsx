import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import MainPage from './pages/MainPage.tsx'


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<MainPage/>} />
    <Route path="/about" element={<div>About Page</div>} />
  </Routes>
  </BrowserRouter>,
)
