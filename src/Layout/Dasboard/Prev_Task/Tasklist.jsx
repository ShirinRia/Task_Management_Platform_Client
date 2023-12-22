import { useEffect, useState } from "react";
import useTask from "../../../Hooks/useTask";
import Tasks from "./Tasks";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
const Tasklist = () => {

    const [tasks, refetch] = useTask();
    const [todo, settodo] = useState([])
    const [complete, setcomplete] = useState([])
    const [inprogress, setinprogress] = useState([])
    useEffect(() => {
        const filtered = tasks.filter(todotask => todotask.status === 'to-do')
        settodo(filtered)

        const inprogressfiltered = tasks.filter(inprogresstask => inprogresstask.status === 'inprogress')
        setinprogress(inprogressfiltered)

        const completefiltered = tasks.filter(completetask => completetask.status === 'complete')
        setcomplete(completefiltered)
    }, [tasks])
    // console.log(inprogress.length)
    return (
        <DndProvider backend={HTML5Backend}>
            <div className="w-full flex gap-2 justify-center border-2">
                <div className="w-1/3">
                    <h3 className="text-center bg-red-700 py-2 text-xl text-white">To-do Task</h3>

                    {
                        todo.length == 0 ? <Tasks key={'key'} task={{}} refetch={refetch}> </Tasks>

                            :

                            todo.map(task => <Tasks key={task._id} task={task} refetch={refetch}></Tasks>)
                    }

                </div>
                <div className="w-1/3"><h3 className="text-center bg-indigo-800 py-2 text-xl text-white">
                    Ongoing Task
                </h3>

                    {
                        inprogress.length == 0 ? <Tasks key={'key'} task={{}} refetch={refetch}> </Tasks>

                            :
                            inprogress.map(task => <Tasks key={task._id} task={task} refetch={refetch}></Tasks>)

                    }
                </div>
                <div className="w-1/3">
                    <h3 className="text-center bg-lime-600 py-2 text-xl text-white">
                        Completed Task
                    </h3>
                    {
                        complete.length == 0 ? <Tasks key={'key'} task={{}} refetch={refetch}> </Tasks>

                            :

                            complete.map(task => <Tasks key={task._id} task={task} refetch={refetch}></Tasks>)

                    }

                </div>
            </div>
        </DndProvider>



    );
};

export default Tasklist;