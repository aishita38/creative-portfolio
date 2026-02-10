import ishitaimg from '../assets/ishita.jpg';

const About = () => {

    return (
        <section id="about" className="py-24 bg-slate-900/30">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <div className="aspect-[4/5] rounded-3xl overflow-hidden glass p-4">
                            <img
                                src={ishitaimg}
                                alt="Ishita Agarwal"
                                className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-all duration-500"
                            />
                        </div>
                    </div>

                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 font-outfit">
                            About <span className="text-indigo-500">Me</span>
                        </h2>
                        <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                            Creative and detail-oriented Graphic Designer with hands-on experience designing social media content, banners, and UI/UX for college-level tech and cultural organizations.
                        </p>
                        <p className="text-lg text-slate-400 mb-12 leading-relaxed">
                            Skilled in visual storytelling, branding, and collaborative design workflows. Passionate about creating clean, engaging designs that communicate ideas effectively.
                        </p>


                        <div className="mt-12 flex flex-wrap gap-4">
                            {['Figma', 'Canva', 'UI/UX Design', 'Social Media Design', 'Teamwork', 'Time Management', 'Effective Communication'].map((skill) => (
                                <span key={skill} className="px-4 py-2 rounded-lg glass text-slate-300 text-sm font-medium">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
