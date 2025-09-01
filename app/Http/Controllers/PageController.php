<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Page;
use Inertia\Inertia;

class PageController extends Controller
{
    /**
     * Display the specified page.
     */
    public function show(Page $page)
    {
        if (!$page->is_published) {
            abort(404);
        }

        return Inertia::render('pages/show', [
            'page' => $page
        ]);
    }


}