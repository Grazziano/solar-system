import React from 'react';
import { Container, Image, Title } from './styles';

interface IPlanetCardProps {
  planetName: string;
  planetImage: string;
}

function PlanetCard({ planetName, planetImage }: IPlanetCardProps) {
  return (
    <Container>
      <Title>{planetName}</Title>
      <Image src={planetImage} alt={`Planeta ${planetName}`} />
    </Container>
  );
}

export default PlanetCard;
