import React from "react";
import Post from "./Post";

// All the posts for the currently selected user
const Posts = ({ posts, loadComments, toggle }) =>
  posts.map(post => (
    <Post
      key={post.id}
      post={post}
      loadComments={loadComments}
      toggle={toggle}
    />
  ));

export default Posts;
