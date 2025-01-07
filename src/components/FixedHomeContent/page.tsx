import React from 'react';
import Navbar from '../navbar';
import Phrase from '../Phrase';
import { ThemeProvider } from '../../context/themeContext';
import Writtens from '../Writtens';
import { FaReact } from 'react-icons/fa';

const page = () => {
    return (
        <ThemeProvider>
            <main>
                <Navbar />
                <Phrase />
                <div className=" flex rounded-sm  gap-3 py-3 px-3 justify-evenly">
                    <Writtens title="Exaustão mental e suicídio na aréa da tecnologia" icon={FaReact} />
                    <Writtens title="React 19 - Descrição das mudanças na nova versao do react" icon={FaReact} />
                    <Writtens title="H.O.C Metódo avançado de reutilização de componentes em React JS" icon={FaReact} />
                </div>
            </main>
        </ThemeProvider>
    );
};

export default page;
