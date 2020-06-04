import React, { Component } from 'react';

class Todoitem extends Component {
  render() {
    const { text, checked, id, onToggle, onRemove } = this.props;
    return (
      <div className="todo-item" onClick={() => onToggle(id)}>
        <button
          type="button"
          className="remove"
          onClick={(e) => {
            e.stopPropagation();
            onRemove(id);
          }}
        >
          삭제
        </button>
        <p className={`todo-text ${checked ? 'checked' : ''}`}>{text}</p>
        {checked && <span className="check-mark"></span>}
      </div>
    );
  }
}

export default Todoitem;
