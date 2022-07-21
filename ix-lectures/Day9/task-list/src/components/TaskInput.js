import React, { useState } from 'react';

import { Task } from '../models/task';

export default function TaskInput(props) {

  const [taskName, setTaskName] = useState('');

  function onFormSubmit(event) {
    console.log(event);
    event.preventDefault();

    const task = new Task(
      null,
      taskName,
      false,
    );

    props.onTaskCreated(task);

    setTaskName('');
  }

  return (
    <div className='mt-4'>
      <form onSubmit={onFormSubmit}>

        <div className="input-group mb-3">
          <input
            value={taskName}
            onChange={(e) => {
              console.log(e);
              setTaskName(e.target.value)
            }}
            type="text"
            className="form-control"
            placeholder="Task name" />
          <button
            className="btn btn-outline-secondary"
            type="submit">
            +
          </button>
        </div>

      </form>
    </div>
  )
}
