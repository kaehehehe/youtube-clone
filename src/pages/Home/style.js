import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Videos = styled.ul`
  background-color: var(--dark-black-color);
  width: 100%;
  text-align: start;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
  margin-left: 80px;
`;
