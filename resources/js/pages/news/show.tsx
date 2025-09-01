import React from 'react';
import { Link } from '@inertiajs/react';
import { SiteLayout } from '@/components/site-layout';
import { Calendar, ArrowLeft, ArrowRight } from 'lucide-react';

interface NewsArticle {
    id: number;
    title: string;
    slug: string;
    content: string;
    featured_image: string | null;
    published_at: string;
    [key: string]: unknown;
}

interface Props {
    article: NewsArticle;
    relatedArticles: NewsArticle[];
    [key: string]: unknown;
}

export default function NewsShow({ article, relatedArticles }: Props) {
    return (
        <SiteLayout
            title={`${article.title} - PT CTP Tollways`}
            description={article.content.substring(0, 160)}
        >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Back Button */}
                <Link
                    href="/news"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to News
                </Link>

                {/* Article */}
                <article className="bg-white rounded-lg shadow-lg overflow-hidden">
                    {/* Featured Image */}
                    {article.featured_image && (
                        <div className="h-64 md:h-96">
                            <img
                                src={article.featured_image}
                                alt={article.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    )}

                    <div className="p-8">
                        {/* Meta Info */}
                        <div className="flex items-center text-sm text-gray-500 mb-4">
                            <Calendar className="w-4 h-4 mr-1" />
                            {new Date(article.published_at).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </div>

                        {/* Title */}
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            {article.title}
                        </h1>

                        {/* Content */}
                        <div 
                            className="prose prose-lg max-w-none"
                            dangerouslySetInnerHTML={{ __html: article.content }}
                        />
                    </div>
                </article>

                {/* Related Articles */}
                {relatedArticles.length > 0 && (
                    <section className="mt-16">
                        <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {relatedArticles.map((related) => (
                                <article key={related.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                    <div className="h-32 bg-gray-200">
                                        {related.featured_image ? (
                                            <img
                                                src={related.featured_image}
                                                alt={related.title}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-gray-400">
                                                <Calendar className="w-8 h-8" />
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-4">
                                        <div className="flex items-center text-xs text-gray-500 mb-2">
                                            <Calendar className="w-3 h-3 mr-1" />
                                            {new Date(related.published_at).toLocaleDateString()}
                                        </div>
                                        <h3 className="font-semibold mb-2 line-clamp-2 text-sm">
                                            {related.title}
                                        </h3>
                                        <Link
                                            href={`/news/${related.slug}`}
                                            className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center"
                                        >
                                            Read More
                                            <ArrowRight className="ml-1 w-3 h-3" />
                                        </Link>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </SiteLayout>
    );
}