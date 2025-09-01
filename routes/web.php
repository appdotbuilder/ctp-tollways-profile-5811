<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\GalleryController;
use App\Http\Controllers\Admin\PageController as AdminPageController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/health-check', function () {
    return response()->json([
        'status' => 'ok',
        'timestamp' => now()->toISOString(),
    ]);
})->name('health-check');

// Welcome page (for non-CMS mode)
Route::get('/welcome', function () {
    return Inertia::render('welcome');
})->name('welcome');

// Public website routes
Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/news', [NewsController::class, 'index'])->name('news.index');
Route::get('/news/{article:slug}', [NewsController::class, 'show'])->name('news.show');
Route::get('/projects', [ProjectController::class, 'index'])->name('projects.index');
Route::get('/projects/{project:slug}', [ProjectController::class, 'show'])->name('projects.show');
Route::get('/profile', function () {
    $page = \App\Models\Page::where('slug', 'profile')->published()->first();
    
    if (!$page) {
        $page = (object) [
            'title' => 'Company Profile',
            'content' => 'Company profile content will be displayed here.',
            'meta_description' => 'Learn about PT CTP Tollways - leading tollway construction company.'
        ];
    }

    return Inertia::render('pages/profile', ['page' => $page]);
})->name('profile');

Route::get('/contact', function () {
    return Inertia::render('pages/contact');
})->name('contact');
Route::get('/gallery', [GalleryController::class, 'index'])->name('gallery.index');
Route::get('/pages/{page:slug}', [PageController::class, 'show'])->name('pages.show');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
    
    // Admin routes
    Route::prefix('admin')->name('admin.')->group(function () {
        Route::resource('pages', AdminPageController::class);
    });
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
