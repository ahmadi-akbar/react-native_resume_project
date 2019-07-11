import types from "./types";

const someAction = data => ({
  type: types.ACTION,
  payload: data
});

export default { someAction };
