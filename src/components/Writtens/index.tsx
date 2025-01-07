import React from 'react';
import { IconType } from 'react-icons';

interface PropsType {
    title: string;
    icon?: IconType;
}

const Index: React.FC<PropsType> = ({ title, icon: Icon }) => {
    return (
        <div className="flex flex-col h-60 shadow-xl w-80 items-center justify-around px-3">
            <h4>{title}</h4>
            <div className="flex items-center">
                {Icon && <Icon className="mr-2 " />}
                <button className="bg-lime-700 px-3 w-40 rounded-sm text-stone-100">Read</button>
            </div>
        </div>
    );
};

export default Index;
