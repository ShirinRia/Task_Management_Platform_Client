import { useNavigation } from "react-router-dom";


const Tasklist = () => {
   
    return (
        <div>
            <ul className="py-8 px-4 bg-base-200 w-56 rounded-box">
                <li>
                    <h3>Title</h3>

                </li>
                <li>

                    <p> Description</p>

                </li>
                <li className="flex justify-between">

                    <p> priority : </p>
                    <p>Deadline : </p>

                </li>
            </ul>
        </div>
    );
};

export default Tasklist;