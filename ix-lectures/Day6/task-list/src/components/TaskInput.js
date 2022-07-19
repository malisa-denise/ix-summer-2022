import React, { useState } from 'react';

import { Task } from '../models/task';

export default function TaskInput() {

  const [taskName, setTaskName] = useState('');

  function onAddButtonClicked(event) {

    const task = new Task(
      'some generate value',
      taskName,
      false,
    );
  }

  return (
    <div className='mt-4'>

      <div className="input-group mb-3">
        <input
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          type="text"
          className="form-control"
          placeholder="Task name" />
        <button
          onClick={onAddButtonClicked}
          className="btn btn-outline-secondary"
          type="button">
          +
        </button>
      </div>

    </div>
  )
}
