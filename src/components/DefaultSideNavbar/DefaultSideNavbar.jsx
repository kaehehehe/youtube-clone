import React from 'react';
import {
  MdMenu,
  MdHome,
  MdExplore,
  MdSubscriptions,
  MdVideoLibrary,
} from 'react-icons/md';

import * as S from './style';

const DefaultSideNavbar = () => {
  return (
    <S.Navbar>
      <S.Menu>
        <MdHome />
        <S.MenuName>Home</S.MenuName>
      </S.Menu>
      <S.Menu>
        <MdExplore />
        <S.MenuName>Explore</S.MenuName>
      </S.Menu>
      <S.Menu>
        <MdSubscriptions />
        <S.MenuName>Subscriptions</S.MenuName>
      </S.Menu>
      <S.Menu>
        <MdVideoLibrary />
        <S.MenuName>Library</S.MenuName>
      </S.Menu>
    </S.Navbar>
  );
};

export default DefaultSideNavbar;