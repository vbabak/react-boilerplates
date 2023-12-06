import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router';
import { useSelector } from 'react-redux';
import { selectTheme } from './state/slices/ui';

function App() {
  const theme = useSelector(selectTheme);
  
  return (
    <div className={"app-wrapper theme-" + theme}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
