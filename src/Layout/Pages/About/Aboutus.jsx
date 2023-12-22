import { IoMdCall } from "react-icons/io";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const Aboutus = () => {
    
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div className="max-w-6xl mx-auto my-16 space-y-7">
            <div data-aos={`fade-left`} data-aos-duration="2000" data-aos-easing="ease-in-sine" data-aos-delay="100" className="text-lg font-normal space-y-3 text-justify">
            <h3 className="text-3xl font-medium text-lime-700">
                About Us
                </h3>
            <p>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                -- BdTask is the Task management site in the country. One young IT professional backed by strong command over e-business and in-depth understanding of the needs of job seekers and employers in the country's context started this venture on July 2023. The vision of the company is to try bringing Internet technology in the mainstream business and economic life of the society.
                </p>
               <p>
                 {/* 
             eslint-disable-next-line react/no-unescaped-entities */}
                -- Our web-site aims to explore maximum benefits of the Internet. Our mission is to enhance productivity by providing an intuitive and robust task management solution. Whether you're a small business, a remote team, or an individual professional, our platform adapts to your unique workflow. We prioritize transparency, real-time communication, and progress tracking, ensuring that every member of your team is on the same page.

               </p>
               <p>
              -- Experience the ease of task management with BdTask — your trusted partner in achieving goals and milestones. Join us on the journey to streamline your projects and make every task count. Welcome to a new era of productivity!
               </p>
            </div>
            <hr />
            <div data-aos={`fade-right`} data-aos-duration="2000" data-aos-easing="ease-in-sine" data-aos-delay="100">
                <h3 className="text-3xl font-medium text-lime-700">
                Contact information
                </h3>
                <p className="text-lg flex items-center gap-2"><IoMdCall />   Dial 16479, 019612444888 from any number.</p>
            </div>
        </div>
    );
};

export default Aboutus;