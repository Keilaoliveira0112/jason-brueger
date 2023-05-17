import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Paginas/Login/Index.js'

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

