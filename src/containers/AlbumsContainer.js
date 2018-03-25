import React from "react";
import Albums from "../app/Albums";
import { connect } from "react-redux";
import { actions } from "../reducers/albums";

class AlbumsContainer extends React.Component {
  componentDidMount() {
    this.props.get(this.props.userId);
  }

  render() {
    return <Albums {...this.props} />;
  }
}

export default connect(
  state => ({
    userId: state.users.selectedUser.id,
    albums: state.albums.albums,
    thumbnails: state.albums.thumbnails
  }),
  actions
)(AlbumsContainer);
