import React, { useState } from "react";
import { connect } from "react-redux";
import EachTask from "./EachTask";
import {
  addTasks,
  editTasks,
  completedTasks,
  deleteTasks,
} from "../features/tasksSlice";

const mapStateToProps = (state) => {
  return {
    tasks: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (obj) => dispatch(addTasks(obj)),
    editTask: (obj) => dispatch(editTasks(obj)),
    completedTask: (id) => dispatch(completedTasks(id)),
    deleteTask: (id) => dispatch(deleteTasks(id)),
  };
};

const UserView = (props) => {
  const [orderTasks, setOrderTasks] = useState("all");

  return (
    <div className="userView">
      <div className="controlBtns">
        <button
          className="outstandingTasks btnStyle"
          onClick={() => setOrderTasks("outstanding")}
        >
          Outstanding
        </button>
        <button
          className="completedTasks btnStyle"
          onClick={() => setOrderTasks("completed")}
        >
          Complete
        </button>
        <button
          className="allTasks btnStyle"
          onClick={() => setOrderTasks("all")}
        >
          All
        </button>
      </div>
      <div className="orderedTasks">
        {props.tasks.length > 0 && orderTasks === "outstanding"
          ? props.tasks.map((item) => {
              return (
                //outstanding tasks
                item.completed === false && (
                  <div className="outstandingTaskList">
                    <EachTask
                      key={item.id}
                      item={item}
                      editTask={props.editTask}
                      completedTask={props.completedTask}
                      deleteTask={props.deleteTask}
                    />
                  </div>
                )
              );
            })
          : null}

        {props.tasks.length > 0 && orderTasks === "completed"
          ? props.tasks.map((item) => {
              return (
                //complete tasks
                item.completed === true && (
                  <div>
                    <EachTask
                      key={item.id}
                      item={item}
                      editTask={props.editTask}
                      completedTask={props.completedTask}
                      deleteTask={props.deleteTask}
                    />
                  </div>
                )
              );
            })
          : null}

        {props.tasks.length > 0 && orderTasks === "all"
          ? props.tasks.map((item) => {
              return (
                <div>
                  <EachTask
                    key={item.id}
                    item={item}
                    editTask={props.editTask}
                    completedTask={props.completedTask}
                    deleteTask={props.deleteTask}
                  />
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(UserView);
