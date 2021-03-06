import React, { useEffect, useState } from 'react';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';

import { useList } from '../../Hooks/ListContext';
import { useCart } from '../../Hooks/CartContext';

import { Container } from './styles';
import Wrapper from '../../styles/wrapper';

import api from '../../services/api';

function ProductPage({ match }) {
  const { list, setList } = useList();
  const { cart, setCart } = useCart();

  const { id } = match.params;

  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const response = await api.get(`products/${id}`);

      setProduct(response.data);
    }
    getProducts();
  }, [id]);

  function handleAddList({ id, name, price, image }) {
    const productExists = list.find((product) => product.id === id);

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

  function handleAddCart({ id, name, price, image, quantity }) {
    const productExists = cart.find((product) => product.name === name);

    if (productExists) return;

    setCart([
      ...cart,
      {
        id,
        name,
        image,
        price,
        quantity,
      },
    ]);
  }

  return (
    <Wrapper>
      <Container>
        <main>
          <img src={product.image_url} alt={product.name} />
        </main>
        <div>
          <h2>{product.name}</h2>
          <p>${product.price}</p>
          <span>
            <strong> Availability : </strong>
            {product.availability === 'true' ? 'In stock' : 'Out of stock'}
          </span>
          <br />
          <span>
            <strong> Category : </strong> {product.category}
          </span>

          <section>
            {product.availability === 'true' ? (
              <button
                onClick={() =>
                  handleAddCart({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image_url,
                    quantity: 1,
                  })
                }
              >
                <AiOutlineShoppingCart size={18} />
                Add to cart
              </button>
            ) : (
              <button style={{ backgroundColor: '#FFA49A99', color: 'white' }}>
                <AiOutlineShoppingCart size={18} />
                Out of stock
              </button>
            )}
            <button
              onClick={() =>
                handleAddList({
                  id: product.id,
                  name: product.name,
                  price: product.price,
                  image: product.image_url,
                })
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
