import { useState } from 'react';
import Link from 'next/link';

import { Menu as MenuIcon } from '@styled-icons/material/Menu';
import { Close as CloseIcon } from '@styled-icons/material/Close';

import Logo from 'components/Logo';
import * as S from './styles';
import Footer from 'components/Footer';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.Container>
      <Logo />

      <S.MenuNav>
        <Link href="/" passHref>
          <S.MenuLink>Search</S.MenuLink>
        </Link>

        <Link href="/favorites" passHref>
          <S.MenuLink>Favorites</S.MenuLink>
        </Link>
      </S.MenuNav>

      <S.IconWrapper onClick={() => setIsOpen(true)}>
        <MenuIcon aria-label="Open menu" />
      </S.IconWrapper>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <S.IconWrapper onClick={() => setIsOpen(false)}>
          <CloseIcon aria-label="Close menu" />
        </S.IconWrapper>

        <S.MenuNav>
          <Link href="/" passHref>
            <S.MenuLink>Search</S.MenuLink>
          </Link>

          <Link href="/favorites" passHref>
            <S.MenuLink>Favorites</S.MenuLink>
          </Link>
        </S.MenuNav>

        <Footer />
      </S.MenuFull>
    </S.Container>
  );
};

export default Menu;
