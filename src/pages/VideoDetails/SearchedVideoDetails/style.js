import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--white-color);
`;

export const Video = styled.iframe`
  width: 100%;
  height: 500px;
`;

export const VideoTitle = styled.h2`
  font-size: 20px;
  margin-top: 15px;
  text-align: start;
  width: 100%;
`;

export const Wrapper = styled.div`
  width: 90%;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid darkgray;
`;

export const Metadata = styled.div`
  display: flex;

  span {
    font-size: 14px;
    color: var(--gray-color);
  }

  @media screen and (max-width: 793px) {
    display: none;
  }
`;

export const Buttons = styled.ul`
  display: flex;
  justify-content: space-evenly;
  font-size: 24px;
`;

export const Button = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 12px;
  cursor: pointer;

  &:hover {
    color: var(--blue-color);
  }
`;

export const ButtonName = styled.span`
  font-size: 14px;
  margin-left: 5px;
`;

export const VideoInfo = styled.div`
  margin-top: 20px;
  width: 100%;
`;

export const VideoInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ChannelIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ChannelIcon = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;

export const ChannelTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`;

export const ChannelTitle = styled.h3`
  font-size: 14px;
`;

export const Subscribers = styled.span`
  font-size: 12px;
  color: var(--gray-color);
  margin-top: 5px;
`;

export const SubBtn = styled.button`
  font-size: 14px;
  text-transform: uppercase;
  padding: 10px 16px;
  background-color: var(--red-color);
  color: var(--white-color);
  border-radius: 3px;
`;

export const VideoDescription = styled.p`
  font-size: 14px;
  padding: 15px 55px;
`;