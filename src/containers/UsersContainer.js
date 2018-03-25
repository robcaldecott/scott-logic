import React from "react";
import Users from "../app/Users";
import { connect } from "react-redux";
import { actions } from "../reducers/users";

class UsersContainer extends React.Component {
  componentDidMount() {
    // Dispatch an action to fetch the users
    this.props.get();
  }

  render() {
    // Inject relevant props into the presentational component
    const { get, selectUser, ...other } = this.props;
    // Render the list of users
    return <Users onClick={selectUser} {...other} />;
  }
}

export default connect(
  state => ({
    users: state.users.users,
    selectedUser: state.users.selectedUser
  }),
  actions
)(UsersContainer);
