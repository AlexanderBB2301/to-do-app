import React, { useState, useRef } from "react";
import { connect } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addTasks } from "../features/tasksSlice";

const mapStateToProps = (state) => {
  return {
    tasks: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (obj) => dispatch(addTasks(obj)),
  };
};

const Tasks = (props) => {
  const [task, setTask] = useState("");

  const addATask = () => {
    if (task === "") {
      alert("Please enter your task");
    } else {
      props.addTask({
        id: nanoid(),
        item: task,
        completed: false,
      });
      setTask("");
    }
  };
  console.log(task);

  const onChangeHandler = (e) => setTask(e.target.value);
  // console.log("props from store", props);

  return (
    <div className="addTasks">
      <input
        type="text"
        className="addTaskInput"
        value={task}
        onChange={onChangeHandler}
        placeholder="Add a New Task"
      />

      <button className="addTaskBtn btnStyle" onClick={() => addATask()}>
        Add Task
      </button>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
