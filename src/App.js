import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Users from './pages/Users.page';
import NewPlace from "./pages/NewPlace.page";
import MainNavitation from "./components/Navigation/MainNavigation";

const App = () => {
    return (
        <Router>
            <MainNavitation />
            <main>
                <Switch>
                    <Route path="/" exact>
                        <Users />
                    </Route>
                    <Route path="/places/new" exact>
                        <NewPlace />
                    </Route>
                    <Redirect to="/" />
                </Switch>
            </main>
        </Router>
    );
};

export default App;
