
import useTask from "../../../Hooks/useTask";
import Tasks from "./Tasks";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
const Tasklist = () => {

    const [tasks, refetch] = useTask();
    console.log(tasks)
    return (
        <DndProvider backend={HTML5Backend}>
            <div className="flex gap-2 justify-center">
                <div><h3 className="text-center bg-red-700 py-2 text-xl text-white">To-do Task</h3>

                    {
                        tasks.map(task => <Tasks key={task} task={task}></Tasks>)
                    }

                </div>
                <div><h3 className="text-center bg-indigo-800 py-2 text-xl text-white">
                    Ongoing Task
                </h3>

                    {
                        tasks.map(task => <Tasks key={task} task={task}></Tasks>)
                    }
                </div>
                <div>
                    <h3 className="text-center bg-lime-600 py-2 text-xl text-white">
                        Completed Task
                    </h3>
                    {
                        tasks.map(task => <Tasks key={task} task={task}></Tasks>)
                    }
                </div>
            </div>
        </DndProvider>



    );
};

export default Tasklist;