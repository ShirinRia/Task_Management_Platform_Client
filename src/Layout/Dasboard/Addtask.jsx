import { useForm } from "react-hook-form"

import Swal from 'sweetalert2'


import useAuth from "../../Hooks/useAuth";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import useAxiossecure from "../../Hooks/useAxios/useAxiossecure";


const Addtask = () => {

    const url = `/classes`;

    const { user } = useAuth()
    const axiosSecure =useAxiossecure()
    const navigate = useNavigate()
    const mutation = useMutation({
        mutationFn: (newTodo) => {
            return axiosSecure.post(url, newTodo)
                .then(function (response) {
                    console.log(response);
                    if (response.data.insertedId) {
                        Swal.fire({
                            title: 'Success!',
                            text: 'Your course has been added',
                            icon: 'success',
                            confirmButtonText: 'OK'
                        })
                        navigate('/dashboard/myclass')
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

        console.log(data)
        const status = 'Pending'
        const title = data.title;
        const name = data.name;
        const email = data.email;
        const userphoto = user.photoURL
        const price = data.price;
        const description = data.description;
        const photo = data.photo
        const totalenrollment = 0
        const newclass = { userphoto, title, name, email, price, description, status, photo, totalenrollment }
        console.log(newclass)
        mutation.mutate(newclass)


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