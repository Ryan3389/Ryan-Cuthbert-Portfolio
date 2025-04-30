
function About() {
    const frontEndSkills = ["React", "Vue", "TypeScript", "TailwindCSS"]
    const backEndSkills = ["Node.js", "Python", "AWS", "MongoDB", "GraphQL"]
    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <article className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">About Me</h2>

                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 translate-all">
                    <p className="text-gray-300 mb-6">Passionate developer with expertise in building scalable web applications and creating innovative solutions</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Front-End</h3>
                        <div className="flex flex-wrap gap-2">
                            {frontEndSkills.map((tech, index) => (
                                <span key={index} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,224, 0.2)] transition">{tech}</span>
                            ))}
                        </div>
                    </div>
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Backend</h3>
                        <div className="flex flex-wrap gap-2">
                            {backEndSkills.map((tech, index) => (
                                <span key={index} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,224, 0.2)] transition">{tech}</span>
                            ))}
                        </div>
                    </div>
                    {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8- w-[80%]"> */}
                    <div className="flex justify-center">
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4 text-center">Education</h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>
                                    <strong>University of Toronto</strong> - Bootcamp
                                </li>
                                <li>Relevant Course work: Data Structures, Web Development, Cloud Computing</li>
                            </ul>
                        </div>

                    </div>
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all flex flex-col justify-center items-center">
                        <h3 className="text-xl font-bold mb-4 text-center">Experience</h3>
                        <a href="#" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] ">Resume</a>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default About