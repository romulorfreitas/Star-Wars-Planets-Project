import React, { useContext, useState } from 'react';
import { PlanetsInfoContext } from '../context/PlanetsInfoContext';

const options = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

function Table() {
  const { data, columnKeys } = useContext(PlanetsInfoContext);
  const [search, setSearch] = useState([]);
  const [columnOption, setColumnOption] = useState(options);
  const [column, setColumn] = useState(columnOption[0]);
  const [compare, setCompare] = useState('maior que');
  const [number, setnumber] = useState(0);
  const [savedComparison, setSavedComparison] = useState([]);

  let comparisonPLanets = data;

  if (savedComparison.length) {
    comparisonPLanets = savedComparison.reduce((acc, curr) => {
      const {
        column: receivedColumn,
        compare: receivedCompare,
        number: receivedValue } = curr;
      switch (receivedCompare) {
      case 'maior que':
        return acc.filter((e) => +e[receivedColumn] > receivedValue);
      case 'menor que':
        return acc.filter((e) => +e[receivedColumn] < receivedValue);
      case 'igual a':
        return acc.filter((e) => Number(e[receivedColumn] === receivedValue));
      default: return acc;
      }
    }, comparisonPLanets);
  }

  const filteredPLanets = comparisonPLanets
    .filter((planet) => planet.name.toLowerCase().includes(search));

  const removeFilter = (e) => {
    const a = savedComparison.filter((t) => t !== e);
    setSavedComparison(a);
    setColumnOption([...columnOption, e.column]);
  };

  const selectedFilter = savedComparison.map((saved, index) => {
    const {
      column: receivedColumn,
      compare: receivedCompare,
      number: receivedValue } = saved;
    const renderSaved = `${receivedColumn} ${receivedCompare} ${receivedValue}`;
    return (
      <div key={ index }>
        <li data-testid="filter">
          {renderSaved}
          <br />
          <button onClick={ () => removeFilter(saved) }>X</button>
        </li>
      </div>
    );
  });

  const saveAndRemove = () => {
    setSavedComparison([...savedComparison,
      { compare, number, column }]);
    const removeFilte = columnOption.filter((e) => e !== column);
    setColumn(removeFilte[0]);
    setColumnOption(removeFilte);
  };

  return (
    <div>
      <h1>STAR WARS PLANET FINDER</h1>
      <br />
      <label htmlFor="name-filter">
        What planet are you looking for?
        <br />
        <input
          data-testid="name-filter"
          type="text"
          id="name-filter"
          name=""
          placeholder="search for planets"
          onChange={ (e) => setSearch(e.target.value) }
          value={ search }
        />
      </label>
      <br />
      <p>
        Or if you dont know the exactly planet
        name that you are looking for, you can filter it:
      </p>
      <label htmlFor="column-filter">
        Filter by collum:
        <br />
        <select
          name=""
          id="column-filter"
          data-testid="column-filter"
          value={ column }
          onChange={ ({ target: { value } }) => setColumn(value) }
        >
          {
            columnOption.map((e, index) => (<option key={ index }>{ e }</option>))
          }
        </select>
      </label>
      <br />
      <br />
      <label htmlFor="comparison-filter">
        Greater than / Less than / Equal to
        <br />
        <select
          id="comparison-filter"
          data-testid="comparison-filter"
          value={ compare }
          onChange={ ({ target: { value } }) => setCompare(value) }
        >
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
        <br />
      </label>
      <label htmlFor="value_filter">
        <input
          type="number"
          data-testid="value-filter"
          value={ number }
          onChange={ ({ target: { value } }) => setnumber(value) }
        />
      </label>
      <br />
      <br />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ saveAndRemove }
      >
        Filter
      </button>

      <ul>{ selectedFilter }</ul>
      <button
        data-testid="button-remove-filters"
        onClick={ () => setSavedComparison([]) || setColumnOption(options) }
      >
        CLEAR ALL
      </button>
      <table>
        <thead>
          <tr>
            {
              columnKeys.map((e, index) => (<th key={ index }>{ e }</th>))
            }
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
