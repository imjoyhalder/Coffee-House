import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const CoffeeDetails = () => {
    const allCoffeeData = useLoaderData()
    const {id} = useParams()

    const [coffee, setCoffee] = useState({})

    useEffect(()=>{
        const singleData = allCoffeeData.find(coffee => coffee.id === parseInt(id) )
        setCoffee(singleData)

    },[allCoffeeData,id])

    return (
        <div>
            <h1>Details coffee {coffee.description}</h1>
        </div>
    );
};

export default CoffeeDetails;