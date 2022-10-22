import React from 'react';

interface IHeaderProps {
  title: string;
}

function Header({ title }: IHeaderProps) {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
}

export default Header;
