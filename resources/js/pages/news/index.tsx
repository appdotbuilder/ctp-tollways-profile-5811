import React from 'react';
import { Link } from '@inertiajs/react';
import { SiteLayout } from '@/components/site-layout';
import { Calendar, ArrowRight } from 'lucide-react';

interface NewsArticle {
    id: number;
    title: string;
    slug: string;
    excerpt: string;
    featured_image: string | null;
    published_at: string;
    [key: string]: unknown;
}

interface PaginationData {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
    data: NewsArticle[];
    [key: string]: unknown;
}

interface Props {
    articles: PaginationData;
    [key: string]: unknown;
}

export default function NewsIndex({ articles }: Props) {
    return (
        <SiteLayout
            title="News - PT CTP Tollways"
            description="Stay updated with the latest news, developments, and achievements from PT CTP Tollways."
        >
            {/* Header */}
            <section className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            📰 Latest News
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Stay informed about our latest projects, achievements, and industry developments.
                        </p>
                    </div>
                </div>
            </section>

            {/* News Articles */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {articles.data.length > 0 ? (
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {articles.data.map((article) => (
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
                                                {new Date(article.published_at).toLocaleDateString('en-US', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric'
                                                })}
                                            </div>
                                            <h2 className="text-xl font-semibold mb-3 line-clamp-2">
                                                {article.title}
                                            </h2>
                                            <p className="text-gray-600 mb-4 line-clamp-3">
                                                {article.excerpt}
                                            </p>
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

                            {/* Pagination */}
                            {articles.last_page > 1 && (
                                <div className="flex justify-center mt-12">
                                    <div className="flex space-x-2">
                                        {Array.from({ length: articles.last_page }, (_, i) => i + 1).map((page) => (
                                            <Link
                                                key={page}
                                                href={`/news?page=${page}`}
                                                className={`px-4 py-2 rounded-lg font-medium ${
                                                    page === articles.current_page
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
                            <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">No News Available</h3>
                            <p className="text-gray-600">Check back later for the latest updates.</p>
                        </div>
                    )}
                </div>
            </section>
        </SiteLayout>
    );
}