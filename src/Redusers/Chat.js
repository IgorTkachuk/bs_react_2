import {
  ADD_MESSAGE,
  EDIT_MESSAGE,
  DELETE_MESSAGE,
  SET_LIKE,
  LOADED_MESSAGE
} from "../Actions/ChatTypes";

import { genRandomId } from "../helpers/utils";

export default function(state = {}, action) {
  switch (action.type) {
    case LOADED_MESSAGE:
      return {
        message: action.payload
      };
    case ADD_MESSAGE:
      return {
        message: [
          ...state.message,
          { id: genRandomId(), message: action.payload.message, user: "anonym" }
        ]
      };
    case DELETE_MESSAGE:
      const { id } = action.payload;
      const filteredMessages = state.message.filter(
        message => message.id !== id
      );
      return {
        message: filteredMessages
      };
    default:
      return state;
  }
}
