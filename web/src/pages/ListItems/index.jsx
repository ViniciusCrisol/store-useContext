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

  function removeList(name) {
    const removeProduct = list.find((product) => product.name === name);

    const newList = list.filter((item) => item !== removeProduct);

    setList(newList);
  }

  return (
    <Wrapper>
      <Container>
        {listSize > 0 ? (
          <>
            {list.map((item) => (
              <ProdcuctContainer key={item.name}>
                <img src={item.image} alt={item.name} />
                <section>
                  <h2>{item.name}</h2>
                  <p>{item.price}</p>
                </section>
                <footer>
                  <button onClick={() => removeList(item.name)}>
                    <IoMdHeartDislike size={20} color=' #33a0ff' />
                  </button>
                  <button onClick={() => history.push(`/product/${item.id}`)}>
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
