import React from "react";

import { selectAllTasks } from "../features/tasksSlice";
import { useSelector } from "react-redux";

const TaskList = () => {
  const tasks = useSelector(selectAllTasks);

  const tasksRendered = tasks.map((task) => (
    <article key={task.id}>
      <h3>{task.task}</h3>
    </article>
  ));
  return (
    <section>
      <h2>Task List</h2>

      {tasksRendered}
    </section>
  );
};

export default TaskList;
