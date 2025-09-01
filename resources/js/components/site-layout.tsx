import React from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

interface Props {
    children: React.ReactNode;
    title?: string;
    description?: string;
}

export function SiteLayout({ children, title = "PT CTP Tollways", description = "Leading tollway construction company in Indonesia" }: Props) {
    const { url } = usePage();
    
    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'News', href: '/news' },
        { name: 'Profile', href: '/profile' },
        { name: 'Projects', href: '/projects' },
        { name: 'Gallery', href: '/gallery' },
        { name: 'Contact', href: '/contact' },
    ];

    const socialLinks = [
        { name: 'Facebook', href: 'https://facebook.com/ctptollways', icon: Facebook },
        { name: 'Instagram', href: 'https://instagram.com/ctptollways', icon: Instagram },
        { name: 'Twitter', href: 'https://twitter.com/ctptollways', icon: Twitter },
        { name: 'YouTube', href: 'https://youtube.com/ctptollways', icon: Youtube },
    ];

    return (
        <>
            <Head title={title}>
                <meta name="description" content={description} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            
            <div className="min-h-screen bg-white">
                {/* Header */}
                <header className="bg-white shadow-sm border-b">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center py-4">
                            {/* Logo */}
                            <Link href="/" className="flex items-center">
                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                                        <span className="text-white font-bold text-lg">CTP</span>
                                    </div>
                                    <div>
                                        <h1 className="text-xl font-bold text-gray-900">PT CTP Tollways</h1>
                                        <p className="text-sm text-gray-600">Building Tomorrow's Infrastructure</p>
                                    </div>
                                </div>
                            </Link>

                            {/* Desktop Navigation */}
                            <nav className="hidden md:flex space-x-8">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={`text-sm font-medium transition-colors duration-200 ${
                                            url === item.href || (item.href !== '/' && url.startsWith(item.href))
                                                ? 'text-blue-600 border-b-2 border-blue-600 pb-1'
                                                : 'text-gray-700 hover:text-blue-600'
                                        }`}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </nav>

                            {/* Mobile menu button */}
                            <button className="md:hidden p-2">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <main>
                    {children}
                </main>

                {/* Footer */}
                <footer className="bg-gray-900 text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            {/* Company Info */}
                            <div className="col-span-1 md:col-span-2">
                                <div className="flex items-center mb-4">
                                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                                        <span className="text-white font-bold">CTP</span>
                                    </div>
                                    <span className="text-xl font-bold">PT CTP Tollways</span>
                                </div>
                                <p className="text-gray-300 mb-4 max-w-md">
                                    Leading tollway construction company in Indonesia, dedicated to building world-class 
                                    transportation infrastructure that connects communities and drives economic growth.
                                </p>
                                <div className="space-y-2">
                                    <div className="flex items-center text-gray-300">
                                        <MapPin className="w-5 h-5 mr-2" />
                                        <span>Jakarta, Indonesia</span>
                                    </div>
                                    <div className="flex items-center text-gray-300">
                                        <Phone className="w-5 h-5 mr-2" />
                                        <span>+62 21 1234 5678</span>
                                    </div>
                                    <div className="flex items-center text-gray-300">
                                        <Mail className="w-5 h-5 mr-2" />
                                        <span>info@ctptollways.com</span>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Links */}
                            <div>
                                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                                <ul className="space-y-2">
                                    {navigation.map((item) => (
                                        <li key={item.name}>
                                            <Link
                                                href={item.href}
                                                className="text-gray-300 hover:text-white transition-colors"
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Social Media */}
                            <div>
                                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                                <div className="flex space-x-4">
                                    {socialLinks.map((social) => (
                                        <a
                                            key={social.name}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                                        >
                                            <social.icon className="w-5 h-5" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-300">
                            <p>&copy; 2024 PT CTP Tollways. All rights reserved.</p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}