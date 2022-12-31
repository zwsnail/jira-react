import React from "react";
import "./App.css";

import { TsReactTest } from "screens/project-list/home-work";
import { useAuth } from "context/auth-context";
import { AuthenticatedApp } from "authenticated-app";
import { UnauthenticatedApp } from "unauthenticated-app";

function App() {
  const user = useAuth();

  return (
    <div className="App">
      {/* <TsReactTest /> */}
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      {/* {<UnauthenticatedApp />} */}
    </div>
  );
}

export default App;
