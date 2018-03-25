import React from "react";
import Card from "../components/Card";
import ToggleIcon from "../components/ToggleIcon";
import Comment from "./Comment";
import Multiline from "../components/Multiline";

// Posts that load comments when expanded
export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.onToggle = this.onToggle.bind(this);
  }

  componentWillReceiveProps({ post }) {
    if (!this.props.post.toggled && post.toggled) {
      this.props.loadComments(post.id);
    }
  }

  onToggle() {
    this.props.toggle(this.props.post.id);
  }

  render() {
    const { post } = this.props;
    return (
      <Card style={{ marginTop: "1rem", position: "relative" }}>
        <ToggleIcon expanded={post.toggled} />

        <a className="mdc-card__primary-action" onClick={this.onToggle}>
          <div style={{ padding: "1rem" }}>
            <h2 className="mdc-typography--title">{post.title}</h2>
            <Multiline>{post.body}</Multiline>
          </div>

          {post.toggled &&
            post.comments.map(comment => (
              <Comment key={comment.id} comment={comment} />
            ))}
        </a>
      </Card>
    );
  }
}
