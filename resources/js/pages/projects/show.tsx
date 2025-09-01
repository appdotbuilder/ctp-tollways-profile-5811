import React from 'react';
import { Link } from '@inertiajs/react';
import { SiteLayout } from '@/components/site-layout';
import { ArrowLeft, MapPin, Calendar, DollarSign, Users, ArrowRight } from 'lucide-react';

interface Project {
    id: number;
    title: string;
    slug: string;
    description: string;
    content: string;
    featured_image: string | null;
    status: string;
    start_date: string | null;
    end_date: string | null;
    budget: string | null;
    location: string | null;
    is_featured: boolean;
    [key: string]: unknown;
}

interface Props {
    project: Project;
    relatedProjects: Project[];
    [key: string]: unknown;
}

export default function ProjectShow({ project, relatedProjects }: Props) {
    const getStatusColor = (status: string) => {
        switch (status) {
            case 'active':
                return 'bg-green-100 text-green-800';
            case 'completed':
                return 'bg-blue-100 text-blue-800';
            case 'planning':
                return 'bg-yellow-100 text-yellow-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const formatBudget = (budget: string | null) => {
        if (!budget) return null;
        const amount = parseFloat(budget);
        if (amount >= 1000000000) {
            return `$${(amount / 1000000000).toFixed(1)} Billion`;
        } else if (amount >= 1000000) {
            return `$${(amount / 1000000).toFixed(1)} Million`;
        }
        return `$${amount.toLocaleString()}`;
    };

    return (
        <SiteLayout
            title={`${project.title} - PT CTP Tollways`}
            description={project.description}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Back Button */}
                <Link
                    href="/projects"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Projects
                </Link>

                {/* Project Header */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
                    {/* Featured Image */}
                    {project.featured_image && (
                        <div className="h-64 md:h-96">
                            <img
                                src={project.featured_image}
                                alt={project.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    )}

                    <div className="p-8">
                        {/* Status and Featured Badge */}
                        <div className="flex items-center mb-4">
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                                {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                            </span>
                            {project.is_featured && (
                                <span className="ml-3 px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                                    Featured Project
                                </span>
                            )}
                        </div>

                        {/* Title */}
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            {project.title}
                        </h1>

                        {/* Description */}
                        <p className="text-xl text-gray-600 mb-6">
                            {project.description}
                        </p>

                        {/* Project Details Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                            {project.location && (
                                <div className="flex items-start space-x-3">
                                    <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Location</h3>
                                        <p className="text-gray-600">{project.location}</p>
                                    </div>
                                </div>
                            )}

                            {project.start_date && (
                                <div className="flex items-start space-x-3">
                                    <Calendar className="w-5 h-5 text-blue-600 mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Start Date</h3>
                                        <p className="text-gray-600">
                                            {new Date(project.start_date).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })}
                                        </p>
                                    </div>
                                </div>
                            )}

                            {project.end_date && (
                                <div className="flex items-start space-x-3">
                                    <Calendar className="w-5 h-5 text-blue-600 mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-gray-900">
                                            {project.status === 'completed' ? 'Completed' : 'Expected Completion'}
                                        </h3>
                                        <p className="text-gray-600">
                                            {new Date(project.end_date).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })}
                                        </p>
                                    </div>
                                </div>
                            )}

                            {project.budget && (
                                <div className="flex items-start space-x-3">
                                    <DollarSign className="w-5 h-5 text-blue-600 mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Budget</h3>
                                        <p className="text-gray-600">{formatBudget(project.budget)}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Project Content */}
                <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Details</h2>
                    <div 
                        className="prose prose-lg max-w-none"
                        dangerouslySetInnerHTML={{ __html: project.content }}
                    />
                </div>

                {/* Related Projects */}
                {relatedProjects.length > 0 && (
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Projects</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {relatedProjects.map((related) => (
                                <div key={related.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                    <div className="h-32 bg-gray-200">
                                        {related.featured_image ? (
                                            <img
                                                src={related.featured_image}
                                                alt={related.title}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-gray-400">
                                                <Users className="w-8 h-8" />
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-4">
                                        <div className="flex items-center mb-2">
                                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(related.status)}`}>
                                                {related.status.charAt(0).toUpperCase() + related.status.slice(1)}
                                            </span>
                                        </div>
                                        <h3 className="font-semibold mb-2 line-clamp-2 text-sm">
                                            {related.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                                            {related.description}
                                        </p>
                                        <Link
                                            href={`/projects/${related.slug}`}
                                            className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center"
                                        >
                                            View Details
                                            <ArrowRight className="ml-1 w-3 h-3" />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </SiteLayout>
    );
}