import { useCart } from '../../hooks/CartContext'
import { formatPrice } from '../../utils/formatPrice'
import TransIcon from '../../assets/transh.svg'


import { Table } from '../index'
import { ButtonGrounp, EmptyCart, ProductImage, ProductTotalPrice, TrashImage } from './styles'


export function CartItems() {
    const { cartProducts, increaseProduct, decreaseProduct, deleteProduct } = useCart()



    return (
        <Table.Root>
            <Table.Header>
                <Table.Tr>
                    <Table.Th></Table.Th>
                    <Table.Th>Itens</Table.Th>
                    <Table.Th>Preço</Table.Th>
                    <Table.Th>Quantidade</Table.Th>
                    <Table.Th>Total</Table.Th>
                    <Table.Th></Table.Th>
                </Table.Tr>
            </Table.Header>
            <Table.Body>
                {cartProducts?.length ? (
                    cartProducts.map(product => (
                        <Table.Tr key={product.id}>
                            <Table.Td>
                                <ProductImage src={product.url} />
                            </Table.Td>
                            <Table.Td> {product.name}</Table.Td>
                            <Table.Td>{product.currencyValue}</Table.Td>

                            <ButtonGrounp>
                                <button onClick={() => decreaseProduct(product.id)}>-</button>
                                <Table.Td>{product.quantity}</Table.Td>
                                <button onClick={() => increaseProduct(product.id)}>+</button>
                            </ButtonGrounp>


                            <Table.Td>
                                <ProductTotalPrice>
                                {formatPrice(product.quantity * product.price)}
                                </ProductTotalPrice>
                            </Table.Td>
                            <Table.Td>
                                <TrashImage src={TransIcon} alt="lixeira" onClick={() => deleteProduct(product.id) }/>
                            </Table.Td>
                        </Table.Tr>
                    ))
                ) : <EmptyCart>Carrinho Vazio</EmptyCart>}
            </Table.Body>
        </Table.Root>
    )
}