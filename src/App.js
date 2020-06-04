import React, { Component } from 'react';
import Todolist from './components/Todolist';
import Form from './components/Form';
import Todoitemlist from './components/Todoitemlist';

class App extends Component {
  id = 3;
  state = {
    input: '',
    todos: [
      { id: 0, text: '리액트', checked: false },
      { id: 1, text: '리액트', checked: true },
      { id: 2, text: '리액트', checked: false },
    ],
  };
  handleChange = (e) => {
    this.setState({
      input: e.target.value,
    });
  };
  handleCreate = () => {
    const { input, todos } = this.state;
    if (this.state.input != '') {
      this.setState({
        input: '', //input 내용 비우기
        todos: todos.concat({
          id: this.id++,
          text: input,
          checked: false,
        }),
      });
    }
  };
  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleCreate();
    }
  };
  handleToggle = (id) => {
    const { todos } = this.state;
    const index = todos.findIndex((todo) => todo.id === id);
    const selected = todos[index];
    const nextTodos = [...todos]; //todos 복사
    nextTodos[index] = {
      ...selected,
      checked: !selected.checked,
    };

    this.setState({
      todos: nextTodos,
    });
  };
  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter((todo) => todo.id !== id),
    });
  };

  render() {
    const { input, todos } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove,
    } = this;
    return (
      <Todolist
        form={
          <Form
            value={input}
            onChange={handleChange}
            onCreate={handleCreate}
            onKeyPress={handleKeyPress}
          />
        }
      >
        <Todoitemlist
          todos={todos}
          onToggle={handleToggle}
          onRemove={handleRemove}
        />
      </Todolist>
    );
  }
}

export default App;
