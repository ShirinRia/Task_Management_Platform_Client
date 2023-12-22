import { useForm } from "react-hook-form"

import Swal from 'sweetalert2'

// import useAuth from "../../Hooks/useAuth";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import useAxiospublic from "../../Hooks/useAxios/useAxiospublic";

const Addtask = () => {

    const url = `/assignments`;

    // const { user } = useAuth()
    const axiospublic =useAxiospublic()
    const navigate = useNavigate()
    const mutation = useMutation({
        mutationFn: (newTodo) => {
            return axiospublic.post(url, newTodo)
                .then(function (response) {
                    console.log(response);
                    if (response.data.insertedId) {
                        Swal.fire({
                            title: 'Success!',
                            text: 'Task Assigned',
                            icon: 'success',
                            confirmButtonText: 'OK'
                        })
                        navigate('/dashboard/tasklist')
                        reset()
                    }
                })
                .catch(function (error) {
                    console.log(error);
                    Swal.fire({
                        title: 'Something Went Wrong!',
                        text: error,
                        icon: 'error',
                        confirmButtonText: 'OK'
                    })
                });
        },
    })
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
        mutation.mutate(newtask)

    }
    return (
        <div className="my-16 p-8">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3 className="text-3xl font-medium">
                    Create an Engaging Task</h3>

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
            </form>
        </div>
    );
};

export default Addtask;