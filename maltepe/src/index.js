import React from 'react';
import ReactDOM from 'react-dom';

function ApsiyonBuilder() {
  const EnvName = JSON.stringify(process.env.REACT_APP_NAME);
  if (EnvName === JSON.stringify("corporate")) { 
    import("Projects/Corporate").then(res => {
      return res;
    })
  } else if (EnvName === JSON.stringify("website")) { 
    import("Projects/Website").then(res => {
      return res;
    })
  }
} 

ApsiyonBuilder().then(({ default: Environment }) => 
  ReactDOM.render( 
    <React.StrictMode> 
      <Environment />
    </React.StrictMode>
  , document.getElementById("root") 
  )
);