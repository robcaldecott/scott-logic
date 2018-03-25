import React from "react";
import AppBar from "../components/AppBar";
import LayoutGrid from "../components/LayoutGrid";
import LayoutGridCell from "../components/LayoutGridCell";
import UsersContainer from "../containers/UsersContainer";
import DetailsContainer from "../containers/DetailsContainer";

// The application!
const App = () => (
  <div className="mdc-typography">
    <AppBar />

    <LayoutGrid>
      <LayoutGridCell desktop={3} tablet={2}>
        <UsersContainer />
      </LayoutGridCell>

      <LayoutGridCell desktop={9} tablet={6}>
        <DetailsContainer />
      </LayoutGridCell>
    </LayoutGrid>
  </div>
);

export default App;
