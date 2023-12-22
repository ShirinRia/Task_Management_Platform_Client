
import useAuth from "../../Hooks/useAuth";
import useAllusers from "../../Hooks/useAllusers";

const Userprofile = () => {
    const { user } = useAuth()
    const [users] = useAllusers()
    console.log(user)
    const thisuser = users.find(userr => userr?.email == user?.email)

    return (
        <div className="my-16 p-8">
            <div
                className="flex items-center justify-between mb-4"
            >

                <h3 className="text-3xl font-medium">{thisuser?.name}</h3>

                <div className="avatar">
                    <div className="w-24 rounded-full">
                        <img src={thisuser?.photo} />
                    </div>
                </div>
            </div>
           <hr />
            <div className=" flex flex-col items-center my-8 gap-5">

                <input

                     className="input input-bordered w-full" 


                    value={thisuser?.email}
                />
                <input
                     className="input input-bordered w-full" 

                    value={  thisuser?.createdAt
                    }
                />
                <input
                     className="input input-bordered w-full" 
                    placeholder="Phone Number"

                    value={thisuser?.phone}
                />

            </div>
        </div>




    );
};

export default Userprofile;