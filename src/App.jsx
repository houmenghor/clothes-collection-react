import './App.css'
import Navbar from './components/Navbar'
import Home from './page/Home'
import Products from './page/Products'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Detail from './page/Detail'
import Login from './page/Login'
import Register from './page/Register'
import PageNotFound from './page/PageNotFound'
function App() {
  return (
    <BrowserRouter>

      <Routes >
        <Route element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Products />} />
          <Route path="/product/:slug" element={<Detail />} />
          <Route path='/login'element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
