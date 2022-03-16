import styled from 'styled-components';

export const Container = styled.ul`
  background-color: var(--dark-black-color);
  text-align: start;
  margin-top: 70px;
  margin-left: 10px;
  margin-right: 30px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding-bottom: 30px;
`