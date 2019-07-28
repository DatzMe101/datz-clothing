import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shopPage.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (!userAuth) {
        this.setState({ currentUser: null });
        return;
      }
      const userRef = await createUserProfileDocument(userAuth);
      userRef.onSnapshot(snapshot => {
        debugger;
        this.setState({
          currentUser: {
            id: snapshot.id,
            ...snapshot.data()
          }
        });
      });
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header user={this.state.currentUser} />
        <Switch>
          <Route path="/shop" component={ShopPage} />
          <Route path="/sign-in" component={SignInAndSignUpPage} />
          <Route exact path="/" component={HomePage} />
        </Switch>
      </div>
    );
  }
}

export default App;
