
import { useDrag, useDrop } from 'react-dnd'
const Tasks = ({task}) => {
    // const{deadline,title,description,priority}=task;
    // console.log(task)
    const [{ isOver }, drop] = useDrop(() => ({
        accept: "task",
        drop:(item) => addItemtosection(item.id),
        collect: (monitor) => ({
          isOver: !!monitor.isOver()
        })
      }))
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "task",
        item:{id:task._id},
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging()
        })
      }))
      const addItemtosection=(id)=>{
        console.log("dropped",id)
      }
      console.log(isDragging)
    return (
       
        <div>
           <div>
             <div  ref={drag}  className={`${isDragging ? "opacity-5" : "opacity-100"}`}>
                     <ul className="py-2 px-4 bg-base-200 w-56 my-4">
                <li>
                    <h3>{task.title}</h3>

                </li>
               
            </ul>
                </div>
           </div>

         </div>
        
    );
};

export default Tasks;