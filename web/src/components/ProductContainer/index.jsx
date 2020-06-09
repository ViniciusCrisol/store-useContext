import React from 'react';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';

import { useList } from '../../Hooks/ListContext';

function ProductContainer({ id, name, price, image }) {
  const { list, setList } = useList();

  const history = useHistory();

  function handleAddList({ id, name, price, image }) {
    const productExists = list.find((product) => product.name === name);

    if (productExists) return;

    setList([
      ...list,
      {
        id,
        name,
        image,
        price,
      },
    ]);
  }

  return (
    <Container>
      <img src={image} alt={name} />

      <section>
        <h2>{name}</h2>
        <p>{price}</p>
      </section>
      <footer>
        <button onClick={() => handleAddList({ name, image, price, id })}>
          <AiOutlineHeart size={18} color='white' />
        </button>
        <button onClick={() => history.push(`/product/${id}`)}>
          <AiOutlineShoppingCart size={18} color='white' />
        </button>
      </footer>
    </Container>
  );
}

export default ProductContainer;
