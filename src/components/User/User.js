import React from "react";
import { useParams } from "react-router-dom";

import MainButton from "@components/MainButton";
import UserTabs from "./UserTabs";
import Avatar from "@components/Avatar";

import { connect } from "react-redux";
import friendsAccounts from "@data/YourFriendsInfo/mock.js";

import styles from "./User.module.scss";

function User(props) {
  let { id } = useParams();
  id = parseInt(id);

  const { name, surname, logoPath, isMyProfile } =
    props.profile.id === id
      ? props.profile
      : friendsAccounts.find(friend => friend.id === id);

  return (
    <div className={styles["user"]}>
      <Avatar className={styles["user__photo"]} src={logoPath} />
      <div className={styles["user__text-part"]}>
        <p className={styles["credentials"]}>
          {name} {surname}
        </p>
        <UserTabs isMyProfile={isMyProfile} id={id} />
        <MainButton className={styles["button-share"]}>Поделиться</MainButton>
      </div>
    </div>
  );
}

const mapStateToProps = store => {
  return {
    profile: store.profile
  };
};

export default connect(mapStateToProps)(User);
