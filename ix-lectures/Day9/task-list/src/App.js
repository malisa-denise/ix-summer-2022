import React, { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'

import TaskInput from './components/TaskInput';
import TaskTable from './components/TaskTable';

import taskService from './services/task.service';

export default function App() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  async function fetchTasks() {
    try {
      const tasks = await taskService.readTasks();
      setTasks(tasks);
    } catch(err) {
      console.log(err);
    }
  }

  async function onTaskCreated(task) {
    try {
      task = await taskService.createTask(task);

      // update the tasks state with the new task
      const newTasks = [...tasks, task];
      setTasks(newTasks);
    } catch (err) {
      console.log(err);
    }
  }

  async function onTaskUpdated(task) {
    try {
      task = await taskService.updateTask(task);

      const newTasks = tasks.map((t) => {
        return t.id === task.id ? task : t;
      });
      setTasks(newTasks);
    } catch(err) {
      console.log(err);
    }
  }

  async function onTaskRemove(task) {
    try {
      await taskService.deleteTask(task);

      const newTasks = tasks.filter((t) => {
        return t.id !== task.id;
      });
      setTasks(newTasks);
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <div className='container mt-5'>
      <div className='card card-body text-center'>
        <h1>Task List</h1>
        <hr></hr>
        <div>
          Our Simple Task List
        </div>

        <TaskInput onTaskCreated={onTaskCreated} />

        <TaskTable
          tasks={tasks}
          onTaskUpdated={onTaskUpdated}
          onTaskRemove={onTaskRemove}
        />

      </div>
    </div>
  )
}
