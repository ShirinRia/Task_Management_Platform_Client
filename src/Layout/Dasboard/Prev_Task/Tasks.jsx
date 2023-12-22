import { ImCross } from "react-icons/im";
import Swal from 'sweetalert2'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdOutlineEdit } from "react-icons/md";
import { useState } from 'react';
import { useForm } from "react-hook-form"

import { useDrag, useDrop } from 'react-dnd'
import useAxiospublic from '../../../Hooks/useAxios/useAxiospublic';
const Tasks = ({ task,refetch }) => {
  const notify = (deadline) => toast(`New Task Assigned. Deadline:${deadline}`);
    
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

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
} = useForm()
  const onSubmit = async (data) => {

    const title = data.title;
    const description = data.description;
    const deadline=data.deadline;
    const priority = data.priority;
    const status='to-do'
    const newtask = { deadline, title, description, priority,status }
    console.log(newtask)
   

}
  return (

    <div ref={drop} className='border-2 '>
      {
      Object.keys(task).length===0 ? <p className="py-2 px-4 bg-base-200 w-full mt-2">Add Task</p>
      :
     
      <ul ref={drag}  className={`${isDragging ? "opacity-5" : "opacity-100"} py-2 px-4 w-full bg-base-200  mt-2`}>
        <li className="flex justify-between items-center">
          <h3>{task.title}</h3>
         <div>
         <button onClick={()=>document.getElementById('my_modal_4').showModal()} className="mr-2 text-xl"><MdOutlineEdit /></button>
          <button onClick={handleDelete}><ImCross /></button>
         </div>
        </li>

      </ul>
     
      }
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
<dialog id="my_modal_4" className="modal">
  <div className="w-full max-w-5xl">
   
    <div className="modal-action w-full">
    <form method="dialog" onSubmit={handleSubmit(onSubmit)} className="w-full">
               
                <div className="flex flex-col items-center gap-5 justify-center my-8"
                >
                    <input
                    className="input input-bordered w-full" 
                       
                        placeholder="Title"
                        type="text"
                        {...register("title")}
                    />

                    <textarea
                        className="mb-4 w-full col-span-2 textarea-md textarea textarea-bordered"
                        placeholder="Description"   {...register("description")} />

                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && <span>This field is required</span>}

                    <div className="flex w-full gap-4">
                        <input
                        className="input input-bordered w-full min-w-xs" 
                            
                            placeholder="Deadline"
                            type="date"

                            {...register("deadline")}
                        />
                        <select className="select select-primary w-full min-w-xs"
                            {...register("priority")}>
                            <option disabled selected>Priority</option>
                            <option>Low</option>
                            <option>Moderate</option>
                            <option>High</option>

                        </select>
                    </div>

                </div>

                <button

                    className="my-4 w-full text-2xl bg-[#dd33fa] outline-0 text-white py-4 "

                    type="submit">
                    Create Course
                </button>
                <ToastContainer />
            </form>
      
    </div>
  </div>
</dialog>
    </div>


  );
};

export default Tasks;