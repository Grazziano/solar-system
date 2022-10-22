import React from 'react';
import { Container, Paragraph, Title } from './styles';

interface IMissionCardProps {
  name: string;
  year: number;
  country: string;
  destination: string;
}

function MissionCard({ name, year, country, destination }: IMissionCardProps) {
  return (
    <Container>
      <Title>{name}</Title>
      <Paragraph>{year}</Paragraph>
      <Paragraph>{country}</Paragraph>
      <Paragraph>{destination}</Paragraph>
    </Container>
  );
}

export default MissionCard;
