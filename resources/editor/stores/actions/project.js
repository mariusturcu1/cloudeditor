const {
  CHANGE_PROJECT_TITLE,
  ADD_OBJECT,
  ADD_OBJECT_TO_PAGE
} = require("../actionTypes/project");
const { createActions } = require("redux-actions");

const { changeProjectTitle, addObject, addObjectToPage } = createActions(
  CHANGE_PROJECT_TITLE,
  ADD_OBJECT,
  ADD_OBJECT_TO_PAGE
);

module.exports = {
  changeProjectTitle,
  addObject,
  addObjectToPage
};
