import React from 'react';
import logo from '../../images/logo.png';
import {
  MdMenu,
  MdHome,
  MdExplore,
  MdSubscriptions,
  MdVideoLibrary,
  MdRestore,
  MdSlideshow,
  MdSchedule,
  MdThumbUpOffAlt,
  MdSmartDisplay,
  MdTheaters,
  MdSportsEsports,
  MdLightbulb,
  MdEmojiEvents,
  MdSettings,
  MdFlag,
  MdHelpOutline,
  MdAnnouncement,
  MdStream,
} from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

import * as S from './style';

const SideNavbar = ({ setShow }) => {
  const navigate = useNavigate();

  const handleClickTitle = () => {
    navigate('/');
    setShow(false);
  };

  return (
    <S.Background onClick={() => setShow(false)}>
      <S.Navbar>
        <S.Header>
          <MdMenu className="hamburger-menu" onClick={() => setShow(false)} />
          <S.Title onClick={handleClickTitle}>
            <img src={logo} alt="youtube logo" />
            <h1>YouTube</h1>
          </S.Title>
        </S.Header>
        <S.Wrapper>
          <S.Section>
            <S.Menu className="focused">
              <MdHome />
              <span className="menu-name">Home</span>
            </S.Menu>
            <S.Menu>
              <MdExplore />
              <span className="menu-name">Explore</span>
            </S.Menu>
            <S.Menu>
              <MdSubscriptions />
              <span className="menu-name">Subscriptions</span>
            </S.Menu>
          </S.Section>
          <S.Section>
            <S.Menu>
              <MdVideoLibrary />
              <span className="menu-name">Library</span>
            </S.Menu>
            <S.Menu>
              <MdRestore />
              <span className="menu-name">History</span>
            </S.Menu>
            <S.Menu>
              <MdSlideshow />
              <span className="menu-name">Your videos</span>
            </S.Menu>
            <S.Menu>
              <MdSchedule />
              <span className="menu-name">Watch later</span>
            </S.Menu>
            <S.Menu>
              <MdThumbUpOffAlt />
              <span className="menu-name">Liked&nbsp;videos</span>
            </S.Menu>
          </S.Section>
          <S.Section>
            <h5>MORE FROM YOUTUBE</h5>
            <S.Menu>
              <MdSmartDisplay />
              <span className="menu-name">YouTube&nbsp;Premium</span>
            </S.Menu>
            <S.Menu>
              <MdTheaters />
              <span className="menu-name">Movies</span>
            </S.Menu>
            <S.Menu>
              <MdSportsEsports />
              <span className="menu-name">Gaming</span>
            </S.Menu>
            <S.Menu>
              <MdStream />
              <span className="menu-name">Live</span>
            </S.Menu>
            <S.Menu>
              <MdLightbulb />
              <span className="menu-name">Learning</span>
            </S.Menu>
            <S.Menu>
              <MdEmojiEvents />
              <span className="menu-name">Sports</span>
            </S.Menu>
          </S.Section>
          <S.Section>
            <S.Menu>
              <MdSettings />
              <span className="menu-name">Settings</span>
            </S.Menu>
            <S.Menu>
              <MdFlag />
              <span className="menu-name">Report&nbsp;history</span>
            </S.Menu>
            <S.Menu>
              <MdHelpOutline />
              <span className="menu-name">Help</span>
            </S.Menu>
            <S.Menu>
              <MdAnnouncement />
              <span className="menu-name">Send&nbsp;feedback</span>
            </S.Menu>
          </S.Section>
          <S.Footer>
            <p>
              About Press Copyright
              <br />
              Contact us Creators
              <br />
              Advertise Deelopers
              <br />
            </p>
            <p>
              Terms Privacy Policy &amp; Safety
              <br />
              How YouTube works
              <br />
              Test new features
              <br />
            </p>
            <S.Copyright>
              ©2022 Google LLC
              <br />
              CEO:Sundar Pichai
              <br />
              Address: 1600 Amphitheatre
              <br />
              Parkway, Mountain View, CA 94043,
              <br />
              USA.
              <br />
              Phone: 080-822-1450(free)
            </S.Copyright>
          </S.Footer>
        </S.Wrapper>
      </S.Navbar>
    </S.Background>
  );
};

export default SideNavbar;
