import React, { useRef } from "react";

const EachTask = (props) => {
  const { item, editTask, completedTask, deleteTask } = props;

  const taskInputRef = useRef(true);

  const adjustFocus = () => {
    taskInputRef.current.disabled = false;
    taskInputRef.current.focus();
  };

  const edit = (id, value, e) => {
    if (e.which === 13) {
      editTask({ id, item: value });
      taskInputRef.current.disabled = true;
    }
  };

  // let textColor;
  // let blah = (props) => {
  //   props.tasks.map((item) => {
  //     if (item.completed === true) {
  //       textColor = "green";
  //     } else if (item.completed === false) {
  //       textColor = "red";
  //     }
  //   });
  // };
  let textColor;

  item.completed === true ? (textColor = "green") : (textColor = "red");

  return (
    <ul className="taskList">
      {/* <li key={item.id}> */}
      <li key={item.id} className="taskItem">
        <textarea
          style={{ color: textColor }}
          className="taskTextArea"
          ref={taskInputRef}
          //   diasbled={taskInputRef}
          disabled={true}
          defaultValue={item.item}
          onKeyDown={(e) => edit(item.id, taskInputRef.current.value, e)}
        />
        <button className="editBtn" onClick={() => adjustFocus()}>
          Edit
        </button>
        <button className="completeBtn" onClick={() => completedTask(item.id)}>
          Complete
        </button>
        <button className="deleteBtn" onClick={() => deleteTask(item.id)}>
          Delete
        </button>
      </li>
    </ul>
  );
};

export default EachTask;
