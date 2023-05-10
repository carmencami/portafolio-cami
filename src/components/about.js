import Fotocv from '../fotocv.png';

export default function About(){
    return(
        <div id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 tems-center text-center">
                    <h1 className="text-dark title-font sm:text-4xl text-3xl mb-4 font-medium">
                        Hola, soy Cami
                        <br className="hidden lg:inline-block"/> Full Stack Developer
                    </h1>
                    <p className="mb-8 leading-relaxed">Tengo conocimientos en Educación y Psicología, y he encontrado mi vocación en el desarrollo web. Soy una persona con capacidad de liderazgo y alto compromiso. Estoy siempre en continuo crecimiento y por ello cualquier proyecto para mi será todo un reto.</p>
                    <div className="flex justify-center">
                        <a href="#contact"
                        className="inline-flex text-dark font-semibold bg-yellow border-0 py-2 px-6 focus:outline-none hover:text-white rounded-xl text-lg">
                        Trabaja conmigo
                        </a>
                        <a href="#projects"
                        className="ml-4 inline-flex font-semibold bg-yellow text-dark border-0 py-2 px-6 focus:outline-none hover:text-white rounded-xl text-lg">
                            Mis trabajos
                        </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md_w-1/2 w5/6">
                    <img
                    className="object-cover object-center-rounded"
                    alt="hero"
                    src={Fotocv}
                    />
                </div>
            </div>
        </div>
    );
}