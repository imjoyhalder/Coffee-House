import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../Components/Card';

const Coffees = () => {
    const data = useLoaderData()
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-8  md:my-8">
            {
                data.map(coffee => <Card key={coffee.id} coffee={coffee}></Card>)
            }
        </div>
    );
};

export default Coffees;