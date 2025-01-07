import './globals.css';
import Image from 'next/image';
import Computer from '../../public/computer.png';

export default function Home() {
    return (
        <>
            <div className="flex items-center px-9 py-16 gap-9">
                <div>
                    <h2> Student of 5º Semester Analisys and Development System</h2>
                    <button className="bg-zinc-500 text-white px-3 py-1"> More information</button>
                </div>
                <div>
                    <h2>Working as Trainee in Sicredi Dexis</h2>
                    <button className="bg-lime-600 text-white px-3 py-1"> More information</button>
                </div>
                <div>
                    <h2> Things about my self</h2>
                    <button className="bg-orange-400 text-white px-3 py-1"> More information</button>
                </div>
            </div>
        </>
    );
}
