import { useCart } from '../../hooks/CartContext'

import { Table } from '../index'

export function CartItems() {
    const {cartProducts, increaseProduct, decreaseProduct} = useCart()
    return (
        <Table.Root>
            <Table.Header>

                <Table.Tr>
                    <Table.Th></Table.Th>
                    <Table.Th>Itens</Table.Th>
                    <Table.Th>Preço</Table.Th>
                    <Table.Th>Quantidade</Table.Th>
                    <Table.Th>Total</Table.Th>
                </Table.Tr>
            </Table.Header>
            <Table.Body>
                {cartProducts?.length}
            </Table.Body>
        </Table.Root>
    )
}