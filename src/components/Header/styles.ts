import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme.colors.primary};
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.white};
`;
