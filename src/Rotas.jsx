import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Paginas/login/Login';
import Breakfast from './Paginas/attendant/breakfast/Breakfast';

 function Rotas() {
  return (
        <BrowserRouter>        
            <Routes>
                <Route exact path="/" element={<Login />} />
                <Route exact path="/Breakfast" element={<Breakfast />} />          
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas

