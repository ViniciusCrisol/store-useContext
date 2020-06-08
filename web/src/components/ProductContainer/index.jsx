import React from 'react';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';

import { useList } from '../../Hooks/ListContext';

function ProductContainer() {
  const { list, setList } = useList();

  const history = useHistory();

  function handleAddList({ name, price, image }) {
    const productExists = list.find((product) => product.name === name);

    if (productExists) return;

    setList([
      ...list,
      {
        name,
        image,
        price,
      },
    ]);
  }

  return (
    <Container>
      <img
        src='https://gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2019/11/macbookpro-16-2.jpg'
        alt='Product'
      />

      <main>
        <h4>Apple Mackbook Pro</h4>
        <p>$499</p>
        <div>
          <button
            onClick={() =>
              handleAddList({
                name: 'Apple Mackbook Pro',
                image:
                  'https://gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2019/11/macbookpro-16-2.jpg',
                price: '$499',
              })
            }
          >
            <AiOutlineHeart size={18} color='white' />
          </button>
          <button onClick={() => history.push('/product/1')}>
            <AiOutlineShoppingCart size={18} color='white' />
          </button>
        </div>
      </main>
    </Container>
  );
}

export default ProductContainer;
