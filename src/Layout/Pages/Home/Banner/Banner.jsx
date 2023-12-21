import banner from '../../../../assets/banner.jpg'


const Banner = () => {
    return (
        <div className='h-[80vh] bg-cover bg-no-repeat flex items-center px-16' style={{backgroundImage: `url(${banner})`, repeat:'no-repeat'}}>
            <div className='space-y-4'>
                <h3 className='text-5xl'>
                    Develop your skill
                </h3>
                <p className='text-3xl'>Get Trained From</p>
                 {/* eslint-disable-next-line react/no-unescaped-entities */}
                <button className='btn bg-[#e879f9] text-slate-100 text-xl '>Let's Explore</button>
            </div>

        </div>
    );
};

export default Banner;