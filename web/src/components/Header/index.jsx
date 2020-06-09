import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingBag } from 'react-icons/fi';
import { AiOutlineShop, AiOutlineHeart } from 'react-icons/ai';

import { useList } from '../../Hooks/ListContext';
import { useCart } from '../../Hooks/CartContext';

import { Container } from './styles';

function Header() {
  const { listSize } = useList();
  const { cartSize } = useCart();

  return (
    <Container>
      <main>
        <Link to='/'>
          <AiOutlineShop color='white' size={34} />
          store
        </Link>

        <div>
          <Link to='/list-items'>
            <AiOutlineHeart size={22} />
            <p>{listSize}</p>
          </Link>
          <Link to='/cart'>
            <FiShoppingBag size={22} />
            <p>{cartSize} Items</p>
          </Link>
        </div>
      </main>
    </Container>
  );
}

export default Header;
