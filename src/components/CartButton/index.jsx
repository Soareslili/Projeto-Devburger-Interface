import { ContainerButton } from './styles'

import Cart from '../../assets/Cart.svg'

export function CartButton({ ...props }) {
    return (


        <ContainerButton{...props}>
            <img src={Cart} alt='carrinho-de-compras' />
        </ContainerButton>

    )
}