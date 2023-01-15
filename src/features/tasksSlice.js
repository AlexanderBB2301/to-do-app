import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    //add tasks
    addTasks: (state, action) => {
      state.push(action.payload);
      return state;
    },
    //edit tasks
    editTasks: (state, action) => {
      return state.map((task) => {
        if (task.id === action.payload.id) {
          return {
            ...task,
            item: action.payload.item,
          };
        }
        return task;
      });
    },
    //completed tasks
    completedTasks: (state, action) => {
      return state.map((task) => {
        if (task.id === action.payload) {
          return {
            ...task,
            completed: true,
          };
        }
        return task;
      });
    },
    //delete tasks
    deleteTasks: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addTasks, editTasks, completedTasks, deleteTasks } =
  tasksSlice.actions;
export const reducer = tasksSlice.reducer;
