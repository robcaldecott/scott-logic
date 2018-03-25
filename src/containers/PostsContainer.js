import React from "react";
import Posts from "../app/Posts";
import { connect } from "react-redux";
import { actions } from "../reducers/posts";

class PostsContainer extends React.Component {
  componentWillMount() {
    this.props.get(this.props.userId);
  }

  render() {
    return (
      <Posts
        posts={this.props.posts}
        loadComments={this.props.loadComments}
        toggle={this.props.toggle}
      />
    );
  }
}

export default connect(
  state => ({
    userId: state.users.selectedUser.id,
    posts: state.posts
  }),
  actions
)(PostsContainer);
