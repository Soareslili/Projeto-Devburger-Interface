import { Route, Routes } from "react-router-dom";
import { Home, Cart, Menu, Register, Login, NewProducts, Products} from "../containers";
import { UserLayout } from '../layouts/UserLayout'; 
import { AdminLayout } from "../layouts/AdminLayout";
import {Orders} from '../containers/Admin/Orders'


export function Router() {
    return (
        <Routes>
           
            <Route path="/" element={<UserLayout />}>
                <Route index element={<Home />} /> 
                <Route path="cardapio" element={<Menu />} />
                <Route path="carrinho" element={<Cart />} />
            </Route>

            <Route path="/admin" element={<AdminLayout />}>
                <Route path="/admin/pedidos" element={<Orders />}/>
                <Route path="/admin/novo-produto" element={<NewProducts />}/>
                <Route path="/admin/produtos" element={<Products />}/>
            </Route>

          
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Register />} />
        </Routes>
    );
}



