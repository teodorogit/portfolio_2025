import React from 'react';
import Navbar from '../navbar';
import Phrase from '../Phrase';
import { ThemeProvider } from '../../context/themeContext';
import Writtens from '../Writtens';

const page = () => {
    return (
        <ThemeProvider>
            <main>
                <Navbar />
                <Phrase />
                <div className=" flex rounded-sm  gap-3 py-3 px-3 justify-evenly">
                    <div className=" flex-col gap-8">
                        <Writtens
                            title="Exaustão mental e suicídio na aréa da tecnologia"
                            background="bg-amber-400 text-black"
                        />
                        <Writtens
                            title="React 19 - Descrição das mudanças na nova versao do react"
                            background="bg-green-700 text-white-300"
                        />
                        <Writtens
                            title="H.O.C Metódo avançado de reutilização de componentes em React JS"
                            background="bg-teal-800 text-white-500"
                        />
                    </div>
                    <Writtens
                        title=" Student of 5º Semester Analisys and Development System"
                        background="bg-yellow-700"
                    />
                    <Writtens title=" Working as Trainee at Sicredi Dexis" background="bg-yellow-700" />
                    <Writtens title=" Things about my self" background="bg-yellow-700" />
                </div>
            </main>
        </ThemeProvider>
    );
};

export default page;
