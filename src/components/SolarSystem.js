import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    const renderPLanets = planets.map(({ name, image }, index) => (
      <PlanetCard key={ index } planetName={ name } planetImage={ image } />
    ));
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {renderPLanets}
      </div>
    );
  }
}

export default SolarSystem;
