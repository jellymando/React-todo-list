import React from 'react';

const Form = ({ addValue, searchValue, onChange, onCreate }) => {
  return (
    <div>
      <div className="form">
        <input value={addValue} name="addInput" onChange={onChange} />
        <button type="button" className="add-btn" onClick={onCreate}>
          추가
        </button>
      </div>
      <div className="form">
        <input value={searchValue} name="searchInput" onChange={onChange} />
      </div>
    </div>
  );
};

export default Form;
