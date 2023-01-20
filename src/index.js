import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import PlanetsInfoProvider from './context/PlanetsInfoContext';

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
    <PlanetsInfoProvider>
      <App />
    </PlanetsInfoProvider>,
  );
