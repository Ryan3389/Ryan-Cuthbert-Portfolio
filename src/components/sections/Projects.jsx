import RevealOnScroll from "../RevealOnScroll"

function Projects() {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center flex-col py-20">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Featured Projects</h2>
                </div>

                <article className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 224, 0.1)] transition">
                        <h3 className="text-xl font-bold mb-2 text-center">JWT Authentication</h3>
                        <p className="text-gray-400 mb-4">A secure JWT based login system that uses email verification</p>
                        <div>
                            {["Java", "Spring Boot", "Spring Security", "Java Mail Sender", "PostgreSQL", "JWT"].map((tech, index) => (
                                <span key={index} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 224, 0.1)] transition-all">
                                    {tech}
                                </span>
                            ))}

                            <div className="flex justify-between items-center">
                                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project</a>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 224, 0.1)] transition">
                        <h3 className="text-xl font-bold mb-2 text-center">Fantasy App</h3>
                        <p className="text-gray-400 mb-4">Browse baseball's top hit leaders, predict if a player makes the HOF with python's scikit learn</p>
                        <div>
                            {["React", "Java", "Spring Boot", "Python", "Scikit Learn", "PostgreSQL"].map((tech, index) => (
                                <span key={index} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 224, 0.1)] transition-all">
                                    {tech}
                                </span>
                            ))}

                            <div className="flex justify-between items-center">
                                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project</a>
                            </div>
                        </div>
                    </div>

                </article>
            </RevealOnScroll>
        </section>
    )
}

export default Projects