'use client';
import React, { useState } from 'react';

export default function Home() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const response = await fetch('https://send.api.mailtrap.io/api/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, message }),
        });

        if (response.ok) {
            setStatus('Email enviado com sucesso!');
            setName('');
            setEmail('');
            setMessage('');
        } else {
            setStatus('Erro ao enviar email.');
        }
    };

    return (
        <div className="w-screen px-6 py-6 bg-yellow-100">
            <form className="bg-white p-6 rounded-lg shadow-md " onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold mb-4">Enviar Email</h2>
                <label className="block mb-2">
                    Nome:
                    <input
                        type="text"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </label>
                <label className="block mb-2">
                    Email:
                    <input
                        type="email"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                <label className="block mb-2">
                    Mensagem:
                    <textarea
                        className="w-full px-3 py-2 border rounded-md focus:outline-none"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                </label>
                <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                    Enviar
                </button>
                {status && <p className="mt-4 text-center">{status}</p>}
            </form>
        </div>
    );
}
