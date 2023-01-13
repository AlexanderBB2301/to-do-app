import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { taskAdded } from "../features/tasksSlice";
const AddATask = () => {
  const dispatch = useDispatch();

  const [task, setTask] = useState("");
  const [completed, setCompleted] = useState("");
  const [priority, setPriority] = useState("");

  const onTaskEdited = (e) => setTask(e.target.value);
  const onCompletedEdited = (e) => setCompleted(e.target.value);
  const onPriorityEdited = (e) => setPriority(e.target.value);

  const canSaveTask = Boolean(task) && Boolean(priority);

  const onAddTaskToList = () => {
    if (canSaveTask) {
      dispatch(taskAdded(task, completed, priority));

      setTask("");
    }
  };

  //

  return (
    <section>
      <h2>Add a Task to Your List</h2>
      <form>
        <label htmlFor="enterTask">Task: </label>
        <input
          type="text"
          id="enterTask"
          name="enterTask"
          value={task}
          onChange={onTaskEdited}
        />
        <div className="completed">
          <button
            className="completedBtn"
            onChange={onCompletedEdited}
            type="button"
          >
            Task Complete
          </button>
        </div>
        <div className="priorities">
          <label htmlFor="enterPriority">
            <input
              name="priority"
              type="radio"
              value="high"
              checked={priority === "high"}
              onChange={onPriorityEdited}
            />
            High
          </label>
          <label>
            <input
              name="priority"
              type="radio"
              value="medium"
              checked={priority === "medium"}
              onChange={onPriorityEdited}
            />
            Medium
          </label>
          <label>
            <input
              name="priority"
              type="radio"
              value="low"
              checked={priority === "low"}
              onChange={onPriorityEdited}
            />
            Low
          </label>
        </div>

        <button
          type="button"
          onClick={onAddTaskToList}
          className="addTaskBtn"
          id="addTaskBtn"
          disabled={!canSaveTask}
        >
          Add Task
        </button>
      </form>
    </section>
  );
};

export default AddATask;
