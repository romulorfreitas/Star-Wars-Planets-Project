import React, { useContext, useState } from 'react';

import { PlanetsInfoContext } from '../context/PlanetsInfoContext';

function Table() {
  const { data } = useContext(PlanetsInfoContext);
  const [search, setSearch] = useState('');

  const filteredPLanets = data.filter((planet) => planet.name.includes(search));
  // console.log(data);
  return (
    <div>

      <label htmlFor="planetName">
        <input
          data-testid="name-filter"
          type="text"
          name="planetName"
          placeholder="search for planets"
          onChange={ (e) => setSearch(e.target.value) }
          value={ search }
        />
      </label>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {
            filteredPLanets.map((e) => (
              <tr key={ e.name }>
                <td>{e.name}</td>
                <td>{e.rotation_period}</td>
                <td>{e.orbital_period}</td>
                <td>{e.diameter}</td>
                <td>{e.climate}</td>
                <td>{e.gravity}</td>
                <td>{e.terrain}</td>
                <td>{e.surface_water}</td>
                <td>{e.population}</td>
                <td>{e.films}</td>
                <td>{e.created}</td>
                <td>{e.edited}</td>
                <td>{e.url}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}
export default Table;
