import React from 'react';
import missions from '../../data/missions';
import MissionCard from '../MissionCard';
import Title from '../Title';
import { Container } from './styles';

function Missions() {
  return (
    <Container>
      <Title headline="Missões" />
      {missions.map((mission) => (
        <MissionCard
          key={mission.name}
          name={mission.name}
          year={Number(mission.year)}
          country={mission.country}
          destination={mission.destination}
        />
      ))}
    </Container>
  );
}

export default Missions;
