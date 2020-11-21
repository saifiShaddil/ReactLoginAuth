import React, { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import "./css/app.css";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Home from "./components/Home";

function App() {
  const [{ user }, dispatch] = useStateValue();
  //piece of code which run when condition is met

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //logged in user
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      //any cleanup go in here
      unsubscribe();
    };
  }, []);

  return (
    <>
      <div className="app">
        <Switch>
          <Route exact path="/login" >
            <div className="login">
              <section className="login__sidebar">
                <img src='https://images.unsplash.com/photo-1547658718-1cdaa0852790?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80' alt="side" />
              </section>
              <Login />
            </div>
            </Route>
            <Route exact path="/register">
            <div className="register">
              <section className="register__sidebar">
                <img src='https://images.unsplash.com/photo-1547658718-1cdaa0852790?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80' alt="side" />
              </section>
              <Register />
            </div>
            </Route>
            <Route exact path="/" >
              <Home />
            </Route>
            <Redirect to="/" />
          </Switch>
      </div>
    </>
  );
}

export default App;
