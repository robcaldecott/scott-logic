import React from "react";
import Button from "../components/Button";
import ButtonIcon from "../components/ButtonIcon";
import Album from "./Album";

// Render the Albums view
export default class Albums extends React.Component {
  constructor(props) {
    super(props);
    this.onThumbnails = this.onThumbnails.bind(this);
    this.onFullSize = this.onFullSize.bind(this);
  }

  onThumbnails() {
    this.props.setThumbnails(true);
  }

  onFullSize() {
    this.props.setThumbnails(false);
  }

  render() {
    const { albums, thumbnails, loadPhotos, toggle } = this.props;
    return (
      <div style={{ marginTop: "1rem" }}>
        <Button style={{ marginRight: "1rem" }} onClick={this.onThumbnails}>
          <ButtonIcon>view_comfy</ButtonIcon>
          Thumbnails
        </Button>
        <Button onClick={this.onFullSize}>
          <ButtonIcon>image</ButtonIcon>Full size
        </Button>

        {albums.map(album => (
          <Album
            key={album.id}
            album={album}
            thumbnails={thumbnails}
            loadPhotos={loadPhotos}
            toggle={toggle}
          />
        ))}
      </div>
    );
  }
}
