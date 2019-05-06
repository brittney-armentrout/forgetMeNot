import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { render } from "react-dom";

//Material UI:
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import CssBaseline from "@material-ui/core/CssBaseline";
import Appbar from "./components/Appbar/Appbar.js";
import Footer from "./components/Footer/Footer.js";
// import Grid from "@material-ui/core/Grid";
import Test from "./pages/Test";
import NewLogin from "./containers/NewLogin"

//Colors:
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

//Setting Color Palette
const theme = createMuiTheme({
  palette: {
    primary: {
      //light: will be calculated from palette.primary.main
      main: "#13c7ff",
      //dark: will be calculated from palette.primary.main
      //contrastText: will ve calculated to contrast with palette.primary.main
    },
    secondary: {
      light: "#53ca92",
      main: "#28bd77",
      dark: "#1c8453"
    },
    accent: {
      main: "#fdd940"
    }
    //error: will use the default color
  },
  typography: {
    fontFamily: [
      'Fresca',
      'Roboto',
      'sans-serif',
    ].join(','),
    fontSize: 20,
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
    <React.Fragment>
      <CssBaseline />
      <Appbar />
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/main" component={Main} />
            <Route exact path="/detail" component={Detail} />
            <Route exact path="/test" component={NewLogin} />
            {/* <Route exact path="/giftadd" component={GiftAdd} /> */}
            <Route component={NoMatch} />
          </Switch>
      </div>
    </Router>
    </React.Fragment>
    </MuiThemeProvider>
  );
}

export default App;