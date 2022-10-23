import styled from 'styled-components';

export const Container = styled.div`
  /* background-color: ${(props) => props.theme.colors.secondary}; */
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 10px;
  border-radius: 1.5rem;
  padding: 20px 0;
  max-width: 300px;
`;

export const Title = styled.h3`
  color: ${(props) => props.theme.colors.white};
`;

export const Image = styled.img`
  width: 100%;
`;
