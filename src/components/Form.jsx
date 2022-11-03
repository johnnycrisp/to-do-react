import React, { useState } from "react";

const Form = ({onSubmit}) => {

const [name, setName] = useState('');

    function handleChange(e) {
        setName(e.target.value);
}



function handleSubmit(e) {
    if(name !== ""){
  e.preventDefault();
  onSubmit(name);
  setName("");} else {
    alert('Type something')
  }
}

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            What needs to be done?
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
          value={name}
          onChange={handleChange}

        />
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
    </div>
  )
}

export default Form