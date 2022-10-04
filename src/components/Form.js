import React, { useState } from "react";

function Form(props) {
  const [name, setName] = useState("")


  //This function should prevent the default behavior of the submit event
  function handleSubmit(e) {
  e.preventDefault();

  props.addTask(name);
  setName("");
  }
  //This function displays and stores user input
  function handleChange(e) {
    setName(e.target.value);
  }
  
  return (
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
  );
}

export default Form;