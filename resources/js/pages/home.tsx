import React from 'react';
import { Link } from '@inertiajs/react';
import { SiteLayout } from '@/components/site-layout';
import { ArrowRight, Calendar, MapPin, Play } from 'lucide-react';

interface NewsArticle {
    id: number;
    title: string;
    slug: string;
    excerpt: string;
    featured_image: string | null;
    published_at: string;
    [key: string]: unknown;
}

interface Project {
    id: number;
    title: string;
    slug: string;
    description: string;
    featured_image: string | null;
    location: string | null;
    [key: string]: unknown;
}

interface GalleryItem {
    id: number;
    title: string;
    file_path: string;
    file_type: string;
    [key: string]: unknown;
}

interface Props {
    latestNews: NewsArticle[];
    featuredProjects: Project[];
    featuredGallery: GalleryItem[];
    [key: string]: unknown;
}

export default function Home({ latestNews, featuredProjects, featuredGallery }: Props) {
    return (
        <SiteLayout>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            🛣️ Building Tomorrow's Infrastructure
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                            PT CTP Tollways is Indonesia's premier tollway construction company, 
                            connecting cities and driving economic growth through world-class infrastructure.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">20+</div>
                            <div className="text-gray-600">Years Experience</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">150+</div>
                            <div className="text-gray-600">Projects Completed</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">2,500+</div>
                            <div className="text-gray-600">Kilometers Built</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">1000+</div>
                            <div className="text-gray-600">Team Members</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Projects */}
            {featuredProjects.length > 0 && (
                <section className="py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                🏗️ Featured Projects
                            </h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                Discover our latest infrastructure developments that are shaping Indonesia's future.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                            {featuredProjects.map((project) => (
                                <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                                    <div className="h-48 bg-gray-200">
                                        {project.featured_image ? (
                                            <img
                                                src={project.featured_image}
                                                alt={project.title}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-gray-400">
                                                <MapPin className="w-12 h-12" />
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                        <p className="text-gray-600 mb-4">{project.description}</p>
                                        {project.location && (
                                            <div className="flex items-center text-sm text-gray-500 mb-4">
                                                <MapPin className="w-4 h-4 mr-1" />
                                                {project.location}
                                            </div>
                                        )}
                                        <Link
                                            href={`/projects/${project.slug}`}
                                            className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
                                        >
                                            View Details
                                            <ArrowRight className="ml-1 w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="text-center">
                            <Link
                                href="/projects"
                                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                            >
                                View All Projects
                            </Link>
                        </div>
                    </div>
                </section>
            )}

            {/* Latest News */}
            {latestNews.length > 0 && (
                <section className="py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                📰 Latest News
                            </h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                Stay updated with our latest developments, achievements, and industry insights.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                            {latestNews.map((article) => (
                                <article key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                                    <div className="h-48 bg-gray-200">
                                        {article.featured_image ? (
                                            <img
                                                src={article.featured_image}
                                                alt={article.title}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-gray-400">
                                                <Calendar className="w-12 h-12" />
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center text-sm text-gray-500 mb-2">
                                            <Calendar className="w-4 h-4 mr-1" />
                                            {new Date(article.published_at).toLocaleDateString()}
                                        </div>
                                        <h3 className="text-xl font-semibold mb-3">{article.title}</h3>
                                        <p className="text-gray-600 mb-4">{article.excerpt}</p>
                                        <Link
                                            href={`/news/${article.slug}`}
                                            className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
                                        >
                                            Read More
                                            <ArrowRight className="ml-1 w-4 h-4" />
                                        </Link>
                                    </div>
                                </article>
                            ))}
                        </div>

                        <div className="text-center">
                            <Link
                                href="/news"
                                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                            >
                                View All News
                            </Link>
                        </div>
                    </div>
                </section>
            )}

            {/* Gallery Preview */}
            {featuredGallery.length > 0 && (
                <section className="py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                📸 Project Gallery
                            </h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                Explore our photo and video gallery showcasing our construction excellence.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
                            {featuredGallery.slice(0, 8).map((item) => (
                                <div key={item.id} className="aspect-square bg-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                                    {item.file_type === 'image' ? (
                                        <img
                                            src={item.file_path}
                                            alt={item.title}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                                            <Play className="w-12 h-12 text-gray-600" />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="text-center">
                            <Link
                                href="/gallery"
                                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                            >
                                View Full Gallery
                            </Link>
                        </div>
                    </div>
                </section>
            )}
        </SiteLayout>
    );
}