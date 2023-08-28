import { ArrowRightIcon } from "@heroicons/react/solid";

export default function Navbar(){
    return(
    <header className="bg-blue md:sticky top-0 z-10">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <div className="title-font font-medium text-dark hover:text-white mb-4 md:mb-0">
                <a href="#about" className="ml-3 text-xl">
                    Carmen Aguilar
                </a>
            </div>
            <nav className="md:mr-auto md_ml-4 md:py-1 md:pl-4 md:border-1 md:border-gray-700 flex flex-wrap items-center text-base justify-center">
                <a href="#projects" className="mr-5 text-dark font-semibold hover:text-white">
                Trabajos anteriores
                </a>
                <a href="#skills" className="mr-5 text-dark font-semibold hover:text-white">
                    Habilidades
                </a>
                {/* <a href="#testimonials" className="mr-5 font-semibold text-dark hover:text-white">
                    Testimonios
                </a> */}
            </nav>
                <a
                href="#contact"
                className="inline-flex font-semibold text-dark items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-yellow hover:text-dark rounded text-base mt-4 md:mt-0">
                ¡Contrátame!
                <ArrowRightIcon className="w-4 h-4 ml-1" />
                </a>
        </div>
    </header>

    );
}