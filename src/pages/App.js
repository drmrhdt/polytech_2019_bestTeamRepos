import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Routes from "@config/routes.js";
import FriendList from "./FriendList";
import { connect } from "react-redux";
import { apiAuth } from "@actions/userId";
import { fetchAccountInfo } from "@actions/accountInfoHeader";
import { fetchHeaderFriends } from "@actions/friendsHeader";
import Main from "./Main";
import Profile from "./Profile";

import Header from "@components/Header";

import "@constantcss/constants.scss";
import styles from "./App.module.scss";

class App extends Component {
  async componentDidMount() {
    try {
      this.props.fetchAccountInfo();
      this.props.fetchHeaderFriends();
      await this.props.apiAuth();
      console.log(this.props.userId);
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    const { isLoading } = this.props;
    if (isLoading) return <div className={styles["app"]}></div>;

    return (
      <div className={styles["app"]}>
        <Header />
        <Switch>
          <Route exact path={Routes.mainPage} render={props => <Main />} />
          <Route path={Routes.friendListPage} component={FriendList} />
          <Route path={Routes.profile.path} render={props => <Profile />} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ userId }) => {
  return {
    ...userId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    apiAuth: () => dispatch(apiAuth()),
    fetchAccountInfo: () => dispatch(fetchAccountInfo()),
    fetchHeaderFriends: () => dispatch(fetchHeaderFriends())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
