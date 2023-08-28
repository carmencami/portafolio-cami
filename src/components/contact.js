import React from 'react';
import { useState } from 'react';

export default function Contact(){
    const [name,setName] = useState("");
    const [email, setEmail]= useState("");
    const [message, setMessage]= useState("");

    function encode(data) {
        return Object.keys(data).map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])).join("&");
    }
    function handleSubmit(e){
        e.preventDefault();
        fetch("/", { 
            method:"POST",
            headers:{"Content-Type": "application/x-www-form-urlencoded"},
            body: encode({"form-name": "contact", name, email, message}),
        })
        .then(()=> alert("Message sent!"))
        .catch((error) => alert(error));
    }
    return(
        <div id="contact" className="relative">
            <h1 className='flex justify-center sm:text-4xl text-3xl font-medium title-font text-dark mb-4 mt-10'>Contáctame</h1>
            <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overfloew-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                    <iframe
                    width="100%"
                    height="100%"
                    title="map"
                    className="absolute inset-0"
                    frameBorder={0}
                    marginHeight={0}
                    marginWidth={0}
                    style={{filter: "opacity(0.7)"}}
                    src="https://www.google.com/maps/embed/v1/place?q=Málaga,+España&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"

                    />
                    <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
                        <div className="lg:w-1/2 px-6">
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                DIRECCIÓN
                            </h2>
                            <p className="mt-1">
                                Málaga
                            </p>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                CORREO ELECTRÓNICO
                            </h2>
                            <div className="text-indigo-400 leading-relaxed">
                                carmengreta3@outlook.es
                            </div>
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                                NÚMERO DE TELÉFONO
                            </h2>
                            <p className="leading-relaxed">610440293</p>
                        </div>
                    </div>
                </div>
                <form
                name="contact"
                submit={handleSubmit}
                className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
                >
                    <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font text-dark">
                        ¡Cotrátame!
                    </h2>
                    <p className="leadind-relaxed mb-5">
                        Explica brevemente tu consulta para que pueda atenderte con más detalles sobre tiempo, presupuesto, ideas...
                    </p>
                    <div className="relative mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                            Nombre
                        </label>
                        <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full bg-gray-800 rounded  border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 trandsition-colors duration-200 ease-in-out"
                        onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="relatuve mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-400">
                            Correo electrónico
                        </label>
                        <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full bg-gray-800 rounded  border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 trandsition-colors duration-200 ease-in-out"
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="relatuve mb-4">
                        <label htmlFor="message" className="leading-7 text-sm text-gray-400">
                            Mensaje
                        </label>
                        <input
                        type="message"
                        id="message"
                        name="message"
                        className="w-full bg-gray-800 rounded  border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 trandsition-colors duration-200 ease-in-out"
                        onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                    <button
                    type="submit"
                    className="text-dark font-semibold bg-yellow border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                        Enviar
                    </button>
                </form>
            </div>
        </div>

    );
}
