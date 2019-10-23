import React from "react";
import { Route } from "react-router-dom";
// import Container from "@components/Container";
import User from "@components/User";
import styles from "./FriendPage.module.scss";

class FriendPage extends React.Component {
  render() {
    return (
      <div className={styles["my-page-container"]}>
        <Route path="/myfriendspage" component={User} />
        {/* <Route exact path="/myfriendspage" component={Container} /> */}
        {/* <Route exact path="/myfriendspage/from-me" component={Container} /> */}
      </div>
    );
  }
}

export default FriendPage;
