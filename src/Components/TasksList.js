import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { changeDone, deleteTask } from "../Redux/Actions"

const TasksList=()=>{
    const tasks = useSelector(state=>state.tasks)
    const dispatch = useDispatch()
    const [test,setTest] = useState('ALL')
    return(
        <div>
            <button onClick={()=>setTest('ALL')}>All</button>
            <button onClick={()=>setTest('DONE')}>Done</button>
            <button onClick={()=>setTest('UNDONE')}>Undone</button>
            {   test == 'ALL' ?
                tasks.map(task=> 
                <div>
                    <h2>{task.text}</h2>
                    <h3>{task.isDone ? "TRUE" : "FALSE"}</h3>
                    <button onClick={()=>dispatch(deleteTask(task.id))}>Delete</button>
                    <button onClick={()=> dispatch(changeDone(task.id))}>Done</button>
                </div>)
                : test == "DONE" ? 
                tasks.filter(el=> el.isDone == true).map(task=> 
                    <div>
                        <h2>{task.text}</h2>
                        <h3>{task.isDone ? "TRUE" : "FALSE"}</h3>
                        <button onClick={()=>dispatch(deleteTask(task.id))}>Delete</button>
                        <button onClick={()=> dispatch(changeDone(task.id))}>Done</button>
                    </div>)
                :
                tasks.filter(el=> el.isDone == false).map(task=> 
                    <div>
                        <h2>{task.text}</h2>
                        <h3>{task.isDone ? "TRUE" : "FALSE"}</h3>
                        <button onClick={()=>dispatch(deleteTask(task.id))}>Delete</button>
                        <button onClick={()=> dispatch(changeDone(task.id))}>Done</button>
                    </div>
                )
            }
        </div>
    )
}

export default TasksList