import React from 'react';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';

import { useList } from '../../Hooks/ListContext';

import { Container } from './styles';
import Wrapper from '../../styles/wrapper';

function ProductPage() {
  const { list, setList } = useList();

  return (
    <Wrapper>
      <Container>
        <main>
          <img
            src='https://gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2019/11/macbookpro-16-2.jpg'
            alt='Product'
          />
        </main>
        <div>
          <h2>Apple Mackbook Pro</h2>
          <p>$499</p>
          <span>
            <strong> Availability :</strong> In stock
          </span>
          <br />
          <span>
            <strong> Category : </strong>Computer
          </span>

          <section>
            <button>
              <AiOutlineShoppingCart size={18} />
              Add to cart
            </button>
            <button
              onClick={() =>
                setList([
                  ...list,
                  {
                    name: 'Apple Mackbook Pro',
                    price: '$499',
                  },
                ])
              }
            >
              <AiOutlineHeart size={18} />
            </button>
          </section>
        </div>
      </Container>
    </Wrapper>
  );
}

export default ProductPage;
