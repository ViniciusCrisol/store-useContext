import React, { useEffect, useState } from 'react';

import { Container } from './styles';
import Wrapper from '../../styles/wrapper';
import ProductContainer from '../../components/ProductContainer';

import api from '../../services/api';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const response = await api.get('products');

      setProducts(response.data);
    }

    getProducts();
  }, []);

  return (
    <Wrapper>
      <Container>
        {products.map((product) => (
          <ProductContainer
            key={product.id}
            id={product.id}
            name={product.name}
            image={product.image_url}
            price={product.price}
          />
        ))}
      </Container>
    </Wrapper>
  );
}
export default Home;
