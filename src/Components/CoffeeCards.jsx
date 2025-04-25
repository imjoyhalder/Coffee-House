import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const CoffeeCards = () => {
    const navigate = useNavigate()
    const { category } = useParams()
    const data = useLoaderData()

    const [coffees, setCoffees] = useState([])

    useEffect(() => {

        if (category) {
            const filteredByCategory = [...data].filter(coffee => coffee.category === category)
            setCoffees(filteredByCategory)
        }
        else {
            setCoffees(data.slice(0, 6))
        }

    }, [data, category])

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-8  md:my-8">
                {
                    coffees.map(coffee => <Card key={coffee.id} coffee={coffee}></Card>)
                }
            </div>
            <button onClick={()=> navigate('/coffees')} className="btn btn-primary font-bold text-white">View all</button>
        </>
    );
};

export default CoffeeCards;