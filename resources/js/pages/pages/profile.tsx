import React from 'react';
import { SiteLayout } from '@/components/site-layout';
import { Award, Users, Target, Eye, Heart, Shield, Lightbulb, Globe } from 'lucide-react';

interface Page {
    title: string;
    content: string;
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

    const leadership = [
        {
            name: 'Ir. Ahmad Suryanto',
            position: 'Chief Executive Officer',
            bio: 'With over 25 years in infrastructure development, Ahmad leads our vision for sustainable tollway construction.',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face'
        },
        {
            name: 'Dr. Siti Rahma, M.Eng',
            position: 'Chief Technical Officer',
            bio: 'Siti brings innovative engineering solutions and ensures all projects meet international standards.',
            image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face'
        },
        {
            name: 'Ir. Budi Santoso',
            position: 'Chief Operations Officer',
            bio: 'Budi oversees project execution and maintains our reputation for on-time, on-budget delivery.',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face'
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

            {/* Mission & Vision */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <div className="flex items-center mb-6">
                                <Target className="w-8 h-8 text-blue-600 mr-3" />
                                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                To build world-class transportation infrastructure that enhances connectivity, 
                                promotes economic development, and improves quality of life for communities 
                                across Indonesia through innovative engineering solutions and sustainable practices.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <div className="flex items-center mb-6">
                                <Eye className="w-8 h-8 text-blue-600 mr-3" />
                                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                To be the most trusted and innovative tollway construction company in Southeast Asia, 
                                known for excellence in project delivery, safety standards, environmental responsibility, 
                                and our contribution to national infrastructure development.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-16">
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
                            <div key={index} className="text-center">
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

            {/* Leadership Team */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            👥 Leadership Team
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Meet the experienced leaders driving our vision forward.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {leadership.map((leader, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                                <div className="h-64 bg-gray-200">
                                    <img
                                        src={leader.image}
                                        alt={leader.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                                        {leader.name}
                                    </h3>
                                    <p className="text-blue-600 font-semibold mb-4">
                                        {leader.position}
                                    </p>
                                    <p className="text-gray-600">
                                        {leader.bio}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications & Awards */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            🏆 Awards & Certifications
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Recognition for our commitment to excellence and quality.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="bg-yellow-100 w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <Award className="w-10 h-10 text-yellow-600" />
                            </div>
                            <h4 className="font-semibold mb-2">ISO 9001:2015</h4>
                            <p className="text-sm text-gray-600">Quality Management</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-green-100 w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <Shield className="w-10 h-10 text-green-600" />
                            </div>
                            <h4 className="font-semibold mb-2">ISO 45001:2018</h4>
                            <p className="text-sm text-gray-600">Safety Management</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-blue-100 w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <Globe className="w-10 h-10 text-blue-600" />
                            </div>
                            <h4 className="font-semibold mb-2">ISO 14001:2015</h4>
                            <p className="text-sm text-gray-600">Environmental Management</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-purple-100 w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <Award className="w-10 h-10 text-purple-600" />
                            </div>
                            <h4 className="font-semibold mb-2">Best Constructor 2023</h4>
                            <p className="text-sm text-gray-600">Industry Excellence</p>
                        </div>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}