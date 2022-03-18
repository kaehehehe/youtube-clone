import styled from 'styled-components';

export const Container = styled.ul`
  background-color: var(--dark-black-color);
  text-align: start;
  margin: 0 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding-bottom: 30px;
`