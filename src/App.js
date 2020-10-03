import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CartContextProvider } from "./context/cartContext";

import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Profile from "./pages/Profile";
import MyLibrary from "./pages/MyLibrary";
import AddBook from "./pages/AddBook";
import DetailBuku from "./pages/DetailBuku";

import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/landing" component={Landing} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/mylibrary" component={MyLibrary} />
          <Route exact path="/addbook" component={AddBook} />
          <Route exact path="/detailbuku" component={DetailBuku} />
        </Switch>
      </BrowserRouter>
    </CartContextProvider>
  );
};

export default App;
