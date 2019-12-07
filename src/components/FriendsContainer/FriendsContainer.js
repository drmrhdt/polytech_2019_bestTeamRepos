import React from "react";
import PropTypes from "prop-types";

import Friend from "./Friend";

import NoResults from "@components/NoResults";
import Button from "@components/Button";
import Loader from "@components/Loader";
import buttonTypes from "@config/buttonTypes";

import { connect } from "react-redux";
import { fetchFriends } from "@actions/friendsContainer";

import styles from "./FriendsContainer.module.scss";

class FriendsContainer extends React.Component {
  static propTypes = {
    friendsList: PropTypes.arrayOf(PropTypes.object),
    isLoading: PropTypes.bool.isRequired,
    error: PropTypes.string
  };

  static defaultProps = {
    error: null,
    friendsList: [],
    isLoading: true
  };

  state = {
    visible: 10
  };

  componentDidMount() {
    const { friendsList } = this.props;
    if (!friendsList.length) {
      this.props.fetchFriends();
    }
  }

  loadmore = () => {
    this.setState(old => {
      return { visible: old.visible + 5 };
    });
  };

  render() {
    const { friendsList, isLoading, error } = this.props;

    const hasMore = this.state.visible < friendsList.length;

    if (error) {
      return <div>{error}</div>;
    } else if (isLoading) {
      return <Loader />;
    } else {
      if (friendsList.length) {
        return (
          <div className={styles["friends-list-container"]}>
            {friendsList.slice(0, this.state.visible).map(friend => {
              return <Friend friendInfo={friend} key={friend.id} />;
            })}
            {hasMore && (
              <Button
                className={styles["friends-list-container__more-btn"]}
                onClick={this.loadmore}
                type={buttonTypes.secondary}
              >
                Показать ещё
              </Button>
            )}
          </div>
        );
      } else {
        return <NoResults children="Кажется, у тебя нет друзей" />;
      }
    }
  }
}

const mapStateToProps = ({ friendsList, isLoading, error }) => {
  return {
    ...friendsList,
    ...isLoading,
    ...error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchFriends: () => dispatch(fetchFriends())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendsContainer);
