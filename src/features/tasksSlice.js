import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    id: 0,
    task: "Dummy task",
    date: sub(new Date(), { minutes: 3 }).toISOString(),
    completed: false,
    priority: "Medium",
  },
  {
    id: 1,
    task: "Dummy task 2",
    date: sub(new Date(), { minutes: 6 }).toISOString(),
    completed: false,
    priority: "Low",
  },
];

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    taskAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(task, date, completed, priority) {
        return {
          payload: {
            id: nanoid(),
            task,
            date: new Date().toISOString(),
            completed,
            priority,
          },
        };
      },
    },
  },
});

export const selectAllTasks = (state) => state.tasks;
export const { taskAdded } = tasksSlice.actions;
export default tasksSlice.reducer;
