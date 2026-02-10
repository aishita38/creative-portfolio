import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-slate-950">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 font-outfit">
                        Let's <span className="text-indigo-500">Collaborate</span>
                    </h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        Have a project in mind or just want to say hi? Feel free to reach out.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <div className="flex items-start gap-6 glass p-8 rounded-3xl">
                            <div className="w-12 h-12 bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-400">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold mb-1 font-outfit text-white">Email</h4>
                                <p className="text-slate-400">aishita38@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6 glass p-8 rounded-3xl">
                            <div className="w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-400">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold mb-1 font-outfit text-white">Phone</h4>
                                <p className="text-slate-400">+91 6393983602</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6 glass p-8 rounded-3xl">
                            <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold mb-1 font-outfit text-white">Location</h4>
                                <p className="text-slate-400">Jaipur, Rajasthan</p>
                            </div>
                        </div>
                    </div>

                    <div className="glass p-10 rounded-[40px]">
                        <form className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-400">Name</label>
                                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-indigo-500 outline-none transition-colors" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-400">Email</label>
                                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-indigo-500 outline-none transition-colors" placeholder="john@example.com" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-400">Subject</label>
                                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-indigo-500 outline-none transition-colors" placeholder="Project Inquiry" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-400">Message</label>
                                <textarea rows="4" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-indigo-500 outline-none transition-colors resize-none" placeholder="How can I help you?"></textarea>
                            </div>
                            <button className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2">
                                Send Message <Send className="w-5 h-5" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
