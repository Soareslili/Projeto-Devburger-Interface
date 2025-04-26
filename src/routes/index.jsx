import { Route, Routes } from "react-router-dom";
import { Home, Cart, Menu, Register, Login } from "../containers";
import { UserLayout } from '../layouts/UserLayout'; // Certifique-se de que o caminho está correto

export function Router() {
    return (
        <Routes>
           
            <Route path="/" element={<UserLayout />}>
                <Route index element={<Home />} />  {/* Definindo a rota para a página inicial */}
                <Route path="cardapio" element={<Menu />} />
                <Route path="carrinho" element={<Cart />} />
            </Route>

          
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Register />} />
        </Routes>
    );
}



