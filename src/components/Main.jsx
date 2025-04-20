import React, { useEffect, useState } from "react";
import "./main.css";
import { v4 as uuidv4 } from "uuid";

const Main = () => {
  const [input, setInput] = useState(""); /*-- To Write in Input --*/
  const [todo, setTodo] = useState([]); /*-- To Add Task --*/

  /*---- To Run the ToDo App Once ----*/

  useEffect(() => {
    let todoString = localStorage.getItem("todo");
    if (todoString) {
      let todo = JSON.parse(localStorage.getItem("todo"));
      setTodo(todo);
    }
  }, []);

  /*---- Save the Data to LocalStorage ----*/

  const saveData = (params) => {
    localStorage.setItem("todo", JSON.stringify(todo));
  };

  /*---- Add Data to Task list ----*/

  const handleAdd = () => {
    setTodo([...todo, { id: uuidv4(), input, isCompleted: false }]);
    setInput("");
    saveData();
  };

  /*---- Edit Data from Task List ----*/

  const handleEdit = (e, id) => {
    let t = todo.filter((item) => {
      return item.id === id;
    });
    let newTodo = todo.filter((item) => {
      return item.id !== id;
    });
    setTodo(newTodo);
    setInput(t[0].input);
    saveData();
  };

  /*---- Delete Data from Task List ----*/

  const handleDel = (e, id) => {
    let confirmDelete = window.confirm(
      "Are you sure do you want to delete this task"
    );
    if (confirmDelete) {
      let newTodo = todo.filter((item) => {
        return item.id !== id;
      });
      setTodo(newTodo);
      saveData();
    }
  };

  /*---- Checked the Task after completed ----*/

  const handleOnCheck = (e) => {
    let id = e.target.name;
    let index = todo.findIndex((item) => {
      return item.id === id;
    });
    let newTodo = [...todo];
    newTodo[index].isCompleted = !newTodo[index].isCompleted;
    setTodo(newTodo);
    saveData();
  };

  /*--- Edit in Input Text ---- */

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="main">
      <div className="mainTask">
        <div className="heading">
          <h1>let's Manage your Daily Task at one place</h1>
        </div>
        <div className="inputTask">
          <div className="input">
            <input
              onChange={handleChange}
              value={input}
              type="text"
              placeholder="Write your Task Here..."
            />
          </div>
          <div className="saveBtn">
            <button
              onClick={handleAdd}
              disabled={input.trim() === ""}
              style={{
                color: input.trim() === "" ? "grey" : "black",
                cursor: input.trim() === "" ? "not-allowed" : "pointer",
              }}
            >
              Add
            </button>
          </div>
        </div>
        <div className="taskList">
          <div className="taskListHeading">
            <h2>Task List</h2>
          </div>
          {todo.length === 0 ? (
            <div className="noTsk">
              <p className="ntsk">No Task is Available Now !!!</p>
            </div>
          ) : (
            <div className="taskLists">
              {todo.map((item) => {
                return (
                  <div key={item.id} className="tskLst">
                    <div className="checkbox">
                      <input
                        type="checkbox"
                        name={item.id}
                        onChange={handleOnCheck}
                        checked={item.isCompleted}
                      />
                    </div>
                    <div
                      style={{
                        textDecoration: item.isCompleted ? "line-through" : "",
                        color: item.isCompleted ? "grey" : "black",
                      }}
                      className="tskLstInp"
                    >
                      {item.input}
                    </div>
                    <div className="tskBtn">
                      <div className="editBtn">
                        <button
                          onClick={(e) => {
                            handleEdit(e, item.id);
                          }}
                          disabled={item.isCompleted}
                        >
                          Edit
                        </button>
                      </div>
                      <div className="delBtn">
                        <button
                          onClick={(e) => {
                            handleDel(e, item.id);
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Main;
