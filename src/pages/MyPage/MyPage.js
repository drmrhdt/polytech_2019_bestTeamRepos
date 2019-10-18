import React from "react";
import { Route } from "react-router-dom";
import User from "@components/User";
import GiftsMyContainer from "@components/GiftsMyContainer";
// import Loader from "@components/Loader";
import "./MyPage.css";

class MyPage extends React.Component {
  render() {
    return (
      <div className="my-page-container">
        <Route path="/mypage" component={User} />
        <Route path="/mypage" component={GiftsMyContainer} />
        {/* <Loader /> */}
      </div>
    );
  }
}

export default MyPage;
