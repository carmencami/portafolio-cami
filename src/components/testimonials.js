// import {testimonials} from "../data";
// import {TerminalIcon, UsersIcon} from "@heroicons/react/solid";

// export default function Testimonial(){
//     return(
//         <div id="testimonials">
//             <div className="container px-5 py-10 mx-auto text-center">
//                 <UsersIcon className="w-10 inline-block mb-4 text-dark"/>
//                 <h1 className="sm:text-4xl text-3xl font-medium title-font text-dark mb-12">
//                     Testimonios
//                 </h1>
//                 <div className="flex flex-wrap m-4">
//                     {testimonials.map((testimonial)=>(
//                         <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
//                             <TerminalIcon className="block w-8 text-gray-500 mb-4"/>
//                             <p className="leading-relaxed mb-6">{testimonial.quote}</p>
//                             <div>
//                                 <img 
//                                 alt="testimonial"
//                                 src="{testimonial.image}"
//                                 className="w-12 rounded-full flex-shrink-0 object-cover object-center"
//                                 />
//                                 <span className="flex-grow flex flex-col pl-4">
//                                     <span className="title-font font-medium text-white">
//                                         {testimonial.name}
//                                     </span>
//                                     <span className="text-gray-500 text-sm uppercase">
//                                         {testimonial.company}
//                                     </span>
//                                 </span>
//                             </div>
//                         </div>
//                     ))}

//                 </div>
//             </div>
//         </div>
//     );
// }