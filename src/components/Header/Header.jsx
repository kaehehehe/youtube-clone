import React, { useRef } from 'react';
import {
  MdMenu,
  MdSearch,
  MdMic,
  MdVideoCall,
  MdApps,
  MdNotifications,
} from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

import logo from '../../images/logo.png';
import userIcon from '../../images/userIcon.jpg';
import * as S from './style';

const Header = () => {
  const navigate = useNavigate();
  const inputRef = useRef(null);

  const handleInput = (e) => {
    const value = inputRef.current.value;
    if (e.key === 'Enter') {
      if (value === '') return;
    }
  };

  const handleClickBtn = () => {
    const value = inputRef.current.value;
    if (value === '') return;
  };

  return (
    <S.Header>
      <S.LeftSide>
        <S.HamburgerMenu>
          <MdMenu />
        </S.HamburgerMenu>
        <S.Title>
        <img src={logo} alt="youtube logo" onClick={() => navigate('/')} />
        <h1 onClick={() => navigate('/')}>YouTube</h1>
        </S.Title>
      </S.LeftSide>
      <S.SearchBar>
        <input
          type="search"
          placeholder="Search"
          ref={inputRef}
          onKeyUp={handleInput}
        />
        <button type="submit" onClick={handleClickBtn}>
          <MdSearch className="icon" />
        </button>
        <S.MicIcon>
          <MdMic className="icon" />
        </S.MicIcon>
      </S.SearchBar>
      <S.RightSide>
        <MdVideoCall className="icon" />
        <MdApps className="icon" />
        <MdNotifications className="icon" />
        <img src={userIcon} alt="user icon" className="icon" />
      </S.RightSide>
    </S.Header>
  );
};

export default Header;
