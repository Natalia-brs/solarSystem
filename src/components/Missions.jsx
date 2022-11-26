import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';
import './Missions.css';

class Missions extends React.Component {
  render() {
    const RenderMissionsCard = missions
      .map(({ name, year, country, destination }, index) => (
        <MissionCard
          key={ index }
          name={ name }
          year={ year }
          country={ country }
          destination={ destination }
        />));
    return (
      <div data-testid="missions" className="text">
        <Title headline="Missões" />
        <div className="missions">
          {RenderMissionsCard}
        </div>
      </div>
    );
  }
}

export default Missions;
