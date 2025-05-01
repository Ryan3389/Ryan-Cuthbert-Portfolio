import RevealOnScroll from "../RevealOnScroll"
import RyanCuthbert from '../../../images/RyanCuthbert.png'
import BtnComponent from "../BtnComponent"

function Home() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative">
            <RevealOnScroll>
                <div className="grid max-w-screen-xl px-4 py-8 mx:auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 m-auto w-[80%]">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">Full-Stack Developer</h1>
                        <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">I am a full stack web developer who utilizes a robust tech stack for creating dynamic applications. I utilize React to create a dynamic front end, while creating efficient RESTful APIs on the backend, connecting them together with  PostgreSQ, and MongoDB.</p>
                        <div className="flex justify-center space-x-4">
                            <a href="#about" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">
                                About Me
                            </a>
                            <a href="#contact" className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10">
                                Contact Me
                            </a>
                        </div>

                    </div>
                    <div className="mx-10 lg:mt-0 lg:col-span-5 lg:flex">
                        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                            <img src={RyanCuthbert} alt="Ryan Cuthbert Picture" className='home-page-img' />
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}

export default Home
