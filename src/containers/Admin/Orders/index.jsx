
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { orderStatusOptions } from './orderStatus';



import { Row } from './row';
import { api } from '../../../services/api';
import { useEffect, useState } from 'react';
import {FilterOption, Filter} from './styles'


export function Orders() {
  const [orders, setOrders] = useState([]);
  const [filteredOrds, setFilteredOrders] = useState({})
  const [activeStatus, setActiveStatus] = useState(0)

  const [rows, setRows] = useState([]);

  useEffect(() => {
    async function loadOrders() {
      const { data } = await api.get('orders');


      setOrders(data);
      setFilteredOrders(data)
    }

    loadOrders();
  }, []);

  function createData(order) {
    return {
      name: order.user.name,
      orderId: order._id,
      date: order.createdAt,
      status: order.status,
      products: order.products,
    };
  }

  useEffect(() => {

    const newRows = orders.map((order) => createData(order));
    setRows(newRows)

  }, [filteredOrds]);


  function handleStatus(status) {
    if (status.id === 0) {
      setFilteredOrders(orders);
    } else {
      const newOrders = orders.filter(
        (order) => order.status === status.value
      );
      setFilteredOrders(newOrders);
    }

    setActiveStatus(status.id)
  }

  useEffect(() => {
    if(activeStatus === 0) {
      setFilteredOrders(orders)
    }else {
      const statusIndex = orderStatusOptions.findIndex(item => item.id === activeStatus,

      );

      const newFilteredOrders = orders.filter(
        (order) => order.status === orderStatusOptions[statusIndex].value,
      )
      setActiveStatus,(newFilteredOrders)
    }

  }, [orders])
  



  return (
    <>
      <Filter>
      {orderStatusOptions.map((status) => (
         <FilterOption key={status.id}
         $isActiveStatus={activeStatus === status.id}
        onClick={() => handleStatus(status)}
        >
          {status.label}</FilterOption>
      ))}
       
      </Filter>





      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Pedido</TableCell>
              <TableCell>Cliente</TableCell>
              <TableCell>Data do Pedido</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Pedido</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row
                key={row.orderId}
                row={row}
                orders={orders}
                setOrders={setOrders} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      ;
    </>  
  ) 
}
