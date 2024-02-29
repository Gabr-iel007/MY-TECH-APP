import './App.css'
import Home from './pages/Home'
import About from './pages/About'
// import Products from './pages/Products'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DetailPage from './pages/DetailPage'
import MyHook from './Hooks/MyHook'
import NotFoundPage from './pages/404Page'
import FetchData from './Hooks/FetchData'
import Register from './Register'
import Login from './Login'



function App() {

  return (
    <>
    {/* <Home/>
    <About/>
    <Products/> */}
    {/*  routing pages */}
    <BrowserRouter>
    {/* <Menu/> */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register/>} />
      <Route path="/about" element={<About/>} />
      {/* <Route path="/product" element={<Products />} /> */}
      <Route path="/detail/:id" element={< DetailPage/>} />
     <Route path='/Hook'
     element={<MyHook/>}/>
     <Route path="/blogs" element ={<FetchData/>}></Route>
     <Route path='/*' element={<NotFoundPage/>}></Route>
    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App