import { Link } from 'react-router-dom';
import banner from '../../../../assets/banner.jpg'
import useAuth from '../../../../Hooks/useAuth';
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Banner = () => {
    const {user}=useAuth()
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div className='h-[80vh] bg-cover bg-no-repeat flex items-center px-16' style={{backgroundImage: `url(${banner})`, repeat:'no-repeat'}}>
            <div data-aos={`fade-up`} data-aos-duration="2000" data-aos-easing="ease-in-sine" data-aos-delay="100" className='space-y-4'>
                <h3 className='text-5xl'>
                Streamlining Your Productivity Journey
                </h3>
                <p className='w-2/3 text-xl text-justify'>Introducing our task management website – a streamlined solution to enhance productivity and organization. Effortlessly create, assign, and track tasks.</p>
                 {/* eslint-disable-next-line react/no-unescaped-entities */}
                <Link to={user ? '/dashboard/addtask':'/login'

                // eslint-disable-next-line react/no-unescaped-entities
                } className='btn bg-[#e879f9] text-slate-100 text-xl '>Let's Explore</Link>
            </div>

        </div>
    );
};

export default Banner;