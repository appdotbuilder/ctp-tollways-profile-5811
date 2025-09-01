<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\GalleryItem;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GalleryController extends Controller
{
    /**
     * Display the gallery.
     */
    public function index(Request $request)
    {
        $type = $request->get('type', 'all'); // all, image, video
        $category = $request->get('category');

        $query = GalleryItem::orderBy('sort_order')->orderBy('created_at', 'desc');

        if ($type !== 'all') {
            $query->where('file_type', $type);
        }

        if ($category) {
            $query->byCategory($category);
        }

        $items = $query->paginate(24);

        $categories = GalleryItem::select('category')
            ->distinct()
            ->whereNotNull('category')
            ->orderBy('category')
            ->pluck('category');

        return Inertia::render('gallery/index', [
            'items' => $items,
            'categories' => $categories,
            'currentType' => $type,
            'currentCategory' => $category
        ]);
    }
}