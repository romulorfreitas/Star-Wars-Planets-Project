import { createContext } from 'react';
import PropTypes from 'prop-types';
import useFetch from '../hooks/useFetch';

export const PlanetsInfoContext = createContext();

function PlanetsInfoProvider({ children }) {
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
PlanetsInfoContext.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PlanetsInfoProvider;
