import React from 'react';
import '../assets/css/style.css';

const Todolist = ({ form, children }) => {
  return (
    <div className="container">
      <div className="title">
        <h1>Todo List</h1>
      </div>
      <div className="form-wrap">{form}</div>
      <div className="todo-wrap">{children}</div>
    </div>
  );
};

export default Todolist;
