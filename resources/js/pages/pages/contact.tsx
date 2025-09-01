import React, { useState } from 'react';
import { SiteLayout } from '@/components/site-layout';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate form submission - in real app, this would send to backend
        setTimeout(() => {
            alert('Thank you for your message! We will get back to you soon.');
            setFormData({
                name: '',
                email: '',
                phone: '',
                company: '',
                subject: '',
                message: ''
            });
            setIsSubmitting(false);
        }, 1000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const offices = [
        {
            name: 'Head Office',
            address: 'Jl. Sudirman No. 123, Jakarta Pusat, DKI Jakarta 10270',
            phone: '+62 21 1234 5678',
            email: 'info@ctptollways.com',
            hours: 'Monday - Friday: 8:00 AM - 5:00 PM'
        },
        {
            name: 'Surabaya Office',
            address: 'Jl. Tunjungan No. 45, Surabaya, Jawa Timur 60275',
            phone: '+62 31 2345 6789',
            email: 'surabaya@ctptollways.com',
            hours: 'Monday - Friday: 8:00 AM - 5:00 PM'
        },
        {
            name: 'Medan Office',
            address: 'Jl. Gatot Subroto No. 67, Medan, Sumatera Utara 20232',
            phone: '+62 61 3456 7890',
            email: 'medan@ctptollways.com',
            hours: 'Monday - Friday: 8:00 AM - 5:00 PM'
        }
    ];

    const socialLinks = [
        { name: 'Facebook', href: 'https://facebook.com/ctptollways', icon: Facebook, color: 'text-blue-600' },
        { name: 'Instagram', href: 'https://instagram.com/ctptollways', icon: Instagram, color: 'text-pink-600' },
        { name: 'Twitter', href: 'https://twitter.com/ctptollways', icon: Twitter, color: 'text-blue-400' },
        { name: 'YouTube', href: 'https://youtube.com/ctptollways', icon: Youtube, color: 'text-red-600' },
    ];

    return (
        <SiteLayout
            title="Contact Us - PT CTP Tollways"
            description="Get in touch with PT CTP Tollways. Contact us for project inquiries, partnerships, or general information."
        >
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        📞 Contact Us
                    </h1>
                    <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                        Ready to discuss your infrastructure project? We're here to help bring your vision to life.
                    </p>
                </div>
            </section>

            {/* Contact Form & Info */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                Send us a Message
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Your full name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="+62 xxx xxxx xxxx"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                                            Company
                                        </label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Your company name"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                        Subject *
                                    </label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        required
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    >
                                        <option value="">Select a subject</option>
                                        <option value="project-inquiry">Project Inquiry</option>
                                        <option value="partnership">Partnership Opportunity</option>
                                        <option value="career">Career Opportunities</option>
                                        <option value="media">Media Relations</option>
                                        <option value="general">General Information</option>
                                        <option value="support">Technical Support</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={6}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Please provide details about your inquiry..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5 mr-2" />
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                    Get in Touch
                                </h2>
                                <p className="text-gray-600 mb-8">
                                    We're here to answer your questions and discuss how we can help with your 
                                    infrastructure needs. Reach out to us through any of the following channels.
                                </p>
                            </div>

                            {/* Quick Contact */}
                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                    Quick Contact
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-center">
                                        <Phone className="w-5 h-5 text-blue-600 mr-3" />
                                        <span className="text-gray-700">+62 21 1234 5678</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Mail className="w-5 h-5 text-blue-600 mr-3" />
                                        <span className="text-gray-700">info@ctptollways.com</span>
                                    </div>
                                    <div className="flex items-start">
                                        <MapPin className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                                        <span className="text-gray-700">
                                            Jl. Sudirman No. 123<br />
                                            Jakarta Pusat, DKI Jakarta 10270
                                        </span>
                                    </div>
                                    <div className="flex items-center">
                                        <Clock className="w-5 h-5 text-blue-600 mr-3" />
                                        <span className="text-gray-700">Mon - Fri: 8:00 AM - 5:00 PM</span>
                                    </div>
                                </div>
                            </div>

                            {/* Social Media */}
                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                    Follow Us
                                </h3>
                                <div className="flex space-x-4">
                                    {socialLinks.map((social) => (
                                        <a
                                            key={social.name}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center hover:shadow-md transition-shadow ${social.color}`}
                                        >
                                            <social.icon className="w-5 h-5" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Office Locations */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            🏢 Our Offices
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Visit us at any of our locations across Indonesia.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {offices.map((office, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    {office.name}
                                </h3>
                                <div className="space-y-3">
                                    <div className="flex items-start">
                                        <MapPin className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                                        <span className="text-gray-600">{office.address}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Phone className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                                        <span className="text-gray-600">{office.phone}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Mail className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                                        <span className="text-gray-600">{office.email}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Clock className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                                        <span className="text-gray-600">{office.hours}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Find Us
                        </h2>
                        <p className="text-gray-600">
                            Our head office is conveniently located in the heart of Jakarta.
                        </p>
                    </div>
                    
                    <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg h-96 flex items-center justify-center">
                        <div className="text-center text-gray-500">
                            <MapPin className="w-12 h-12 mx-auto mb-4" />
                            <p>Interactive map would be embedded here</p>
                            <p className="text-sm">Showing our Jakarta head office location</p>
                        </div>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}