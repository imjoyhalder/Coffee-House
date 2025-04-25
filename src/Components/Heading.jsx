import React from 'react';

const Heading = ({title, subtitle}) => {
    return (
        <div className='flex flex-col w-full justify-center items-center my-12'>
            <h1 className='text-xl md:text-3xl lg:text-4xl font-thin mb-4'>{title}</h1>
            <p className='text-sm md:text-base text-gray-600 text-center font-thin'>{subtitle}</p>
        </div>
    );
};

export default Heading;