import React from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineDelete } from 'react-icons/ai';

import { Container, ProductTable, Total } from './styles';
import Wrapper from '../../styles/wrapper';

function Cart() {
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
            <tr>
              <td>
                <img
                  src='https://gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2019/11/macbookpro-16-2.jpg'
                  alt='Product'
                />
              </td>
              <td>
                <strong>Apple Mackbook Pro</strong>
                <span>$499</span>
              </td>
              <td>
                <div>
                  <button type='button' onClick={() => {}}>
                    <AiOutlineMinus size={20} color=' #33a0ff' />
                  </button>
                  <input type='number' readOnly value='2' />
                  <button type='button' onClick={() => {}}>
                    <AiOutlinePlus size={20} color=' #33a0ff' />
                  </button>
                </div>
              </td>
              <td>
                <strong>$998</strong>
              </td>
              <td>
                <button type='button'>
                  <AiOutlineDelete
                    size={20}
                    color=' #33a0ff'
                    onClick={() => {}}
                  />
                </button>
              </td>
            </tr>
          </tbody>
        </ProductTable>
        <footer>
          <Total>
            <span>TOTAL</span>
            <strong>$998</strong>
          </Total>
          <button type='button'>Check out</button>
        </footer>
      </Container>
    </Wrapper>
  );
}

export default Cart;
