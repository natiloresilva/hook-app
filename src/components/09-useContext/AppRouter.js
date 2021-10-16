import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import { AboutScreen } from "./AboutScreen";
import { HomeScreen } from "./HomeScreen";
import { LoginScreen } from "./LoginScreen";
import { NavBar } from "./NavBar";

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBar />

                <div className='container'>
                    <Switch>
                        <Route path="/about" component={AboutScreen} />
                        <Route path="/login" component={LoginScreen} />
                        <Route path="/" component={HomeScreen} />{" "}
                        {/* Va al final porque sino fallarán las rutas, otra solución es poner <Route exact path='/' component={HomeScreen} /> */}
                        {/*<Route component={HomeScreen} />  Si no se encuentra el path, siempre nos dirigirá a Home /> .También podemos usar el Redirect */}
                        <Redirect to="/" />
                    </Switch>
                </div>
            </div>
        </Router>
    );
};
