import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Users from './pages/Users.page';
import NewPlace from "./pages/NewPlace.page";

const App = () => {
    return <Router>
            <Switch>
                    <Route exact path="/places/add-new">
                        <NewPlace />
                    </Route>
                    <Route exact path="/">
                        <Users />
                    </Route>
                <Redirect to="/" />
            </Switch>
           </Router>
};

export default App;
