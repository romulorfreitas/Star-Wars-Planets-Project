import React from 'react';
import './App.css';
import Table from './components/Table';
import PlanetsInfoProvider from './context/PlanetsInfoContext';

export default function App() {
  return (
    <PlanetsInfoProvider>
      <div>
        <Table />
      </div>
    </PlanetsInfoProvider>
  );
}
