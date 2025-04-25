import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaTrashCan } from "react-icons/fa6";

const Card = ({ coffee, handleRemove }) => {
    const { id, name, category, type, origin, rating, popularity, image } = coffee;

    //location hook 
    const { pathname } = useLocation()

    return (
        <div className='flex relative'>
            <Link
                to={`/coffee/${id}`}
                className='transition hover:scale-105 shadow-xl rounded-xl overflow-hidden'
            >
                <figure className='w-full h-48 overflow-hidden'>
                    <img className='' src={image} alt='' />
                </figure>
                <div className='p-4'>
                    <h1 className='text-xl'>Name: {name}</h1>
                    <p>Category: {category}</p>
                    <p>Type: {type}</p>
                    <p>Origin: {origin}</p>
                    <p>Rating: {rating}</p>
                    <p>Popular: {popularity}</p>
                </div>
            </Link>
            {
                pathname === '/dashboard' && (
                    <div onClick={()=>handleRemove(id)} className='absolute p-2 bg-warning rounded-full cursor-pointer -top-1 -right-0 md:-top-5 md:-right-1 '>
                        <FaTrashCan />
                    </div>
                )
            }
        </div>
    );
};

export default Card;