import { useEffect, useState } from "react"
import { api } from "../../../services/api"


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {formatPrice} from '../../../utils/formatPrice'
import { useNavigate, useNavigation } from "react-router-dom";

import { Container, EditButton, ProductImage } from './styles'
import { CheckCircle, Pencil, XCircle } from "@phosphor-icons/react";


export function Products() {
  const [products, setProducts] = useState([])
  const navigate = useNavigate()


  useEffect(() => {
    async function loadProducts() {
      const { data } = await api.get('/products');
      setProducts(data);
    }

    loadProducts();
  }, []);

  function isOffer(offer){
    if(offer){
      return <CheckCircle color="#61A120"/>
    }else{
      return<XCircle color="#FF3205" size="28"/>
    }
  }

  function ediProduct(product) {
    navigate('/admin/editar-produto', {state: {product}})
  }


  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nome (100g serving)</TableCell>
              <TableCell align="center">Preço</TableCell>
              <TableCell align="center">Produto em Oferta</TableCell>
              <TableCell align="center">Image do Produto</TableCell>
              <TableCell align="center">Editar Produto</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.name}</TableCell>
                <TableCell align="center">{formatPrice(product.price)}</TableCell>
                <TableCell align="center">{isOffer(product.offer)}</TableCell>
                <TableCell align="center">
                  <ProductImage src={product.url} />
                </TableCell>
                <TableCell align="center">
                  <EditButton onClick={() => ediProduct(product)}>
                     <Pencil />
                  </EditButton>
                 
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}