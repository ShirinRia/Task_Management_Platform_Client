import { ImCross } from "react-icons/im";
import Swal from 'sweetalert2'
import { useState } from 'react';
import { useDrag, useDrop } from 'react-dnd'
import useAxiospublic from '../../../Hooks/useAxios/useAxiospublic';
const Tasks = ({ task,refetch }) => {
  const axiosPublic=useAxiospublic()
  const handleDelete = () => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
    }).then((result) => {
        if (result.isConfirmed) {
          axiosPublic.delete(`/task/${task._id}`).then((res) => {
                if (res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: "Task has been deleted.",
                        icon: "success",
                    });
                }
            });
        }
    });
};
  console.log(Object.keys(task).length)
  // const{deadline,title,description,priority}=task;
  const [reff, setreff] = useState(false)
 
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (item) => addItemtosection(item.id,item.status),
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  }))
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { id: task._id,
    status:task.status},
   
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }))
  const addItemtosection = (id,status) => {
    console.log("dropped", status)
    if(status==='to-do'){

      status='inprogress'
     }
     else if(status==='inprogress'){
      status='complete'
     }
    
    const olduser = {
      id,
      status
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

    <div ref={drop} className='border-2 '>
      {
      Object.keys(task).length===0 ? <p className="py-2 px-4 bg-base-200 w-full mt-2">Add Task</p>
      :
     
      <ul ref={drag}  className={`${isDragging ? "opacity-5" : "opacity-100"} py-2 px-4 w-full bg-base-200  mt-2`}>
        <li className="flex justify-between items-center">
          <h3>{task.title}</h3>
          <button onClick={handleDelete}><ImCross /></button>
        </li>

      </ul>
     
      }
      
    </div>


  );
};

export default Tasks;