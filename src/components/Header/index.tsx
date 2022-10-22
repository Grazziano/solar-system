import React from 'react';
import { HeaderContainer, Title } from './styles';

interface IHeaderProps {
  title: string;
}

function Header({ title }: IHeaderProps) {
  return (
    <HeaderContainer>
      <Title>{title}</Title>
    </HeaderContainer>
  );
}

export default Header;
