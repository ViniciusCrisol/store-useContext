import React, { memo } from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineDelete } from 'react-icons/ai';

import { Container, ProductTable, Total } from './styles';
import Wrapper from '../../styles/wrapper';

import { useCart } from '../../Hooks/CartContext';

function Cart() {
  const { cart, value, setCart } = useCart();

  function removeCart(id) {
    const removeProduct = cart.find((product) => product.id === id);

    const newList = cart.filter((item) => item !== removeProduct);

    setCart(newList);
  }

  function oneLess(id) {
    const editProduct = cart.find((product) => product.id === id);
    if (editProduct.quantity === 1) return;

    const list = cart.filter((item) => item !== editProduct);

    editProduct.quantity--;

    setCart([...list, editProduct]);
  }

  function oneMore(id) {
    const editProduct = cart.find((product) => product.id === id);

    const list = cart.filter((item) => item !== editProduct);

    editProduct.quantity++;

    setCart([...list, editProduct]);
  }

  return (
    <Wrapper>
      <Container>
        <ProductTable>
          <thead>
            <tr>
              <th />
              <th>PRODUCT/PRICE</th>
              <th>QTY</th>
              <th>SUBTOTAL</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {cart.map((product) => (
              <tr key={product.id}>
                <td>
                  <img src={product.image} alt={product.name} />
                </td>
                <td>
                  <strong>{product.name}</strong>
                  <span>${product.price}</span>
                </td>
                <td>
                  <div>
                    <button type='button' onClick={() => oneLess(product.id)}>
                      <AiOutlineMinus size={20} color=' #33a0ff' />
                    </button>
                    <input type='number' readOnly value={product.quantity} />
                    <button type='button' onClick={() => oneMore(product.id)}>
                      <AiOutlinePlus size={20} color=' #33a0ff' />
                    </button>
                  </div>
                </td>
                <td>
                  <strong>${product.quantity * product.price}</strong>
                </td>
                <td>
                  <button type='button'>
                    <AiOutlineDelete
                      size={20}
                      color='#33a0ff'
                      onClick={() => removeCart(product.id)}
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </ProductTable>
        <footer>
          <Total>
            <span>TOTAL</span>
            <strong>${value}</strong>
          </Total>
          <button type='button'>Check out</button>
        </footer>
      </Container>
    </Wrapper>
  );
}

export default memo(Cart);
