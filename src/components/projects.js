import { CodeIcon} from "@heroicons/react/solid";
import {projects} from "../data";


export default function Projects(){

    return(
        <div id="projects" className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <CodeIcon className="mx-auto inline-block w-10 mb-4 text-dark" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-dark">
                        Aplicaciones que he construido
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        Estas aplicaciones las he realizado con diferentes lenguajes y Framework. Los diseños están elegidos según las necesidades de cada proyecto.
                    </p>
                </div>
                <div className="flex flex-wrap -m-4">
                    {projects.map((projects)=>(
                        <a
                        href={projects.link}
                        key={projects.image}
                        className="sm:w-1/2 w-100 p-4">
                        <div className="flex relative">
                        <img
                            alt="gallery"
                            className="absolute inset-0 w-full h-full object-cover object-center"
                            src={projects.image}
                        />
                        <div className="px-8 py-10 relatuve z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 table-hover:opacity-100">
                            <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                                {projects.subtitle}
                            </h2>
                            <h1 className="title-font text-lg font-medium text-white mb-3">
                                {projects.title}
                            </h1>
                            <p className="leading-relaxed">{projects.description}</p>
                        </div>
                </div>
                </a>
                    ))}
            </div>
        </div>
        </div>

    );

}