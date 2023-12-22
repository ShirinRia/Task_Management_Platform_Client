import { useEffect, useState } from "react";

const Benefitted = () => {
    const [cats, setcat] = useState([])
    useEffect(() => {
        fetch('/category.json')
            .then(res => res.json())
            .then(data => setcat(data))
    }, [])
    return (
        <div className="my-16 max-w-7xl mx-auto">
            <h3 className="text-5xl font-medium ">Best fit for </h3>
            <div className="grid grid-cols-3 my-8">
                {
                    cats.map((cat, idx)=>  <div key={idx} className="px-8 py-4 bg-white ">
                        <div className="flex items-center gap-2 shadow-md">
                        <img src={cat.logo} alt="" className="h-14 w-14" />
                    <p className="text-xl font-medium">
                        {cat.title}
                    </p>
                        </div>
                </div>)
                }


            </div>
        </div>
    );
};

export default Benefitted;