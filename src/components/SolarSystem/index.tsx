import React from 'react';
import Planets from '../../data/planets';
import PlanetCard from '../PlanetCard';
import Title from '../Title';
import { Container } from './styles';

function SolarSystem() {
  return (
    <Container>
      <Title headline="Planetas" />
      <div className="planets-list">
        {Planets.map((planet) => (
          <PlanetCard
            key={planet.name}
            planetName={planet.name}
            planetImage={planet.image}
          />
        ))}
      </div>
    </Container>
  );
}

export default SolarSystem;
