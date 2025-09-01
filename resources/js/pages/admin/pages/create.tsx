import React from 'react';
import AppLayout from '@/layouts/app-layout';
import Heading from '@/components/heading';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { useForm } from '@inertiajs/react';
import InputError from '@/components/input-error';



export default function CreatePage() {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        slug: '',
        content: '',
        meta_description: '',
        is_published: 0,
    });

    const handleTitleChange = (title: string) => {
        setData('title', title);
        // Auto-generate slug from title
        const slug = title
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
            .replace(/\s+/g, '-') // Replace spaces with hyphens
            .replace(/-+/g, '-') // Replace multiple hyphens with single
            .trim()
            .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
        setData('slug', slug);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('admin.pages.store'));
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData('is_published', e.target.checked ? 1 : 0);
    };

    return (
        <AppLayout>
            <div className="container mx-auto p-6">
                <div className="flex justify-between items-center mb-6">
                    <Heading title="📝 Create New Page" />
                    <Button 
                        variant="outline"
                        onClick={() => window.history.back()}
                    >
                        ← Back
                    </Button>
                </div>

                <Card className="max-w-4xl">
                    <CardHeader>
                        <CardTitle>Page Details</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="title">Page Title *</Label>
                                    <Input
                                        id="title"
                                        type="text"
                                        value={data.title}
                                        onChange={(e) => handleTitleChange(e.target.value)}
                                        placeholder="e.g., About Us, Contact, Services"
                                        className="w-full"
                                    />
                                    <InputError message={errors.title} />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="slug">URL Slug *</Label>
                                    <div className="flex items-center">
                                        <span className="text-sm text-gray-500 mr-1">domain.com/pages/</span>
                                        <Input
                                            id="slug"
                                            type="text"
                                            value={data.slug}
                                            onChange={(e) => setData('slug', e.target.value)}
                                            placeholder="page-url-slug"
                                            className="flex-1"
                                        />
                                    </div>
                                    <InputError message={errors.slug} />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="meta_description">Meta Description</Label>
                                <Input
                                    id="meta_description"
                                    type="text"
                                    value={data.meta_description}
                                    onChange={(e) => setData('meta_description', e.target.value)}
                                    placeholder="Brief description for search engines (optional)"
                                    maxLength={500}
                                />
                                <div className="text-xs text-gray-500">
                                    {data.meta_description.length}/500 characters
                                </div>
                                <InputError message={errors.meta_description} />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="content">Page Content</Label>
                                <textarea
                                    id="content"
                                    value={data.content}
                                    onChange={(e) => setData('content', e.target.value)}
                                    placeholder="Write your page content here..."
                                    className="w-full min-h-[300px] p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-y"
                                />
                                <div className="text-xs text-gray-500">
                                    💡 Tip: You can use HTML tags for formatting
                                </div>
                                <InputError message={errors.content} />
                            </div>

                            <div className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    id="is_published"
                                    checked={!!data.is_published}
                                    onChange={handleCheckboxChange}
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                />
                                <Label htmlFor="is_published" className="flex items-center gap-2">
                                    📢 Publish page immediately
                                    <span className="text-sm text-gray-500">(uncheck to save as draft)</span>
                                </Label>
                            </div>
                            <InputError message={errors.is_published} />

                            <div className="flex gap-4 pt-4 border-t">
                                <Button
                                    type="submit"
                                    disabled={processing}
                                    className="bg-blue-600 hover:bg-blue-700"
                                >
                                    {processing ? '⏳ Creating...' : '✅ Create Page'}
                                </Button>
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() => window.history.back()}
                                    disabled={processing}
                                >
                                    ❌ Cancel
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}