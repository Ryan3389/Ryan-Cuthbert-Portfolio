import React, { useRef } from 'react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import RevealOnScroll from '../RevealOnScroll';

function Contact() {
    const form = useRef();
    const [formData, setFormData] = useState({
        fromName: '',
        email: '',
        message: ''
    })

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, {
                publicKey: import.meta.env.VITE_PUBLIC_KEY,
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setFormData({
                        fromName: '',
                        email: '',
                        message: ''
                    })
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }



    return (

        <section id="contact" className='form-section min-h-screen'>
            <RevealOnScroll>


                <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">Lets Connect</h1>
                <p className="text-gray-400 text-lg mb-8  mx-auto">Fill out the form below to get in touch</p>
                <form ref={form} onSubmit={sendEmail} className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 224, 0.1)] transition">
                    <div className="input-div">
                        <label className='text-gray-400'>Name</label>
                        <input
                            type="text"
                            name="fromName"
                            value={formData.fromName}
                            onChange={handleChange}
                            required
                            className='border border-blue-500/30'

                        />
                    </div>
                    <div className="input-div">
                        <label className='text-gray-400'>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className='border border-blue-500/30'
                        />
                    </div>
                    <div className="input-div">
                        <label className='text-gray-400'>Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className='border border-blue-500/30'
                        />
                    </div>
                    {/* <span className='submit-btn-container'> */}
                    <span className='flex flex-col items-center'>
                        <input type="submit" value="Send" className='bg-blue-500 py-3 px-10 rounded-lg text-lg hover: shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] cursor-pointer' />
                    </span>
                </form>
            </RevealOnScroll>

        </section>



    );
};

export default Contact