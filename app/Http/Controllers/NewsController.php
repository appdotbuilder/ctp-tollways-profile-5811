<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\NewsArticle;
use Inertia\Inertia;

class NewsController extends Controller
{
    /**
     * Display a listing of news articles.
     */
    public function index()
    {
        $articles = NewsArticle::published()
            ->recent()
            ->paginate(12);

        return Inertia::render('news/index', [
            'articles' => $articles
        ]);
    }

    /**
     * Display the specified news article.
     */
    public function show(NewsArticle $article)
    {
        if (!$article->is_published) {
            abort(404);
        }

        $relatedArticles = NewsArticle::published()
            ->where('id', '!=', $article->id)
            ->recent()
            ->take(3)
            ->get();

        return Inertia::render('news/show', [
            'article' => $article,
            'relatedArticles' => $relatedArticles
        ]);
    }
}