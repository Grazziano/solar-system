import styled from 'styled-components';

export const Container = styled.footer`
  /* background-color: ${(props) => props.theme.colors.secondary}; */
  color: ${(props) => props.theme.colors.white};
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  opacity: 0.8;
  padding: 30px;
`;

export const Paragraph = styled.p`
  font-size: 12px;
`;

export const Link = styled.a`
  color: ${(props) => props.theme.colors.white};
  text-decoration: none;
  transition: color 0.3s;

  :hover {
    color: ${(props) => props.theme.colors.info};
  }
`;

export const Image = styled.img`
  margin-left: 10px;
  width: 2rem;
`;
