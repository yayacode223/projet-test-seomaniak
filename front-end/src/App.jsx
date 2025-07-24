import Home from './pages/Home'
import Header from './components/Header'; 
import Footer from './components/Footer'; 
import NotFound from './components/NotFound'; 
import Login from './pages/Login'; 
import Register from './pages/Register'; 
import Edit from './pages/Edit'; 
import {Routes, Route} from "react-router-dom"; 
import Actualite from './pages/Actualite';
import Blog from './pages/Blog';


export default function App() {
  return (

    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/edit/:id?' element={<Edit />} />
        <Route path='/actu' element={<Actualite />} />
        <Route path='/blog' element={<Blog />} />
        <Route path= "*" element ={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}
