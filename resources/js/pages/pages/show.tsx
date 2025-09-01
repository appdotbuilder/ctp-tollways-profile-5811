import React from 'react';
import { Link } from '@inertiajs/react';
import { SiteLayout } from '@/components/site-layout';
import { ArrowLeft } from 'lucide-react';

interface Page {
    id: number;
    title: string;
    content: string;
    meta_description?: string;
    featured_image?: string | null;
    [key: string]: unknown;
}

interface Props {
    page: Page;
    [key: string]: unknown;
}

export default function PageShow({ page }: Props) {
    return (
        <SiteLayout
            title={`${page.title} - PT CTP Tollways`}
            description={page.meta_description || page.content.substring(0, 160)}
        >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Back Button */}
                <Link
                    href="/"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Home
                </Link>

                {/* Page Content */}
                <article className="bg-white rounded-lg shadow-lg overflow-hidden">
                    {/* Featured Image */}
                    {page.featured_image && (
                        <div className="h-64 md:h-96">
                            <img
                                src={page.featured_image}
                                alt={page.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    )}

                    <div className="p-8">
                        {/* Title */}
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            {page.title}
                        </h1>

                        {/* Content */}
                        <div 
                            className="prose prose-lg max-w-none"
                            dangerouslySetInnerHTML={{ __html: page.content }}
                        />
                    </div>
                </article>
            </div>
        </SiteLayout>
    );
}