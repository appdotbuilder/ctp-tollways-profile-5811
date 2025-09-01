import React from 'react';
import { SiteLayout } from '@/components/site-layout';
import { Award, Users, Target, Eye, Heart, Shield, Lightbulb, Globe, Building2, History, Compass, Clock, TreePine } from 'lucide-react';

interface ProfileSection {
    title: string;
    content: string;
}

interface Page {
    title: string;
    content: string;
    sections?: {
        company_history?: ProfileSection;
        vision_mission?: ProfileSection;
        toll_chronology?: ProfileSection;
        organizational_structure?: ProfileSection;
        company_structure?: ProfileSection;
        board_commissioners?: ProfileSection;
        board_directors?: ProfileSection;
        partnerships?: ProfileSection;
        csr?: ProfileSection;
    };
    meta_description?: string;
    [key: string]: unknown;
}

interface Props {
    page: Page;
    [key: string]: unknown;
}

export default function ProfilePage({ page }: Props) {
    const stats = [
        { label: 'Years of Experience', value: '20+', icon: Award },
        { label: 'Projects Completed', value: '150+', icon: Target },
        { label: 'Team Members', value: '1000+', icon: Users },
        { label: 'Cities Connected', value: '50+', icon: Globe },
    ];

    const values = [
        {
            icon: Award,
            title: 'Excellence',
            description: 'We strive for the highest standards in everything we do, delivering world-class infrastructure solutions.'
        },
        {
            icon: Shield,
            title: 'Safety',
            description: 'Safety is our top priority in all operations, ensuring the wellbeing of our workers and communities.'
        },
        {
            icon: Lightbulb,
            title: 'Innovation',
            description: 'We embrace new technologies and methods to create more efficient and sustainable solutions.'
        },
        {
            icon: Heart,
            title: 'Integrity',
            description: 'We conduct business with honesty and transparency, building trust with all stakeholders.'
        },
    ];

    const sections = page.sections || {};

    const sectionConfigs = [
        {
            key: 'company_history',
            icon: History,
            bgColor: 'bg-blue-50',
            iconColor: 'text-blue-600',
            defaultTitle: 'Company History'
        },
        {
            key: 'vision_mission',
            icon: Eye,
            bgColor: 'bg-green-50',
            iconColor: 'text-green-600',
            defaultTitle: 'Vision and Mission (Visi/Misi)'
        },
        {
            key: 'toll_chronology',
            icon: Clock,
            bgColor: 'bg-purple-50',
            iconColor: 'text-purple-600',
            defaultTitle: 'Toll Development Chronology (Kronologis Pembangunan Toll)'
        },
        {
            key: 'organizational_structure',
            icon: Building2,
            bgColor: 'bg-orange-50',
            iconColor: 'text-orange-600',
            defaultTitle: 'Organizational Structure (Struktur Organisasi)'
        },
        {
            key: 'company_structure',
            icon: Compass,
            bgColor: 'bg-red-50',
            iconColor: 'text-red-600',
            defaultTitle: 'Company Structure (Struktur Perusahaan)'
        },
        {
            key: 'board_commissioners',
            icon: Users,
            bgColor: 'bg-indigo-50',
            iconColor: 'text-indigo-600',
            defaultTitle: 'Board of Commissioners (Dewan Komisaris)'
        },
        {
            key: 'board_directors',
            icon: Target,
            bgColor: 'bg-teal-50',
            iconColor: 'text-teal-600',
            defaultTitle: 'Board of Directors (Dewan Direksi)'
        },
        {
            key: 'partnerships',
            icon: Heart,
            bgColor: 'bg-pink-50',
            iconColor: 'text-pink-600',
            defaultTitle: 'Partnerships (Kemitraan)'
        },
        {
            key: 'csr',
            icon: TreePine,
            bgColor: 'bg-emerald-50',
            iconColor: 'text-emerald-600',
            defaultTitle: 'Corporate Social Responsibility (CSR)'
        },
    ];

    return (
        <SiteLayout
            title="Company Profile - PT CTP Tollways"
            description="Learn about PT CTP Tollways - Indonesia's leading tollway construction company with over 20 years of experience in infrastructure development."
        >
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        🏢 Company Profile
                    </h1>
                    <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                        Building Indonesia's Future Through World-Class Infrastructure Development
                    </p>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                                    <stat.icon className="w-8 h-8 text-blue-600" />
                                </div>
                                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-gray-600 font-medium">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                About PT CTP Tollways
                            </h2>
                            <div 
                                className="prose prose-lg text-gray-600"
                                dangerouslySetInnerHTML={{ __html: page.content }}
                            />
                        </div>
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop"
                                alt="Construction site"
                                className="rounded-lg shadow-lg"
                            />
                            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                                <div className="text-2xl font-bold text-blue-600">Since 2004</div>
                                <div className="text-gray-600">Leading Infrastructure Development</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            💎 Our Core Values
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            The principles that guide everything we do and every decision we make.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <div key={index} className="text-center bg-white p-6 rounded-lg shadow-lg">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                                    <value.icon className="w-8 h-8 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Dynamic CMS Sections */}
            {sectionConfigs.map((config, index) => {
                const section = sections[config.key as keyof typeof sections];
                
                if (!section) return null;

                return (
                    <section key={config.key} className={`py-16 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center mb-12">
                                <div className={`inline-flex items-center justify-center w-16 h-16 ${config.bgColor} rounded-full mb-6`}>
                                    <config.icon className={`w-8 h-8 ${config.iconColor}`} />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                    {section.title || config.defaultTitle}
                                </h2>
                            </div>

                            <div className="max-w-4xl mx-auto">
                                <div 
                                    className="prose prose-lg max-w-none text-gray-600"
                                    dangerouslySetInnerHTML={{ __html: section.content }}
                                />
                            </div>
                        </div>
                    </section>
                );
            })}

            {/* Certifications & Awards */}
            <section className="py-16 bg-blue-600 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            🏆 Awards & Certifications
                        </h2>
                        <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                            Recognition for our commitment to excellence and quality.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="bg-white bg-opacity-20 w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <Award className="w-10 h-10 text-white" />
                            </div>
                            <h4 className="font-semibold mb-2">ISO 9001:2015</h4>
                            <p className="text-sm text-blue-100">Quality Management</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-white bg-opacity-20 w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <Shield className="w-10 h-10 text-white" />
                            </div>
                            <h4 className="font-semibold mb-2">ISO 45001:2018</h4>
                            <p className="text-sm text-blue-100">Safety Management</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-white bg-opacity-20 w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <Globe className="w-10 h-10 text-white" />
                            </div>
                            <h4 className="font-semibold mb-2">ISO 14001:2015</h4>
                            <p className="text-sm text-blue-100">Environmental Management</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-white bg-opacity-20 w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <Award className="w-10 h-10 text-white" />
                            </div>
                            <h4 className="font-semibold mb-2">Best Constructor 2023</h4>
                            <p className="text-sm text-blue-100">Industry Excellence</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready to Build the Future Together?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Partner with Indonesia's most trusted tollway construction company for your next infrastructure project.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                            📞 Contact Us
                        </button>
                        <button className="border border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                            📁 View Projects
                        </button>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}