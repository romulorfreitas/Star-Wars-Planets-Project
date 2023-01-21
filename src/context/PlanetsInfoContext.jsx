import { createContext } from 'react';
import PropTypes from 'prop-types';
import useFetch from '../hooks/useFetch';

export const PlanetsInfoContext = createContext();

function PlanetsInfoProvider({ children }) {
  console.log(children);
  const { data, loading, error } = useFetch();

  if (error) {
    return (
      <main>
        <h1>An unexpected error has occurred. Please reload the page and try again.</h1>
      </main>
    );
  }

  const contextValue = {
    loading,
    data,
  };

  return (
    <PlanetsInfoContext.Provider value={ contextValue }>
      { children }
    </PlanetsInfoContext.Provider>
  );
}
PlanetsInfoProvider.propTypes = {
  children: PropTypes.object,
}.isRequired;
export default PlanetsInfoProvider;
