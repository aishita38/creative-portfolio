import React from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute bottom-10 left-[10%] w-80 h-80 rounded-full bg-pink/5 blur-3xl -z-10 animate-pulse-slow" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block mb-4"
                    >
                        <span className="text-xs font-bold font-mono tracking-[0.3em] text-pink">Get in touch</span>
                        <h2 className="text-6xl md:text-8xl font-bold font-outfit uppercase tracking-normal text-dark mt-2">
                            Drop a <span className="sketchy-text block md:inline py-1">Note</span>
                        </h2>
                    </motion.div>

                    <p className="text-lg md:text-xl text-dark/85 font-sans font-medium max-w-xl mx-auto leading-relaxed mt-2">
                        Have a project in mind or just want to say hi? Feel free to reach out and let's create something together!
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 md:gap-16">
                    <div className="space-y-6">
                        {[
                            { icon: Mail, label: 'Email', value: 'aishita38@gmail.com', color: 'bg-pink/10', text: 'text-pink' },
                            { icon: Phone, label: 'Phone', value: '+91 6393983602', color: 'bg-peach/10', text: 'text-peach' },
                            { icon: MapPin, label: 'Location', value: 'Jaipur, Rajasthan', color: 'bg-pink/10', text: 'text-pink' }
                        ].map((item, idx) => (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-6 bg-white border border-sky/20 rounded-[2rem] p-6 md:p-8 group transition-all duration-500 hover:border-sky/50 hover:shadow-[0_0_20px_rgba(143,242,159,0.15)]"
                            >
                                <div className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center ${item.text} border border-sky/15`}>
                                    <item.icon className="w-5 h-5" />
                                </div>
                                <div className="space-y-1">
                                    <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-sky/80">{item.label}</h4>
                                    <p className="font-sans font-semibold text-dark/90 text-lg md:text-xl">{item.value}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white border border-sky/20 rounded-[2rem] p-8 md:p-10 shadow-md relative"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="font-mono text-xs font-bold text-sky/80 uppercase tracking-widest pl-1">Name</label>
                                    <input type="text" className="w-full bg-paper/30 border border-sky/20 rounded-xl px-4 py-3 text-dark focus:border-pink focus:bg-white outline-none transition-all duration-300 font-sans text-sm font-medium" placeholder="Your Name" />
                                </div>
                                <div className="space-y-2">
                                    <label className="font-mono text-xs font-bold text-sky/80 uppercase tracking-widest pl-1">Email</label>
                                    <input type="email" className="w-full bg-paper/30 border border-sky/20 rounded-xl px-4 py-3 text-dark focus:border-pink focus:bg-white outline-none transition-all duration-300 font-sans text-sm font-medium" placeholder="Email" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="font-mono text-xs font-bold text-sky/80 uppercase tracking-widest pl-1">Message</label>
                                <textarea rows="4" className="w-full bg-paper/30 border border-sky/20 rounded-xl px-4 py-3 text-dark focus:border-pink focus:bg-white outline-none transition-all duration-300 resize-none font-sans text-sm font-medium" placeholder="Write something..."></textarea>
                            </div>
                            <button className="w-full py-4 bg-sky text-white font-bold font-mono uppercase tracking-[0.2em] rounded-full hover:bg-pink hover:text-dark hover:shadow-[0_0_20px_rgba(247,179,227,0.4)] transition-all duration-300 cursor-pointer">
                                <div className="flex items-center justify-center gap-3">
                                    SEND MESSAGE <Send className="w-4 h-4" />
                                </div>
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
