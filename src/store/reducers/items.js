import { actionTypes } from "../actions/items";

const initialState = {
  list: [],
  operations: {
    load: {
      isInProgress: false,
      hasError: false,
      error: null,
      completed: false
    },
    delete: {
      itemToBeDeleted: null,
      isInProgress: false,
      hasError: false,
      error: null,
      completed: false
    }
  }
};
export function items(state = initialState, { type, payload }) {
  let itemToBeDeleted = null;
  switch (type) {
    case actionTypes.LOAD:
      return {
        ...state,
        operations: {
          ...state.operations,
          load: {
            isInProgress: true,
            error: null,
            isCompleted: false
          }
        }
      };
    case actionTypes.LOAD_FULFILLED:
      return {
        ...state,
        list: payload.items,
        operations: {
          ...state.operations,
          load: {
            isInProgress: false,
            error: null,
            isCompleted: true
          }
        }
      };
    case actionTypes.LOAD_FAILED:
      return {
        ...state,
        operations: {
          ...state.operations,
          load: {
            isInProgress: false,
            error: payload.error,
            isCompleted: false
          }
        }
      };
    case actionTypes.DELETE:
      itemToBeDeleted = null;
      const items = state.list.filter(item => {
        if (item.id === payload.id) {
          itemToBeDeleted = item;
          return false;
        } else {
          return true;
        }
      });
      return {
        ...state,
        list: items,
        operations: {
          ...state.operations,
          delete: {
            itemToBeDeleted,
            isInProgress: true,
            error: null,
            isCompleted: false
          }
        }
      };
    case actionTypes.DELETE_FULFILLED:
      return {
        ...state,
        operations: {
          ...state.operations,
          delete: {
            isInProgress: false,
            error: null,
            isCompleted: true,
            itemToBeDeleted: null
          }
        }
      };
    case actionTypes.DELETE_FAILED:
      const undeletedItem = state.operations.delete.itemToBeDeleted;
      const list = state.list.push(undeletedItem);
      return {
        ...state,
        list,
        operations: {
          ...state.operations,
          delete: {
            isInProgress: false,
            error: payload.error,
            isCompleted: false
          }
        }
      };
    default:
      return state;
  }
}
