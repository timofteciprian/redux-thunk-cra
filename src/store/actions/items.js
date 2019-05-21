export const actionTypes = {
  LOAD: "ITEMS_LOAD",
  LOAD_FULFILLED: "ITEMS_LOAD_FULFILLED",
  LOAD_FAILED: "ITEMS_LOAD_FAILED",

  DELETE: "ITEMS_DELETE",
  DELETE_FULFILLED: "ITEMS_DELETE_FULFILLED",
  DELETE_FAILED: "ITEMS_DELETE_FAILED",

  
};

export const load = () => ({
  type: actionTypes.LOAD
});
export const loadFulfilled = items => ({
  type: actionTypes.LOAD_FULFILLED,
  payload: { items }
});
export const loadFailed = error => ({
  type: actionTypes.LOAD_FAILED,
  payload: { error }
});
export const deleteItem = id => ({
  type: actionTypes.DELETE,
  payload: { id }
});
export const deleteFulfilled = () => ({
  type: actionTypes.DELETE_FULFILLED
});
export const deleteFailed = error => ({
  type: actionTypes.DELETE_FAILED,
  payload: { error }
});


/* es6 sintaxis
export const itemsFetchDataSuccess = (items) => ({
  type: 'IEMS_FETCH_DATA_SUCESS',
  items
})*/

export function itemsFetchData(url) {
  return (dispatch, state) => {
    console.log("State", state);
    dispatch(load());
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        // throw Error("Ooooops, ceva rau s-a intamplat");
        return response;
      })
      .then(response => response.json())
      .then(items => {
        // setTimeout(() => {
        dispatch(loadFulfilled(items));
        // }, 0);
      })
      .catch(error => {
        console.log("error", error);
        dispatch(loadFailed(error.message));
      });
  };
}

export function deleteItemThunk(id) {
  return (dispatch, state) => {
    console.log("State", state);
    dispatch(deleteItem(id));
    // @todo: implement delete request
    dispatch(deleteFulfilled());
    // dispatch(deleteFailed("Server error"));
  };
}

