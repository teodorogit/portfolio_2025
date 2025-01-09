import React from 'react';

interface PropsType {
    title: string;
    background: string;
}

const Index: React.FC<PropsType> = ({ title, background }) => {
    return (
        <div className="flex flex-col shadow-xl  items-center justify-around py-6 hover:bg-blue-100 rounded-md">
            <h4>{title}</h4>
            <div className="flex items-center">
                <button className={`${background} px-3 w-40 rounded-sm text-stone-100`}>Read</button>
            </div>
        </div>
    );
};

export default Index;
