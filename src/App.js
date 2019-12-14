import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Users from './pages/Users.page';
import NewPlace from "./pages/NewPlace.page";
import MainNavitation from "./components/Navigation/MainNavigation";

const App = () => {
    return <Router>
            <MainNavitation/>
            <main>
            <Switch>
                    <Route exact path="/places/add-new">
                        <NewPlace />
                    </Route>
                    <Route exact path="/">
                        <Users />
                    </Route>
                <Redirect to="/" />
            </Switch>
            </main>
           </Router>
};

export default App;
