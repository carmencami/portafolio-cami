import { ChipIcon} from "@heroicons/react/solid";

export default function Skills(){
    return(
        <div id="skills">
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center mb-20">
                    <ChipIcon className="w-10 inline-block mb-4 text-dark"/>
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-dark mb-4">
                        Habilidades y Tecnologías
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                        Especializada en Front-End pero con conocimientos en Back-End.
                    </p>
                </div>
                <div className="container">
                    <div className="grid grid-cols-12 gap-4">
                        <img
                                alt="gallery"
                                className="inset-0 w-15 h-15 object-cover"
                                src="https://www.vlrtraining.in/wp-content/uploads/2020/11/logo-angular.png"
                        />
                        <img
                                alt="gallery"
                                className="inset-0 w-15 h-15 object-cover"
                                src="https://iconape.com/wp-content/files/zk/93042/png/react.png"
                        />
                        <img
                                alt="gallery"
                                className="inset-0 w-15 h-15 object-cover"
                                src="https://www.pinclipart.com/picdir/big/371-3712206_javascript-javascript-logo-png-clipart.png"
                        />
                        <img
                                alt="gallery"
                                className="inset-0 w-15 h-15 object-cover"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png"
                        />
                        <img
                                alt="gallery"
                                className="inset-0 w-15 h-15 object-cover"
                                src="https://1000logos.net/wp-content/uploads/2020/09/CSS-Logo.jpg"
                        />
                        <img
                                alt="gallery"
                                className="inset-0 w-15 h-15 object-cover"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png"
                        />
                        <img
                                alt="gallery"
                                className="inset-0 w-15 h-15 object-cover"
                                src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png"
                        />
                        <img
                                alt="gallery"
                                className="inset-0 w-15 h-15 object-cover"
                                src="https://img.freepik.com/iconos-gratis/wordpress_318-183439.jpg?w=360"
                        />
                        <img
                                alt="gallery"
                                className="inset-0 w-15 h-15 object-cover"
                                src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png"
                        />
                        <img
                                alt="gallery"
                                className="inset-0 w-15 h-15 object-cover"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1985px-Postgresql_elephant.svg.png"
                        />
                
                    </div>
                </div>
                {/* <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                    {skills.map((skill) =>(
                        <div key={skill} className="p-2 sm:w-1/2 w-full">
                            <div className="bg-dark rounded flex p-4 h-full items-center">
                                <BadgeCheckIcon className="text-dark w-6 h-6 flex-shrink-0 mr-4"/>
                                <span className="title-font font-medium text-white">
                                    {skill}
                                </span>
                            </div>
                        </div>
                    ))}
                </div> */}
            </div>
        </div>
    );
}