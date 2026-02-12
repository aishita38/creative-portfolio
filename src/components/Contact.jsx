import React from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-paper relative">
            {/* Background Doodle */}
            <div className="absolute top-[20%] left-[5%] opacity-10 pointer-events-none">
                <MessageCircle className="w-32 h-32 rotate-[-15deg] text-dark" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-block relative px-12 py-4 bg-white scrapbook-card rotate-[1deg] mb-8"
                    >
                        <div className="tape tape-pink -top-4 left-1/4" />
                        <h2 className="text-4xl md:text-6xl font-black font-outfit uppercase tracking-tighter leading-none">
                            Drop a <span className="sketchy-text text-pink block text-5xl md:text-7xl">Note</span>
                        </h2>
                    </motion.div>

                    <p className="text-xl text-dark/70 hand-text font-bold italic max-w-lg mx-auto leading-relaxed">
                        "Have a project in mind or just want to say hi? Feel free to reach out and let's create something together!"
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-16">
                    <div className="space-y-8">
                        {[
                            { icon: Mail, label: 'Email', value: 'aishita38@gmail.com', color: 'bg-pink/10', text: 'text-pink' },
                            { icon: Phone, label: 'Phone', value: '+91 6393983602', color: 'bg-peach/10', text: 'text-peach' },
                            { icon: MapPin, label: 'Location', value: 'Jaipur, Rajasthan', color: 'bg-pink/10', text: 'text-pink' }
                        ].map((item, idx) => (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className={`flex items-start gap-6 bg-white scrapbook-card p-8 group ${idx % 2 === 0 ? 'rotate-[-1deg]' : 'rotate-[1deg]'}`}
                            >
                                <div className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center ${item.text} border-2 border-dark/5`}>
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <div className="space-y-1">
                                    <h4 className="marker-text text-lg uppercase tracking-widest text-dark">{item.label}</h4>
                                    <p className="hand-text font-bold italic text-dark/70 text-lg">{item.value}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, rotate: 2 }}
                        whileInView={{ opacity: 1, rotate: 1 }}
                        className="bg-white scrapbook-card p-10 border-4 border-dark/5 relative"
                    >
                        <div className="tape tape-pink -top-6 right-1/4" />
                        <form className="space-y-8">
                            <div className="grid grid-cols-2 gap-8">
                                <div className="space-y-2 relative">
                                    <label className="hand-text font-black text-sm text-dark/40 uppercase pl-1">Name</label>
                                    <input type="text" className="w-full bg-paper/50 border-2 border-dashed border-dark/20 rounded-lg px-4 py-3 text-dark focus:border-pink outline-none transition-colors font-medium" placeholder="Your Name" />
                                </div>
                                <div className="space-y-2 relative">
                                    <label className="hand-text font-black text-sm text-dark/40 uppercase pl-1">Email</label>
                                    <input type="email" className="w-full bg-paper/50 border-2 border-dashed border-dark/20 rounded-lg px-4 py-3 text-dark focus:border-pink outline-none transition-colors font-medium" placeholder="Email" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="hand-text font-black text-sm text-dark/40 uppercase pl-1">Message</label>
                                <textarea rows="4" className="w-full bg-paper/50 border-2 border-dashed border-dark/20 rounded-lg px-4 py-3 text-dark focus:border-pink outline-none transition-colors resize-none font-medium" placeholder="Write something..."></textarea>
                            </div>
                            <button className="w-full py-5 bg-dark text-white font-black uppercase tracking-[0.2em] shadow-[4px_4px_0px_rgba(255,122,175,0.6)] hover:bg-pink hover:text-dark hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_rgba(0,0,0,0.2)] transition-all active:translate-x-0 active:translate-y-0 active:shadow-none">
                                <div className="flex items-center justify-center gap-3">
                                    SEND MESSAGE <Send className="w-5 h-5" />
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
