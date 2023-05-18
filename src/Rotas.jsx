import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Paginas/login/Login'

 function Rotas() {
  return (
        <BrowserRouter>        
            <Routes>
                <Route path="/" element={<Login />} />            
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas

