import React from 'react';
import AppLayout from '@/layouts/app-layout';
import Heading from '@/components/heading';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { router } from '@inertiajs/react';
import type { Page } from '@/types';

interface Props {
    pages: {
        data: Page[];
        current_page: number;
        last_page: number;
        per_page: number;
        total: number;
        links: Array<{
            url: string | null;
            label: string;
            active: boolean;
        }>;
    };
    [key: string]: unknown;
}

export default function PagesIndex({ pages }: Props) {
    const handleDelete = (page: Page) => {
        if (confirm('Are you sure you want to delete this page?')) {
            router.delete(route('admin.pages.destroy', page.id));
        }
    };

    return (
        <AppLayout>
            <div className="container mx-auto p-6">
                <div className="flex justify-between items-center mb-6">
                    <Heading title="📄 Manage Pages" />
                    <Button 
                        onClick={() => router.visit(route('admin.pages.create'))}
                        className="bg-blue-600 hover:bg-blue-700"
                    >
                        ➕ Create New Page
                    </Button>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>All Pages ({pages.total})</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {pages.data.length === 0 ? (
                            <div className="text-center py-8">
                                <div className="text-gray-500 mb-4">📝 No pages found</div>
                                <Button 
                                    onClick={() => router.visit(route('admin.pages.create'))}
                                    variant="outline"
                                >
                                    Create your first page
                                </Button>
                            </div>
                        ) : (
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="border-b">
                                            <th className="text-left p-3 font-medium">Title</th>
                                            <th className="text-left p-3 font-medium">Slug</th>
                                            <th className="text-left p-3 font-medium">Status</th>
                                            <th className="text-left p-3 font-medium">Created</th>
                                            <th className="text-right p-3 font-medium">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {pages.data.map((page) => (
                                            <tr key={page.id} className="border-b hover:bg-gray-50">
                                                <td className="p-3">
                                                    <div className="font-medium">{page.title}</div>
                                                    {page.meta_description && (
                                                        <div className="text-sm text-gray-600 truncate max-w-xs">
                                                            {page.meta_description}
                                                        </div>
                                                    )}
                                                </td>
                                                <td className="p-3">
                                                    <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                                                        /{page.slug}
                                                    </code>
                                                </td>
                                                <td className="p-3">
                                                    <Badge 
                                                        variant={page.is_published ? "default" : "secondary"}
                                                        className={page.is_published ? "bg-green-100 text-green-800" : ""}
                                                    >
                                                        {page.is_published ? "📢 Published" : "📋 Draft"}
                                                    </Badge>
                                                </td>
                                                <td className="p-3 text-sm text-gray-600">
                                                    {new Date(page.created_at).toLocaleDateString()}
                                                </td>
                                                <td className="p-3">
                                                    <div className="flex justify-end gap-2">
                                                        <Button
                                                            size="sm"
                                                            variant="outline"
                                                            onClick={() => window.open(`/pages/${page.slug}`, '_blank')}
                                                            title="View page"
                                                        >
                                                            👁️
                                                        </Button>
                                                        <Button
                                                            size="sm"
                                                            variant="outline"
                                                            onClick={() => router.visit(route('admin.pages.edit', page.id))}
                                                        >
                                                            ✏️ Edit
                                                        </Button>
                                                        <Button
                                                            size="sm"
                                                            variant="destructive"
                                                            onClick={() => handleDelete(page)}
                                                        >
                                                            🗑️ Delete
                                                        </Button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}

                        {pages.last_page > 1 && (
                            <div className="flex justify-center items-center gap-2 mt-6">
                                {pages.links.map((link, index) => (
                                    <Button
                                        key={index}
                                        size="sm"
                                        variant={link.active ? "default" : "outline"}
                                        disabled={!link.url}
                                        onClick={() => link.url && router.visit(link.url)}
                                        dangerouslySetInnerHTML={{ __html: link.label }}
                                    />
                                ))}
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}