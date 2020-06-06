import React, { Component } from 'react';
import Todolist from './components/Todolist';
import Form from './components/Form';
import Todoitemlist from './components/Todoitemlist';

class App extends Component {
  constructor(props) {
    super(props);

    this.id = 3;
    this.state = {
      addInput: '',
      searchInput: '',
      todos: [
        { id: 0, text: '리액트', checked: false },
        { id: 1, text: '리액트', checked: true },
        { id: 2, text: '리액트', checked: false },
      ],
    };
  }
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

  render() {
    const { addInput, searchInput, todos } = this.state;
    const searchResult = todos.filter(
      (todo) => todo.text.indexOf(searchInput) !== -1
    );
    const {
      handleChange,
      handleCreate,
      //handleKeyPress,
      handleToggle,
      handleRemove,
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
          />
        }
      >
        <Todoitemlist
          todos={searchResult}
          onToggle={handleToggle}
          onRemove={handleRemove}
        />
      </Todolist>
    );
  }
}

export default App;
