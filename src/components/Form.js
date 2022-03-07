import React, { useState } from 'react';

function Form(props) {
    //console.log(props);

    function handleChange(event) {
      //console.log('Typing!');
      setName(event.target.value);
    }

    const [name, setName] = useState('');//ustawiamy wartosc name jako ''
    
    function handleSubmit(e) {
        e.preventDefault();
        //props.addTask("Say hello!");
        //alert('Hello, world!');
        props.addTask(name);
        setName("");
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