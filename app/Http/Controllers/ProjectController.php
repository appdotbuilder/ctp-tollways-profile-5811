<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Project;
use Inertia\Inertia;

class ProjectController extends Controller
{
    /**
     * Display a listing of projects.
     */
    public function index()
    {
        $projects = Project::active()
            ->orderBy('is_featured', 'desc')
            ->orderBy('start_date', 'desc')
            ->paginate(12);

        return Inertia::render('projects/index', [
            'projects' => $projects
        ]);
    }

    /**
     * Display the specified project.
     */
    public function show(Project $project)
    {
        if ($project->status !== 'active') {
            abort(404);
        }

        $relatedProjects = Project::active()
            ->where('id', '!=', $project->id)
            ->orderBy('is_featured', 'desc')
            ->take(3)
            ->get();

        return Inertia::render('projects/show', [
            'project' => $project,
            'relatedProjects' => $relatedProjects
        ]);
    }
}