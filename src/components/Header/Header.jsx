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
import { useDispatch } from 'react-redux';

import logo from '../../images/logo.png';
import userIcon from '../../images/userIcon.jpg';
import * as S from './style';
import { fetchSearchData } from '../../redux/searchVideosSlice';

const Header = ({ setShow }) => {
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const search = (keyword) => {
    dispatch(fetchSearchData(keyword));
    navigate('/search');
  };

  const handleInput = (e) => {
    const keyword = inputRef.current.value;
    if (e.key === 'Enter') {
      if (keyword === '') return;
      search(keyword);
    }
  };

  const handleClickBtn = () => {
    const keyword = inputRef.current.value;
    if (keyword === '') return;
    search(keyword);
  };

  return (
    <S.Header>
      <S.LeftSide>
        <S.HamburgerMenu onClick={() => setShow(true)}>
          <MdMenu />
        </S.HamburgerMenu>
        <S.Title onClick={() => navigate('/')}>
          <img src={logo} alt="youtube logo" />
          <h1>YouTube</h1>
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
