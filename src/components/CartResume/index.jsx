import { Button } from "../Button";
import { Container } from "./styles";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import {useCart} from '../../hooks/CartContext'
import {api} from '../../services/api'
import {formatPrice} from '../../utils/formatPrice' 
import { useEffect, useState } from "react";


export function CartResume() {
    const [finalPrice, setFinalPrice, ] = useState(0)
    const [deliverytax] = useState(500)

    const navigate = useNavigate()

    const {cartProducts, clearCart, } = useCart()

    useEffect(() => {
        const sumAllItems = cartProducts.reduce( (acc, current) => {
            return current.price * current.quantity + acc;
        }, 0)

        setFinalPrice(sumAllItems)
    }, [cartProducts])

    const submitOrder = async () => {
        const products = cartProducts.map( (product) => {
            return {id: product.id, quantity: product.quantity }
        })

        try{
            const { status } = await api.post('/orders', {products}, {
               
                validateStatus: () => true,
            });
    
            if(status === 200 || status === 201 ){
              
                setTimeout(() => {
                    navigate('/')
                }, 2000)
                clearCart()
                
                toast.success('Pedido realizado com sucesso!')
            }else if(status=== 409){
                toast.error('Falha ao realizar seu pedido')
            } else{
                throw new Error();
            }
        }catch (error) {
            toast.error("❌ Falha no Sistema! Tente novamente")
        }
    }

    return (
        <div>
            <Container>
                <div className="container-top">
                    <h2 className="title">Resumo do Pedido</h2>
                    <p className="items">Itens</p>
                    <p className="items-price">{formatPrice(finalPrice)}</p>
                    <p className="delivery-tax">Taxa de Entrega</p>
                    <p className="delivery-tax-price">{formatPrice(deliverytax)}</p>
                </div>
                <div className="container-bottom">
                    <p>Total</p>
                    <p>{formatPrice(finalPrice + deliverytax)}</p>
                </div>
            </Container>
            <Button onClick={submitOrder}>Finalizar Pedido</Button>
        </div>
    )
}