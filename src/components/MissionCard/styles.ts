import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.tertiary};
  padding: 20px;
  border: 1px solid ${(props) => props.theme.colors.white};
  border-radius: 0.5rem;
  width: 300px;
  margin-bottom: 10px;
  line-height: 20px;
  opacity: 0.8;
`;

export const Title = styled.h3`
  color: ${(props) => props.theme.colors.primary};
  border-bottom: 1px solid ${(props) => props.theme.colors.white};
  margin-bottom: 1rem;
`;

export const Paragraph = styled.p`
  color: ${(props) => props.theme.colors.white};
`;
