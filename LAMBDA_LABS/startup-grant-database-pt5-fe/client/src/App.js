import React from "react";
import "./App.css";
import "./components/search/search.css";
import TopBar from "./components/scafolding/topbar/topbar.js";
import PlayArea from "../src/components/scafolding/playarea/playarea.js";
// import DashBoard from "./components/dashboard/DashBoard";

import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

const breakpointValues = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
};
const theme = createMuiTheme({ breakpoints: { values: breakpointValues } });
// import UserList from './components/userList_test';
// import SearchHolder from './components/PrivateRoute';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <TopBar />
        <PlayArea />
        {/* <UserList /> */}
      </div>
    </MuiThemeProvider>
  );
}

export default App;
