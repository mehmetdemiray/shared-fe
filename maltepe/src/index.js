import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

const AppCorporate = React.lazy(() => import('./Projects/Corporate'));
const AppWebsite = React.lazy(() => import('./Projects/Website'));

function ApsiyonBuilder() {
  const EnvName = JSON.stringify(process.env.REACT_APP_NAME);
  if (EnvName === JSON.stringify("corporate")) { 
      return <AppCorporate />;
  } else if (EnvName === JSON.stringify("website")) { 
      return <AppWebsite />;
  } else {
    return <div>Hata...</div>
  }
} 

ReactDOM.render( 
  <React.StrictMode> 
      <Suspense fallback={<div>...</div>}>
        { ApsiyonBuilder() }
      </Suspense>
  </React.StrictMode>
, document.getElementById("root") 
)