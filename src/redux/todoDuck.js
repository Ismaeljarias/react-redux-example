// CONSTANTS
const initialState = JSON.parse(localStorage.getItem("todos")) || [];
// const initialState = [];

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

// END CONSTANTS

// REDUCERS

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [action.payload, ...state];
    case DELETE_TODO:
      return state.filter((d) => d.id !== action.payload);

    default:
      return state;
  }
};

// END REDUCERS

// ACTIONS

export const addTodoAction = (data) => async (dispatch, getState) => {
  dispatch({
    type: ADD_TODO,
    payload: {
      id: Math.random(),
      todo: data,
    },
  });

  const { todoData } = await getState();
  localStorage.setItem("todos", JSON.stringify(todoData));
};

export const deleteTodoAction = (id) => async (dispatch, getState) => {
  dispatch({
    type: DELETE_TODO,
    payload: id,
  });

  const { todoData } = await getState();
  localStorage.setItem("todos", JSON.stringify(todoData));
};

// END ACTIONS
