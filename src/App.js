import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shopPage.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (!userAuth) {
        setCurrentUser(null);
        return;
      }
      const userRef = await createUserProfileDocument(userAuth);
      userRef.onSnapshot(snapshot => {
        setCurrentUser({
          id: snapshot.id,
          ...snapshot.data()
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
        <Header />
        <Switch>
          <Route path="/shop" component={ShopPage} />
          <Route path="/sign-in" component={SignInAndSignUpPage} />
          <Route exact path="/" component={HomePage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  null,
  mapDispatchToProps
)(App);
