import React, { useState } from 'react';
import { Link, router } from '@inertiajs/react';
import { SiteLayout } from '@/components/site-layout';
import { Camera, Video, Filter, Play, Eye } from 'lucide-react';

interface GalleryItem {
    id: number;
    title: string;
    description: string | null;
    file_path: string;
    file_type: string;
    category: string | null;
    [key: string]: unknown;
}

interface PaginationData {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
    data: GalleryItem[];
    [key: string]: unknown;
}

interface Props {
    items: PaginationData;
    categories: string[];
    currentType: string;
    currentCategory: string | null;
    [key: string]: unknown;
}

export default function GalleryIndex({ items, categories, currentType, currentCategory }: Props) {
    const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

    const handleFilterChange = (type: string, category?: string) => {
        const params = new URLSearchParams();
        if (type !== 'all') params.set('type', type);
        if (category) params.set('category', category);
        
        const url = `/gallery${params.toString() ? '?' + params.toString() : ''}`;
        router.visit(url);
    };

    const openLightbox = (item: GalleryItem) => {
        setSelectedItem(item);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setSelectedItem(null);
        document.body.style.overflow = 'unset';
    };

    return (
        <SiteLayout
            title="Gallery - PT CTP Tollways"
            description="Explore our photo and video gallery showcasing our construction projects and corporate activities."
        >
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        📸 Project Gallery
                    </h1>
                    <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                        Explore our visual collection showcasing construction excellence and corporate milestones.
                    </p>
                </div>
            </section>

            {/* Stats */}
            <section className="py-12 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div>
                            <Camera className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                            <div className="text-2xl font-bold text-gray-900">{items.total}+</div>
                            <div className="text-gray-600">Total Items</div>
                        </div>
                        <div>
                            <Video className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                            <div className="text-2xl font-bold text-gray-900">50+</div>
                            <div className="text-gray-600">Videos</div>
                        </div>
                        <div>
                            <Filter className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                            <div className="text-2xl font-bold text-gray-900">{categories.length}+</div>
                            <div className="text-gray-600">Categories</div>
                        </div>
                        <div>
                            <Eye className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                            <div className="text-2xl font-bold text-gray-900">10K+</div>
                            <div className="text-gray-600">Views</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Filters */}
            <section className="py-8 bg-white border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap items-center gap-4">
                        {/* Type Filter */}
                        <div className="flex items-center space-x-2">
                            <span className="text-sm font-medium text-gray-700">Type:</span>
                            <div className="flex space-x-2">
                                {['all', 'image', 'video'].map((type) => (
                                    <button
                                        key={type}
                                        onClick={() => handleFilterChange(type, currentCategory || undefined)}
                                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                                            currentType === type
                                                ? 'bg-blue-600 text-white'
                                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                    >
                                        {type.charAt(0).toUpperCase() + type.slice(1)}
                                        {type === 'image' && <Camera className="inline w-4 h-4 ml-1" />}
                                        {type === 'video' && <Video className="inline w-4 h-4 ml-1" />}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Category Filter */}
                        {categories.length > 0 && (
                            <div className="flex items-center space-x-2">
                                <span className="text-sm font-medium text-gray-700">Category:</span>
                                <div className="flex flex-wrap gap-2">
                                    <button
                                        onClick={() => handleFilterChange(currentType)}
                                        className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                                            !currentCategory
                                                ? 'bg-blue-600 text-white'
                                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                    >
                                        All
                                    </button>
                                    {categories.map((category) => (
                                        <button
                                            key={category}
                                            onClick={() => handleFilterChange(currentType, category)}
                                            className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors capitalize ${
                                                currentCategory === category
                                                    ? 'bg-blue-600 text-white'
                                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                            }`}
                                        >
                                            {category}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {items.data.length > 0 ? (
                        <>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {items.data.map((item) => (
                                    <div
                                        key={item.id}
                                        className="relative aspect-square bg-gray-200 rounded-lg overflow-hidden group cursor-pointer"
                                        onClick={() => openLightbox(item)}
                                    >
                                        {item.file_type === 'image' ? (
                                            <img
                                                src={item.file_path}
                                                alt={item.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                                                <Play className="w-12 h-12 text-white" />
                                            </div>
                                        )}
                                        
                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-end">
                                            <div className="p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                                <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                                                {item.category && (
                                                    <span className="text-xs bg-white bg-opacity-20 px-2 py-1 rounded capitalize">
                                                        {item.category}
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        {/* File Type Badge */}
                                        <div className="absolute top-2 right-2">
                                            {item.file_type === 'video' ? (
                                                <div className="bg-red-500 text-white p-1 rounded">
                                                    <Video className="w-4 h-4" />
                                                </div>
                                            ) : (
                                                <div className="bg-blue-500 text-white p-1 rounded">
                                                    <Camera className="w-4 h-4" />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Pagination */}
                            {items.last_page > 1 && (
                                <div className="flex justify-center mt-12">
                                    <div className="flex space-x-2">
                                        {Array.from({ length: Math.min(items.last_page, 10) }, (_, i) => i + 1).map((page) => (
                                            <Link
                                                key={page}
                                                href={`/gallery?page=${page}${currentType !== 'all' ? '&type=' + currentType : ''}${currentCategory ? '&category=' + currentCategory : ''}`}
                                                className={`px-4 py-2 rounded-lg font-medium ${
                                                    page === items.current_page
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
                            <Camera className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">No Items Found</h3>
                            <p className="text-gray-600">Try adjusting your filters or check back later.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Lightbox */}
            {selectedItem && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
                    <div className="relative max-w-4xl max-h-full">
                        <button
                            onClick={closeLightbox}
                            className="absolute -top-12 right-0 text-white text-2xl hover:text-gray-300"
                        >
                            ✕
                        </button>
                        
                        {selectedItem.file_type === 'image' ? (
                            <img
                                src={selectedItem.file_path}
                                alt={selectedItem.title}
                                className="max-w-full max-h-full object-contain"
                            />
                        ) : (
                            <div className="bg-gray-800 p-8 rounded-lg text-center">
                                <Play className="w-16 h-16 text-white mx-auto mb-4" />
                                <h3 className="text-white text-xl mb-2">{selectedItem.title}</h3>
                                <p className="text-gray-300 mb-4">Video content would be played here</p>
                                <a
                                    href={selectedItem.file_path}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
                                >
                                    Watch on YouTube
                                </a>
                            </div>
                        )}
                        
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                            <h3 className="text-white text-lg font-semibold mb-2">{selectedItem.title}</h3>
                            {selectedItem.description && (
                                <p className="text-gray-300 text-sm">{selectedItem.description}</p>
                            )}
                            {selectedItem.category && (
                                <span className="inline-block mt-2 bg-blue-600 text-white px-3 py-1 rounded-full text-xs capitalize">
                                    {selectedItem.category}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </SiteLayout>
    );
}