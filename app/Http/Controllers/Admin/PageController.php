<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\StorePageRequest;
use App\Http\Requests\Admin\UpdatePageRequest;
use App\Models\Page;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PageController extends Controller
{
    /**
     * Display a listing of pages.
     */
    public function index()
    {
        $pages = Page::latest()->paginate(10);
        
        return Inertia::render('admin/pages/index', [
            'pages' => $pages
        ]);
    }

    /**
     * Show the form for creating a new page.
     */
    public function create()
    {
        return Inertia::render('admin/pages/create');
    }

    /**
     * Store a newly created page in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'slug' => 'required|string|max:255|unique:pages,slug',
            'content' => 'nullable|string',
            'meta_description' => 'nullable|string|max:500',
            'is_published' => 'boolean',
        ]);

        $page = Page::create($validated);

        return redirect()->route('admin.pages.index')
            ->with('success', 'Page created successfully.');
    }

    /**
     * Display the specified page.
     */
    public function show(Page $page)
    {
        return Inertia::render('admin/pages/show', [
            'page' => $page
        ]);
    }

    /**
     * Show the form for editing the specified page.
     */
    public function edit(Page $page)
    {
        return Inertia::render('admin/pages/edit', [
            'page' => $page
        ]);
    }

    /**
     * Update the specified page in storage.
     */
    public function update(Request $request, Page $page)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'slug' => 'required|string|max:255|unique:pages,slug,' . $page->id,
            'content' => 'nullable|string',
            'meta_description' => 'nullable|string|max:500',
            'is_published' => 'boolean',
        ]);

        $page->update($validated);

        return redirect()->route('admin.pages.index')
            ->with('success', 'Page updated successfully.');
    }

    /**
     * Remove the specified page from storage.
     */
    public function destroy(Page $page)
    {
        $page->delete();

        return redirect()->route('admin.pages.index')
            ->with('success', 'Page deleted successfully.');
    }
}