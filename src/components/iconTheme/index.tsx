'use client';
import React from 'react';
import { LuMoon, LuSun } from 'react-icons/lu';
import { useTheme } from '../../context/themeContext';

const themeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme} className="flex items-center justify-center p-2" aria-label="Toggle">
            {theme === 'light' ? <LuMoon className="text-xl " /> : <LuSun className="text-xl" />}
        </button>
    );
};

export default themeToggle;
