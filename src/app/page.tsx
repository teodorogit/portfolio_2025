import './globals.css';
import Image from 'next/image';
import Fundo from '../../public/bg-professor.png';
import Formulario from '../components/Formulario';

export default function Home() {
    return (
        <>
            <div className="flex items-center justify-evenly py-16 gap-9 bg-white rounded-md">
                <div className="flex w-96">
                    <Image src={Fundo} alt="" />
                </div>
                <div className="flex w-1/2">
                    <Formulario />
                </div>
            </div>
        </>
    );
}
