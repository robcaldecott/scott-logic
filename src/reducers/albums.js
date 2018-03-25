import types from "./types";
import { albums, photos } from "../api";

const setPhotos = (albums, albumId, photos) =>
  albums.map(album => {
    if (album.id === albumId) {
      return { ...album, photos };
    }
    return album;
  });

const initialState = () => ({
  albums: [],
  thumbnails: true
});

const reducer = (state = initialState(), action) => {
  switch (action.type) {
    case types.REQUEST_ALBUMS:
    case types.SELECT_USER:
      return { ...state, albums: [] };
    case types.RECEIVE_ALBUMS:
      return {
        ...state,
        albums: action.albums.map(album => ({
          ...album,
          toggled: false,
          photos: []
        }))
      };
    case types.TOGGLE_ALBUM:
      return {
        ...state,
        albums: state.albums.map(album => {
          if (album.id === action.albumId) {
            return { ...album, toggled: !album.toggled };
          }
          return album;
        })
      };
    case types.REQUEST_PHOTOS:
      return {
        ...state,
        albums: setPhotos(state.albums, action.albumId, [])
      };
    case types.RECEIVE_PHOTOS:
      return {
        ...state,
        albums: setPhotos(state.albums, action.albumId, action.photos)
      };
    case types.THUMBNAILS:
      return {
        ...state,
        thumbnails: action.thumbnails
      };
    default:
      return state;
  }
};

export default reducer;

export const actions = {
  get: userId => async dispatch => {
    dispatch({ type: types.REQUEST_ALBUMS });
    dispatch({ type: types.RECEIVE_ALBUMS, albums: await albums(userId) });
  },
  toggle: albumId => ({ type: types.TOGGLE_ALBUM, albumId }),
  loadPhotos: albumId => async dispatch => {
    dispatch({ type: types.REQUEST_PHOTOS, albumId });
    dispatch({
      type: types.RECEIVE_PHOTOS,
      albumId,
      photos: await photos(albumId)
    });
  },
  setThumbnails: thumbnails => ({
    type: types.THUMBNAILS,
    thumbnails
  })
};
