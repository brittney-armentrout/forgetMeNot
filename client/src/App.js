import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Main from "./pages/Main";
import GiftAdd from "./pages/GiftQuickAdd";
import FriendDetail from "./pages/FriendDetail";
import AddFriend from "./pages/AddFriend";
import NoMatch from "./pages/NoMatch";


function App() {
  return (
    <Router>
    <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/frienddetail" component={FriendDetail} />
          <Route exact path="/giftadd" component={GiftAdd} />
          <Route exact path="/addfriend" component={AddFriend} />
          <Route component={NoMatch} />
        </Switch>
    </div>
    </Router>
  );
}

export default App;