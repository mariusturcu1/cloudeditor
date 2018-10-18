const actionTypes = require("../actionTypes/addButton");

const addImage = (state, action) => {
  console.log(state);
  const newImage = { ...action.image };
  return { ...state, images: state.images.concat(newImage) };
};

const addButton = (state = { title: "Add Image", images: [] }, action) => {
  switch (action.type) {
    case actionTypes.ADD_IMAGE:
      return addImage(state, action);
    default:
      return state;
  }
};

module.exports = addButton;
