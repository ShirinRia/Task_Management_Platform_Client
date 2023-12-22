import Swal from 'sweetalert2'
import { useState } from 'react';
import { useDrag, useDrop } from 'react-dnd'
import useAxiospublic from '../../../Hooks/useAxios/useAxiospublic';
const Tasks = ({ task,refetch }) => {
  // const{deadline,title,description,priority}=task;
  const [reff, setreff] = useState(false)
  const axiosPublic=useAxiospublic()
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (item) => addItemtosection(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  }))
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { id: task._id},
   
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }))
  const addItemtosection = (id) => {
    console.log("dropped", id)
    const olduser = {
      id,
      status:'inprogress'
  }
    const url = `/assignments`;
    axiosPublic.patch(url, olduser)
            .then(response => {
                console.log(response);
                if (response.data.modifiedCount > 0) {
                  refetch() 
                }
            })

        // navigate(location?.state ? location.state : '/')
    
   
  }
  // console.log(isDragging)
  
  console.log(reff)
  return (

    <div>
      {
       <div ref={drag}  className={`${isDragging ? "opacity-5" : "opacity-100"}`}>
        <ul className="py-2 px-4 bg-base-200 w-56 my-4">
          <li>
            <h3>{task.title}</h3>
  
          </li>
  
        </ul>
       
    </div>
    
     
      }
       <div ref={drop} className="border-2 h-80">
      </div>
    </div>


  );
};

export default Tasks;