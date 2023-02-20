import React, { ChangeEvent, FC, useState } from 'react'
import { ITask } from '../../Interfaces'
import Task from './Task'

const MyApp: FC = () => {
  const [task, setTask] = useState<string>('')
  const [todos, setTodos] = useState<ITask[]>([])
  const [isEdit, setEdit] = useState<boolean>(false)
  const [currentTodo, setCurrentTodo] = useState<Date>()

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === 'task') setTask(e.target.value)
   
  }

  const addTask = (e: ChangeEvent<HTMLFormElement>): any => {
    e.preventDefault()
    if (isEdit) {
      setTodos(
        todos.map(todo => {
          if (todo.id === currentTodo) return { ...todo, taskName: task }

          return todo
        })
      )
      setTask('')
      setEdit(false)
    } else {
      const newTask = { id: new Date(), taskName: task,  }
      setTodos([...todos, newTask])
      console.log(todos)
    }
  }

  const deleteTask = (taskNameToDelete: string): void => {
    setTodos(
      todos.filter(task => {
        return task.taskName !== taskNameToDelete
      })
    )
  }

  const editTask = (taskToEdit: string, id: Date): void => {
    console.log(taskToEdit, id)
    setEdit(true)
    setTask(taskToEdit)
    setCurrentTodo(id)
  }

  return (
    <>
      <form onSubmit={addTask}>
        <input
          placeholder='enter text'
          name='task'
          onChange={handleChange}
          value={task}
        />

        <button type='submit'>{isEdit ? 'Edit' : 'Add Task'}</button>
      </form>
      {todos.map((task: ITask, key: number) => {
        return (
          <Task
            key={key}
            task={task}
            deleteTask={deleteTask}
            editTask={editTask}
            isEdit={isEdit}
          />
        )
      })}
    </>
  )
}

export default MyApp
