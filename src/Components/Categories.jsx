import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Categories = ({ categories }) => {
    return (
        <div
            role="tablist"
            className="tabs tabs-lifted bg-gray-50 p-2 sm:p-4 rounded-t-xl shadow-inner flex justify-center flex-wrap gap-2 sm:gap-4"
        >
            {categories.map((category, idx) => (
                <NavLink
                    key={idx}
                    to={`/category/${category.category}`}
                    role="tab"
                    className={({ isActive }) => {
                        const base =
                            "tab text-sm sm:text-base md:text-lg font-medium px-4 sm:px-5 py-2 sm:py-3 transition-all duration-300 ease-in-out rounded-t-xl";
                        const active =
                            "tab-active bg-white text-black shadow-md border-b-0 border-gray-300";
                        const inactive =
                            "text-gray-500 hover:text-black hover:bg-white/80";
                        return `${base} ${isActive ? active : inactive}`;
                    }}
                >
                    {category.category}
                </NavLink>
            ))}
        </div>


    );
};

export default Categories;