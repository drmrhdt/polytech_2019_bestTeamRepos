import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "@components/Button";
import Badge from "../Badge";
import giftIcon from "@img/iconGift.png";
import styles from "../StatusButtons.module.scss";

export default class StatusButtonsMyPage extends Component {
  static propTypes = {
    isBooked: PropTypes.bool,
    className: PropTypes.string
  };

  static defaultProps = {
    isBooked: null,
    className: null
  };

  render() {
    const { isBooked } = this.props;

    const isBookedBadge = isBooked ? (
      <Badge
        className={styles["booked"]}
        src={giftIcon}
        children="Кто-то хочет тебе это подарить"
      />
    ) : null;

    return (
      <div className={styles["status__group"]}>
        <Button type="secondary" children="Удалить" /> {isBookedBadge}
      </div>
    );
  }
}
