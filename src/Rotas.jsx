import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Paginas/login/Login';
import Breakfast from './Paginas/attendant/breakfast/Breakfast';
import RestOfTheDay from './Paginas/attendant/restOfTheDay/restOfTheDay';

 function Rotas() {
  return (
        <BrowserRouter>        
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/breakfast" element={<Breakfast />} />
                <Route path="/resto-do-dia" element={<RestOfTheDay />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas

