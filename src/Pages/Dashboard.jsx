import React, { useEffect, useState } from 'react';
import Heading from '../Components/Heading';
import { getAllFavorite, removeFavorite } from '../Utils';
import Card from '../Components/Card';


const Dashboard = () => {

    // useLocation hook



    const [coffees, setCoffees] = useState([])

    useEffect(() => {
        const favorites = getAllFavorite()
        setCoffees(favorites)
    }, [])

    const handleRemove = id => {
        removeFavorite(id)
        const favorites = getAllFavorite()
        setCoffees(favorites)
    }

    return (
        <div>
            <Heading
                title={'Welcome To Dashboard'}
                subtitle={'Manage coffees that you have previously added as favorite. You can view or remove then form here.'}>
            </Heading>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-8  md:my-8">
                {
                    coffees.map(coffee => <Card handleRemove={handleRemove} key={coffee.id} coffee={coffee}></Card>)
                }
            </div>
        </div>
    );
};

export default Dashboard;