<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\NewsArticle;
use App\Models\Project;
use App\Models\GalleryItem;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Display the home page.
     */
    public function index()
    {
        $latestNews = NewsArticle::published()
            ->recent()
            ->take(3)
            ->get();

        $featuredProjects = Project::active()
            ->featured()
            ->take(3)
            ->get();

        $featuredGallery = GalleryItem::featured()
            ->orderBy('sort_order')
            ->take(6)
            ->get();

        return Inertia::render('home', [
            'latestNews' => $latestNews,
            'featuredProjects' => $featuredProjects,
            'featuredGallery' => $featuredGallery,
        ]);
    }
}