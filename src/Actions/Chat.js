import {
  ADD_MESSAGE,
  EDIT_MESSAGE,
  DELETE_MESSAGE,
  SET_LIKE,
  LOADED_MESSAGE
} from "./ChatTypes";

export const addMessage = data => ({
  type: ADD_MESSAGE,
  payload: data
});

export const editMessage = (id, data) => ({
  type: EDIT_MESSAGE,
  payload: {
    id,
    data
  }
});

export const deleteMessage = id => ({
  type: DELETE_MESSAGE,
  payload: {
    id
  }
});

export const setLike = id => ({
  type: SET_LIKE,
  payload: {
    id
  }
});

export const loadedMessage = data => ({
  type: LOADED_MESSAGE,
  payload: data
});
