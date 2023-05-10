export default function About(){
    return(
        <div id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 tems-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hola, soy Cami
                        <br className="hidden lg:inline-block"/> Full Stack Developer
                    </h1>
                    <p className="mb-8 leading-relaxed">ndkjdnkjdnjkdndkjnkjdnkjdnjkdnkjds</p>
                    <div className="flex justify-center">
                        <a href="#contact"
                        className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                        Trabaja conmigo
                        </a>
                        <a href="#projects"
                        className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            Mira mis trabajos anteriores
                        </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md_w-1/2 w5/6">
                    <img
                    className="object-cover object-center-rounded"
                    alt="hero"
                    src="/portafolio/public/fotocv.png"
                    />
                </div>
            </div>
        </div>
    );
}