import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../Components/Card';


const Coffees = () => {
    const data = useLoaderData()
    const [coffees, setCoffees] = useState(data)

    const handleSort = (sortBy) =>{
        if(sortBy=='popularity'){
            // sort by popularity
            const sorted = [...data].sort((a,b)=> b.popularity - a.popularity)
            setCoffees(sorted)
        }
        else if(sortBy=='rating'){
            // sort by rating
            const sorted = [...data].sort((a,b)=> b.rating - a.rating)
            setCoffees(sorted)
        }
    }

    return (
        <>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0 my-4">
                <div>
                    <h1 className="text-lg md:text-3xl font-thin">
                        Sort Coffee&apos;s by Popularity & Rating -&gt;
                    </h1>
                </div>
                <div className="flex flex-col md:flex-row gap-2">
                    <button onClick={()=> handleSort('popularity')} className="btn btn-warning text-black font-bold">
                        Sort By Popularity
                    </button>
                    <button onClick={()=>handleSort('rating')} className="btn btn-warning text-black font-bold">
                        Sort By Rating
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-8  md:my-8">
                {
                    coffees.map(coffee => <Card key={coffee.id} coffee={coffee}></Card>)
                }
            </div>
        </>
    );
};

export default Coffees;