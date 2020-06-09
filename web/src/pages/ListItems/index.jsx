import React from 'react';
import { useHistory } from 'react-router-dom';
import { IoMdHeartDislike } from 'react-icons/io';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import { Container, ProdcuctContainer, LoadFail } from './styles';
import Wrapper from '../../styles/wrapper';

import { useList } from '../../Hooks/ListContext';

function ListItems() {
  const { list, setList, listSize } = useList();
  const history = useHistory();

  function removeList(id) {
    const removeProduct = list.find((product) => product.id === id);

    const newList = list.filter((item) => item !== removeProduct);

    setList(newList);
  }

  return (
    <Wrapper>
      <Container>
        {listSize > 0 ? (
          <>
            {list.map((product) => (
              <ProdcuctContainer key={product.name}>
                <img src={product.image} alt={product.name} />
                <section>
                  <h2>{product.name}</h2>
                  <p>$ {product.price}</p>
                </section>
                <footer>
                  <button onClick={() => removeList(product.id)}>
                    <IoMdHeartDislike size={20} color=' #33a0ff' />
                  </button>
                  <button
                    onClick={() => history.push(`/product/${product.id}`)}
                  >
                    <AiOutlineShoppingCart size={20} color=' #33a0ff' />
                  </button>
                </footer>
              </ProdcuctContainer>
            ))}
          </>
        ) : (
          <LoadFail>
            <h1>nothing here =(</h1>
          </LoadFail>
        )}
      </Container>
    </Wrapper>
  );
}

export default ListItems;
