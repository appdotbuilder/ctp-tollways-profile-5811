import { type SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { SiteLayout } from '@/components/site-layout';
import { ArrowRight, Building, Award, Users, Globe } from 'lucide-react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <SiteLayout
            title="PT CTP Tollways - Leading Infrastructure Development"
            description="PT CTP Tollways is Indonesia's premier tollway construction company, connecting cities and driving economic growth through world-class infrastructure."
        >
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            🛣️ PT CTP Tollways
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                            Indonesia's Premier Tollway Construction Company - Building Tomorrow's Infrastructure Today
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                            <Link
                                href="/projects"
                                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
                            >
                                View Our Projects
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                            <Link
                                href="/profile"
                                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                            >
                                Learn About Us
                            </Link>
                        </div>
                        
                        {/* Auth Links */}
                        {!auth.user && (
                            <div className="flex justify-center space-x-4 mt-8">
                                <Link
                                    href="/login"
                                    className="text-white bg-white bg-opacity-20 px-6 py-2 rounded-lg hover:bg-opacity-30 transition-colors"
                                >
                                    Admin Login
                                </Link>
                                <Link
                                    href="/register"
                                    className="text-white border border-white border-opacity-50 px-6 py-2 rounded-lg hover:border-opacity-100 transition-colors"
                                >
                                    Register
                                </Link>
                            </div>
                        )}
                        
                        {auth.user && (
                            <div className="flex justify-center space-x-4 mt-8">
                                <Link
                                    href="/dashboard"
                                    className="text-white bg-white bg-opacity-20 px-6 py-2 rounded-lg hover:bg-opacity-30 transition-colors"
                                >
                                    🏠 Dashboard
                                </Link>
                                <Link
                                    href="/admin/pages"
                                    className="text-white border border-white border-opacity-50 px-6 py-2 rounded-lg hover:border-opacity-100 transition-colors"
                                >
                                    📄 Manage Pages
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Key Features */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            🚧 What We Do
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Comprehensive infrastructure solutions for Indonesia's growing transportation needs
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                                <Building className="w-8 h-8 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Tollway Construction</h3>
                            <p className="text-gray-600">Modern tollway design and construction with international standards</p>
                        </div>
                        
                        <div className="text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                                <Award className="w-8 h-8 text-green-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
                            <p className="text-gray-600">ISO certified processes ensuring the highest quality standards</p>
                        </div>
                        
                        <div className="text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                                <Users className="w-8 h-8 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
                            <p className="text-gray-600">1000+ skilled professionals with decades of experience</p>
                        </div>
                        
                        <div className="text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                                <Globe className="w-8 h-8 text-orange-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Nationwide Coverage</h3>
                            <p className="text-gray-600">Projects across Indonesia connecting major cities and regions</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Navigation */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            📍 Explore Our Website
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Discover more about our projects, company, and services
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Link href="/news" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                            <div className="text-4xl mb-4">📰</div>
                            <h3 className="text-xl font-semibold mb-2">Latest News</h3>
                            <p className="text-gray-600 mb-4">Stay updated with our latest developments and industry news</p>
                            <div className="text-blue-600 font-medium flex items-center">
                                Read More <ArrowRight className="ml-1 w-4 h-4" />
                            </div>
                        </Link>

                        <Link href="/projects" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                            <div className="text-4xl mb-4">🏗️</div>
                            <h3 className="text-xl font-semibold mb-2">Our Projects</h3>
                            <p className="text-gray-600 mb-4">Explore our comprehensive portfolio of infrastructure projects</p>
                            <div className="text-blue-600 font-medium flex items-center">
                                View Projects <ArrowRight className="ml-1 w-4 h-4" />
                            </div>
                        </Link>

                        <Link href="/gallery" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                            <div className="text-4xl mb-4">📸</div>
                            <h3 className="text-xl font-semibold mb-2">Photo Gallery</h3>
                            <p className="text-gray-600 mb-4">Visual journey through our construction excellence</p>
                            <div className="text-blue-600 font-medium flex items-center">
                                View Gallery <ArrowRight className="ml-1 w-4 h-4" />
                            </div>
                        </Link>

                        <Link href="/profile" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                            <div className="text-4xl mb-4">🏢</div>
                            <h3 className="text-xl font-semibold mb-2">Company Profile</h3>
                            <p className="text-gray-600 mb-4">Learn about our history, mission, and values</p>
                            <div className="text-blue-600 font-medium flex items-center">
                                Learn More <ArrowRight className="ml-1 w-4 h-4" />
                            </div>
                        </Link>

                        <Link href="/contact" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                            <div className="text-4xl mb-4">📞</div>
                            <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
                            <p className="text-gray-600 mb-4">Get in touch for project inquiries and partnerships</p>
                            <div className="text-blue-600 font-medium flex items-center">
                                Contact Us <ArrowRight className="ml-1 w-4 h-4" />
                            </div>
                        </Link>

                        <div className="bg-blue-50 p-6 rounded-lg">
                            <div className="text-4xl mb-4">🤝</div>
                            <h3 className="text-xl font-semibold mb-2">Ready to Work Together?</h3>
                            <p className="text-gray-600 mb-4">Partner with Indonesia's leading tollway construction company</p>
                            <Link href="/contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                                Start a Project
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
