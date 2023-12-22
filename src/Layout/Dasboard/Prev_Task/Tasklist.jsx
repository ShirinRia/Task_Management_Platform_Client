
import { useEffect, useState } from "react";
import useTask from "../../../Hooks/useTask";
import Tasks from "./Tasks";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
const Tasklist = () => {

    const [tasks, refetch] = useTask();
    const [todo,settodo]=useState([])
    const [complete,setcomplete]=useState([])
    const [inprogress,setinprogress]=useState([])
   useEffect(()=>{
    const filtered = tasks.filter(todotask => todotask.status === 'to-do')
    settodo(filtered)
   
    const inprogressfiltered = tasks.filter(inprogresstask => inprogresstask.status === 'inprogress')
    setinprogress(inprogressfiltered)
    
    const completefiltered = tasks.filter(completetask => completetask.status === 'complete')
    setcomplete(completefiltered)
   },[tasks])
    console.log(tasks)
    return (
        <DndProvider backend={HTML5Backend}>
            <div className="flex gap-2 justify-center">
                <div><h3 className="text-center bg-red-700 py-2 text-xl text-white">To-do Task</h3>

                    {
                        todo.map(task => <Tasks key={task} task={task} refetch={refetch}></Tasks>)
                    }

                </div>
                <div><h3 className="text-center bg-indigo-800 py-2 text-xl text-white">
                    Ongoing Task
                </h3>

                    {
                        inprogress.map(task => <Tasks key={task} task={task} refetch={refetch}></Tasks>)
                    }
                </div>
                <div>
                    <h3 className="text-center bg-lime-600 py-2 text-xl text-white">
                        Completed Task
                    </h3>
                    {
                        complete.map(task => <Tasks key={task} task={task} refetch={refetch}></Tasks>)
                    }
                </div>
            </div>
        </DndProvider>



    );
};

export default Tasklist;