import { CHANGE_SEARCH_FIELD } from "./constants";

export const setSearchField = text => ({
  type: CHANGE_SEARCH_FIELD, // This is the action
  payload: text // this is the data that gets sent.
});
