import React from 'react';
import IconTheme from '../iconTheme';
import Link from 'next/link';

const index = () => {
    return (
        <nav className="w-screen flex items-center justify-between h-14 px-10">
            <p>Matheus Teodoro</p>
            <div className="flex gap-5">
                <Link href="/">
                    <p>Home</p>
                </Link>
                <Link href="projects">
                    <p>Projects</p>
                </Link>
                <p>Personality</p>

                <Link href="social">
                    <p>Social Medias</p>
                </Link>
            </div>
            <button>Github</button>
            <IconTheme />
        </nav>
    );
};

export default index;
