import React from 'react'
import { ITask } from '../../Interfaces'

interface Props{
task:ITask,
deleteTask(taskNameToDelete:string):void,
editTask(taskNameToEdit:string,id:Date):void,
isEdit:boolean
}

const Task = ({task,deleteTask,editTask,isEdit}:Props) => {
  return (
    <div>{task.taskName}
    <button style={{margin:'22px'}} onClick={()=>{editTask(task.taskName,task.id)}}>Edit</button>
    <button onClick={()=>{deleteTask(task.taskName)}}>Delete</button>
    </div>
  )
}

export default Task