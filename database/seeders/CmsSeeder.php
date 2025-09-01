<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Page;
use App\Models\NewsArticle;
use App\Models\Project;
use App\Models\GalleryItem;

class CmsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create static pages
        Page::create([
            'title' => 'Company Profile',
            'slug' => 'profile',
            'content' => '<h2>About PT CTP Tollways</h2>
            <p>PT CTP Tollways is a leading construction company specializing in tollway and highway infrastructure development across Indonesia. With over 20 years of experience, we have successfully completed numerous major projects that connect cities and regions, contributing to national economic growth.</p>
            
            <h3>Our Mission</h3>
            <p>To build world-class transportation infrastructure that enhances connectivity, promotes economic development, and improves quality of life for communities across Indonesia.</p>
            
            <h3>Our Vision</h3>
            <p>To be the most trusted and innovative tollway construction company in Southeast Asia, known for excellence in project delivery, safety standards, and environmental responsibility.</p>
            
            <h3>Core Values</h3>
            <ul>
            <li><strong>Excellence:</strong> We strive for the highest standards in everything we do</li>
            <li><strong>Safety:</strong> Safety is our top priority in all operations</li>
            <li><strong>Innovation:</strong> We embrace new technologies and methods</li>
            <li><strong>Integrity:</strong> We conduct business with honesty and transparency</li>
            <li><strong>Sustainability:</strong> We build for the future with environmental responsibility</li>
            </ul>',
            'meta_description' => 'Learn about PT CTP Tollways - Indonesia\'s leading tollway construction company with over 20 years of experience in infrastructure development.',
            'featured_image' => 'https://picsum.photos/800/600?random=1',
            'is_published' => true,
        ]);

        // Create sample news articles
        NewsArticle::factory()->count(15)->create();
        
        // Create some recent news
        NewsArticle::factory()->recent()->count(5)->create();

        // Create sample projects
        Project::factory()->count(20)->create();
        
        // Create some featured projects
        Project::factory()->featured()->count(5)->create();

        // Create sample gallery items
        GalleryItem::factory()->count(50)->create();
        
        // Create some featured gallery items
        GalleryItem::factory()->featured()->count(8)->create();
    }
}