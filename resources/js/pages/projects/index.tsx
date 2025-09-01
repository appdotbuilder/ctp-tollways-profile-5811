import React from 'react';
import { Link } from '@inertiajs/react';
import { SiteLayout } from '@/components/site-layout';
import { MapPin, Calendar, DollarSign, ArrowRight, Building } from 'lucide-react';

interface Project {
    id: number;
    title: string;
    slug: string;
    description: string;
    featured_image: string | null;
    status: string;
    start_date: string | null;
    end_date: string | null;
    budget: string | null;
    location: string | null;
    is_featured: boolean;
    [key: string]: unknown;
}

interface PaginationData {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
    data: Project[];
    [key: string]: unknown;
}

interface Props {
    projects: PaginationData;
    [key: string]: unknown;
}

export default function ProjectsIndex({ projects }: Props) {
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
            return `$${(amount / 1000000000).toFixed(1)}B`;
        } else if (amount >= 1000000) {
            return `$${(amount / 1000000).toFixed(1)}M`;
        }
        return `$${amount.toLocaleString()}`;
    };

    return (
        <SiteLayout
            title="Projects - PT CTP Tollways"
            description="Explore our comprehensive portfolio of tollway and infrastructure projects across Indonesia."
        >
            {/* Header */}
            <section className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            🏗️ Our Projects
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Discover our comprehensive portfolio of tollway and infrastructure projects 
                            that are transforming transportation across Indonesia.
                        </p>
                    </div>
                </div>
            </section>

            {/* Projects */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {projects.data.length > 0 ? (
                        <>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                {projects.data.map((project) => (
                                    <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                                        <div className="flex flex-col md:flex-row">
                                            {/* Image */}
                                            <div className="md:w-1/2 h-48 md:h-auto bg-gray-200">
                                                {project.featured_image ? (
                                                    <img
                                                        src={project.featured_image}
                                                        alt={project.title}
                                                        className="w-full h-full object-cover"
                                                    />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                                                        <Building className="w-12 h-12" />
                                                    </div>
                                                )}
                                            </div>

                                            {/* Content */}
                                            <div className="md:w-1/2 p-6">
                                                <div className="flex items-center mb-3">
                                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                                                        {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                                                    </span>
                                                    {project.is_featured && (
                                                        <span className="ml-2 px-2 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-medium">
                                                            Featured
                                                        </span>
                                                    )}
                                                </div>

                                                <h3 className="text-xl font-bold mb-3 line-clamp-2">
                                                    {project.title}
                                                </h3>

                                                <p className="text-gray-600 mb-4 line-clamp-3">
                                                    {project.description}
                                                </p>

                                                <div className="space-y-2 mb-4">
                                                    {project.location && (
                                                        <div className="flex items-center text-sm text-gray-500">
                                                            <MapPin className="w-4 h-4 mr-2" />
                                                            {project.location}
                                                        </div>
                                                    )}

                                                    {project.start_date && (
                                                        <div className="flex items-center text-sm text-gray-500">
                                                            <Calendar className="w-4 h-4 mr-2" />
                                                            Started: {new Date(project.start_date).toLocaleDateString()}
                                                        </div>
                                                    )}

                                                    {project.budget && (
                                                        <div className="flex items-center text-sm text-gray-500">
                                                            <DollarSign className="w-4 h-4 mr-2" />
                                                            Budget: {formatBudget(project.budget)}
                                                        </div>
                                                    )}
                                                </div>

                                                <Link
                                                    href={`/projects/${project.slug}`}
                                                    className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
                                                >
                                                    View Details
                                                    <ArrowRight className="ml-1 w-4 h-4" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Pagination */}
                            {projects.last_page > 1 && (
                                <div className="flex justify-center mt-12">
                                    <div className="flex space-x-2">
                                        {Array.from({ length: projects.last_page }, (_, i) => i + 1).map((page) => (
                                            <Link
                                                key={page}
                                                href={`/projects?page=${page}`}
                                                className={`px-4 py-2 rounded-lg font-medium ${
                                                    page === projects.current_page
                                                        ? 'bg-blue-600 text-white'
                                                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                                }`}
                                            >
                                                {page}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="text-center py-12">
                            <Building className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">No Projects Available</h3>
                            <p className="text-gray-600">Check back later for our latest projects.</p>
                        </div>
                    )}
                </div>
            </section>
        </SiteLayout>
    );
}