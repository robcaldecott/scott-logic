import React, { Fragment } from "react";
import Card from "../components/Card";
import ToggleIcon from "../components/ToggleIcon";
import Photos from "./Photos";

// Render a photo album
export default class Album extends React.Component {
  constructor(props) {
    super(props);
    this.onToggle = this.onToggle.bind(this);
  }

  componentWillReceiveProps({ album }) {
    if (!this.props.album.toggled && album.toggled) {
      this.props.loadPhotos(album.id);
    }
  }

  onToggle() {
    this.props.toggle(this.props.album.id);
  }

  render() {
    const { album, thumbnails } = this.props;
    return (
      <Fragment>
        <Card style={{ marginTop: "1rem", position: "relative" }}>
          <ToggleIcon expanded={album.toggled} />
          <a className="mdc-card__primary-action" onClick={this.onToggle}>
            <div style={{ padding: "1rem" }}>{album.title}</div>
          </a>
        </Card>
        {album.toggled &&
          album.photos.length > 0 && (
            <Photos photos={album.photos} thumbnails={thumbnails} />
          )}
      </Fragment>
    );
  }
}
