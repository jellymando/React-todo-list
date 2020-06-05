import React, { Component } from 'react';
import Todolist from './components/Todolist';
import Form from './components/Form';
import Todoitemlist from './components/Todoitemlist';

class App extends Component {
  id = 3;
  state = {
    addInput: '',
    searchInput: '',
    todos: [
      { id: 0, text: '리액트', checked: false },
      { id: 1, text: '리액트', checked: true },
      { id: 2, text: '리액트', checked: false },
    ],
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleCreate = () => {
    const { addInput, todos } = this.state;
    //console.log(addInput);
    if (this.state.addInput !== '') {
      this.setState({
        addInput: '', //input 내용 비우기
        todos: todos.concat({
          id: this.id++,
          text: addInput,
          checked: false,
        }),
      });
    }
  };
  // handleKeyPress = (e) => {
  //   if (e.key === 'Enter') {
  //     this.handleCreate();
  //   }
  // };
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

  handleSearch = (value) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter((todo) => todo.text === value),
    });
  };

  render() {
    const { addInput, searchInput, todos } = this.state;
    const {
      handleChange,
      handleCreate,
      //handleKeyPress,
      handleToggle,
      handleRemove,
      handleSearch,
    } = this;
    return (
      <Todolist
        form={
          <Form
            addValue={addInput}
            searchValue={searchInput}
            onChange={handleChange}
            onCreate={handleCreate}
            //onKeyPress={handleKeyPress}
            onSearch={handleSearch}
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
