import React, { Suspense, lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import tabs from './tabs.json';
import Layout from './components/Layout/Layout.js';
import Loader from './components/Loader/Loader';

export const TabLoader = lazy(() =>
  import('./components/DummyTable/DummyTable.jsx')
);

function App() {
  tabs.sort((a, b) => a.order - b.order);

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            {tabs.map(({ id, path, title }) => (
              <Route
                key={id}
                path={path.split('.')[0]}
                element={<TabLoader title={title} />}
              />
            ))}
            <Route path="*" element={<Navigate to={'/tabs'} />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
