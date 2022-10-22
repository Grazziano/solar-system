import React from 'react';
import { H2 } from './styles';

interface ITitleProps {
  headline: string;
}

function Title({ headline }: ITitleProps) {
  return <H2>{headline}</H2>;
}

export default Title;
