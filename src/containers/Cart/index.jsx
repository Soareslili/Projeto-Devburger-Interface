
import { Container, Banner, Title, Content } from './styles'

import Logo from '../../assets/logo.svg'
import { CartItems } from '../../components/CartItems'




export function Cart() {
    return (
        <Container>
            <Banner>
                <img src={Logo} alt="logo-devburger" />
            </Banner>
            <Title> Checkout - Pedido </Title>
            <Content>
                <CartItems/>
            </Content>
        </Container>
    )
}