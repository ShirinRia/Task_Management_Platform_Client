
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

import { useContext } from "react";

import { FcGoogle } from 'react-icons/fc';
import { Authcontext } from "../../../Provider/Provider";


const Login = () => {
    // const [logerror, setlogerror] = useState('')
    const { signin, signgoogle } = useContext(Authcontext)
    const navigate = useNavigate()
    const location = useLocation()
    const handleloginform = e => {
        e.preventDefault();
        const logform = new FormData(e.currentTarget)
        const email = logform.get('email')
        const password = logform.get('password')
        // setlogerror('')

        signin(email, password)
            .then((userCredential) => {
                // Signed in 
                const currentuser = userCredential.user;
                console.log(currentuser)

                const olduser = {
                    email,
                    lastloggedat: currentuser?.metadata?.lastSignInTime
                }
                fetch('http://localhost:5000/users',
                    {
                        method: 'PATCH',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(olduser)
                    })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data)
                        if (data.modifiedCount > 0) {
                            Swal.fire({
                                title: 'Sign In!',
                                text: 'Sign In Successfully',
                                icon: 'success',
                                confirmButtonText: 'Explore'
                            })
                        }
                    })
               
                navigate('/')



            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;

                if (errorMessage === "Firebase: Error (auth/invalid-login-credentials).")
                    // setlogerror("Invalid Credential");
                    Swal.fire({
                        title: "Invalid Credential",
                        showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                        }
                    })
            });
    }
    const handlegoogle = () => {
        signgoogle()
            .then((result) => {

                // The signed-in user info.
                const user = result.user;
                console.log(user)
                const email = user.email
                const olduser = {
                    email,
                    lastloggedat: user?.metadata?.lastSignInTime
                }
                fetch('https://cosmetics-beauty-backend-mimjpskj0-shirin-sultanas-projects.vercel.app/users',
                    {
                        method: 'PATCH',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(olduser)
                    })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data)
                        if (data.modifiedCount > 0) {
                            Swal.fire({
                                title: 'Success!',
                                text: 'Sign In with google Successfully',
                                icon: 'success',
                                confirmButtonText: 'OK'
                            })
                        }
                    })
                navigate(location?.state ? location.state : '/')
            }).catch((error) => {

                console.log(error.message);

            });

    }
    return (

        <div className="card w-full my-8 ">
            <div className='w-full md:w-2/3 shadow-md bg-base-100 mx-auto px-8 py-5'>
            <div className='space-y-3'>
                        <h1 className="text-3xl font-bold">Login now!</h1>
                        <p>
                            Does not have an account? <Link to={'/signup'} className='text-[#86198f] underline'>Sign Up</Link>
                        </p>

                    </div>
                <div>
                  
                    <div className="mt-5 mx-8">
                        <button onClick={handlegoogle} className="btn w-full text-[#e879f9] text-lg bg-white outline outline-[#e879f9]"><FcGoogle className="text-2xl"> </FcGoogle>Sign In With Google</button>
                    </div>
                </div>
               
                <hr className="mt-5 mx-8"></hr>
                <form onSubmit={handleloginform} className="card-body ">
                   
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                    </div>
                    <div className="form-control mt-6">

                        <input className="btn text-white text-xl" style={{ backgroundImage: 'linear-gradient(to right, #f9a8d4, #e879f9)' }} type="submit" value="Sign in" />
                    </div>

                </form>
               

            </div>

        </div>



    );
};

export default Login;