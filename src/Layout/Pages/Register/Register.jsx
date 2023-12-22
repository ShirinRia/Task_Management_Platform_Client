
import { useContext } from "react";
import { updateProfile } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

import { FcGoogle } from 'react-icons/fc';
import { Authcontext } from "../../../Provider/Provider";
const Register = () => {
    // const [regerror, setregerror] = useState('')
    const { createuser, signgoogle } = useContext(Authcontext)
    const navigate = useNavigate();
    const handleRegister = e => {
        e.preventDefault();
        const formreg = new FormData(e.currentTarget);
        const email = formreg.get('email')
        const password = formreg.get('password')
        const name = formreg.get('name')
        let photo = formreg.get('photo')
        if (!photo) {
            photo = "https://i.ibb.co/0jQwXPz/download.jpg"
        }
        // setregerror('')

        if (password.length < 6) {
            // setregerror("password length less then 6")
            Swal.fire({
                title: `password length less then 6`,
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            })
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            // setregerror("Password should have a capital letter")
            Swal.fire({
                title: `Password should have a capital letter`,
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            })
            return;
        }
        else if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\|-]/.test(password)) {
            // setregerror("Password should have a Special Character")
            Swal.fire({
                title: `Password should have a Special Character`,
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            })
            return;
        }
        createuser(email, password)
            .then((userCredential) => {

                const currentuser = userCredential.user;
                console.log(currentuser)
                const createat = currentuser.metadata.creationTime

                updateProfile(currentuser, {
                    displayName: name,

                    photoURL: photo
                })
                    .then(() => {
                        // Profile updated!
                        const newuserdata = { name, email, photo, createdAt: createat }
                        console.log(newuserdata);
                        fetch('http://localhost:5000/users',
                            {
                                method: 'POST',
                                headers: {
                                    'content-type': 'application/json',
                                },
                                body: JSON.stringify(newuserdata)
                            })
                            .then(res => res.json())
                            .then(data => {
                                console.log(data)
                                if (data.insertedId) {
                                    Swal.fire({
                                        title: 'Success!',
                                        text: 'Registered with email Successfully',
                                        icon: 'success',
                                        confirmButtonText: 'OK'
                                    })
                                }
                            })
                        navigate("/");

                    })
                    .catch((error) => {

                        // setregerror(error.message);
                        Swal.fire({
                            title: `${error.message}`,
                            showClass: {
                                popup: 'animate__animated animate__fadeInDown'
                            },
                            hideClass: {
                                popup: 'animate__animated animate__fadeOutUp'
                            }
                        })
                    });

            })
            .catch((error) => {
                const er = error.message;
                console.log(er)

            });

    }
    const handlegoogle = () => {
        signgoogle()
            .then((result) => {

                // The signed-in user info.
                const user = result.user;
                const email = user.email

                const name = user.displayName
                let photo = user.photoURL
                const createat = user.metadata.creationTime
                const newuserdata = { name, email, photo, createdAt: createat }
                console.log(newuserdata);
                fetch('https://cosmetics-beauty-backend-mimjpskj0-shirin-sultanas-projects.vercel.app/users',
                    {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(newuserdata)
                    })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.insertedId) {
                            Swal.fire({
                                title: 'Success!',
                                text: 'Registered with google Successfully',
                                icon: 'success',
                                confirmButtonText: 'OK'
                            })
                        }
                    })
                console.log(user)

                navigate("/");

            }).catch((error) => {

                console.log(error.message);

            });

    }
    return (
        <div className='max-w-6xl mx-5 md:mx-auto mt-10 h-[100vh] mb-64'>
            <div className='text-center'>
                <h2 className="text-2xl font-medium text-center mb-3">
                    New Customer
                </h2>
                <hr></hr>
            </div>

            <div >
                
                    <div className="card w-full md:w-1/2 ">
                        <div className='w-full shadow-md bg-base-100 mx-auto'>
                            <form onSubmit={handleRegister} className="card-body ">
                                <div className='space-y-3'>
                                    <h1 className="text-3xl font-bold">Sign up!</h1>
                                    <p>
                                        Already have an account? <Link to={'/login'} className='text-[#86198f] underline'>Sign In</Link>
                                    </p>

                                </div>
                                <div className="form-control flex-row" >
                                    <label className="label w-1/3">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Full Name" className="input input-bordered w-full" required />
                                </div>
                                <div className="form-control flex-row">
                                    <label className="label w-1/3">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered w-full" required />
                                </div>
                                <div className="form-control flex-row">
                                    <label className="label w-1/3">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="url" name="photo" placeholder="photo" className="input input-bordered w-full" required />

                                </div>
                                <div className="form-control flex-row">
                                    <label className="label w-1/3">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered w-full" required />

                                </div>
                                <div className="form-control mt-6">

                                    <input className="btn text-white text-xl" style={{ backgroundImage: 'linear-gradient(to right, #f9a8d4, #e879f9)' }} type="submit" value="Sign Up" />
                                </div>

                            </form>
                            <div>
                                <hr className="my-5 mx-8"></hr>
                                <p className='text-center'>Or Sign Up with</p>
                                <div className="my-5 mx-8">
                                    <button onClick={handlegoogle} className="btn w-full text-[#e879f9] text-xl bg-white outline outline-[#e879f9]"><FcGoogle className="text-2xl"> </FcGoogle>Sign Up With Google</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      

    );
};

export default Register;