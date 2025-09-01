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
            'content' => '<p>PT CTP Tollways is a leading construction company specializing in tollway and highway infrastructure development across Indonesia. With over 20 years of experience, we have successfully completed numerous major projects that connect cities and regions, contributing to national economic growth.</p>',
            'sections' => [
                'company_history' => [
                    'title' => 'Company History',
                    'content' => '<p>PT CTP Tollways was founded in 2004 with a vision to become Indonesia\'s premier tollway construction company. Starting as a small engineering firm with 20 employees, we have grown into a major player in the infrastructure industry.</p>
                    
                    <h4>Key Milestones:</h4>
                    <ul>
                    <li><strong>2004:</strong> Company established in Jakarta</li>
                    <li><strong>2007:</strong> First major tollway project completed - Cipularang Toll Road (24 km)</li>
                    <li><strong>2010:</strong> Expansion to Surabaya office</li>
                    <li><strong>2013:</strong> ISO 9001:2008 certification achieved</li>
                    <li><strong>2016:</strong> Completion of Trans-Java Toll Road sections</li>
                    <li><strong>2019:</strong> International expansion to Southeast Asia</li>
                    <li><strong>2021:</strong> Reached 1,000+ employees milestone</li>
                    <li><strong>2023:</strong> Awarded "Best Infrastructure Company" by Indonesian Construction Association</li>
                    </ul>',
                ],
                'vision_mission' => [
                    'title' => 'Vision and Mission (Visi/Misi)',
                    'content' => '<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                    <h4>🎯 Our Mission (Misi Kami)</h4>
                    <p>To build world-class transportation infrastructure that enhances connectivity, promotes economic development, and improves quality of life for communities across Indonesia through innovative engineering solutions and sustainable practices.</p>
                    </div>
                    <div>
                    <h4>👁️ Our Vision (Visi Kami)</h4>
                    <p>To be the most trusted and innovative tollway construction company in Southeast Asia, known for excellence in project delivery, safety standards, environmental responsibility, and our contribution to national infrastructure development by 2030.</p>
                    </div>
                    </div>',
                ],
                'toll_chronology' => [
                    'title' => 'Toll Development Chronology (Kronologis Pembangunan Toll)',
                    'content' => '<div class="timeline">
                    <h4>📅 Major Project Timeline</h4>
                    
                    <div class="timeline-item">
                    <h5>2005-2007: Cipularang Toll Road</h5>
                    <p>Our first major project connecting Jakarta to Bandung. 24 km of challenging mountainous terrain construction.</p>
                    </div>
                    
                    <div class="timeline-item">
                    <h5>2008-2011: Jakarta-Cikampek II Toll Road</h5>
                    <p>36 km elevated toll road to reduce traffic congestion between Jakarta and Karawang.</p>
                    </div>
                    
                    <div class="timeline-item">
                    <h5>2012-2015: Surabaya-Mojokerto Toll Road</h5>
                    <p>42 km toll road connecting East Java\'s major cities with advanced drainage systems.</p>
                    </div>
                    
                    <div class="timeline-item">
                    <h5>2016-2019: Trans-Java Toll Road (Sections 5-7)</h5>
                    <p>128 km of the national Trans-Java project, including 15 bridges and 3 interchanges.</p>
                    </div>
                    
                    <div class="timeline-item">
                    <h5>2020-2023: Jakarta-Bandung High-Speed Rail Access</h5>
                    <p>Supporting infrastructure for the high-speed rail project, including access roads and parking facilities.</p>
                    </div>
                    
                    <div class="timeline-item">
                    <h5>2024-Present: Medan-Binjai Toll Extension</h5>
                    <p>Currently under construction - 28 km extension connecting North Sumatra\'s industrial areas.</p>
                    </div>
                    </div>',
                ],
                'organizational_structure' => [
                    'title' => 'Organizational Structure (Struktur Organisasi)',
                    'content' => '<div class="org-structure">
                    <h4>🏢 Company Organization</h4>
                    
                    <div class="org-level">
                    <h5>Board Level</h5>
                    <ul>
                    <li>Board of Commissioners (Dewan Komisaris)</li>
                    <li>Board of Directors (Dewan Direksi)</li>
                    </ul>
                    </div>
                    
                    <div class="org-level">
                    <h5>Executive Level</h5>
                    <ul>
                    <li>Chief Executive Officer</li>
                    <li>Chief Operating Officer</li>
                    <li>Chief Financial Officer</li>
                    <li>Chief Technical Officer</li>
                    </ul>
                    </div>
                    
                    <div class="org-level">
                    <h5>Departmental Structure</h5>
                    <ul>
                    <li>Engineering Department</li>
                    <li>Project Management Department</li>
                    <li>Quality Assurance Department</li>
                    <li>Safety & Environment Department</li>
                    <li>Human Resources Department</li>
                    <li>Finance & Accounting Department</li>
                    <li>Business Development Department</li>
                    </ul>
                    </div>
                    
                    <p><em>Total Workforce: 1,200+ employees across 5 regional offices</em></p>
                    </div>',
                ],
                'company_structure' => [
                    'title' => 'Company Structure (Struktur Perusahaan)',
                    'content' => '<div class="company-structure">
                    <h4>🏗️ Corporate Structure</h4>
                    
                    <div class="structure-item">
                    <h5>PT CTP Tollways (Head Office)</h5>
                    <p>Jakarta - Main headquarters and primary operations</p>
                    <ul>
                    <li>Corporate Management</li>
                    <li>Central Engineering Division</li>
                    <li>National Project Coordination</li>
                    </ul>
                    </div>
                    
                    <div class="structure-item">
                    <h5>Regional Divisions</h5>
                    <ul>
                    <li><strong>West Java Division:</strong> Bandung Office</li>
                    <li><strong>Central Java Division:</strong> Semarang Office</li>
                    <li><strong>East Java Division:</strong> Surabaya Office</li>
                    <li><strong>Sumatra Division:</strong> Medan Office</li>
                    </ul>
                    </div>
                    
                    <div class="structure-item">
                    <h5>Subsidiary Companies</h5>
                    <ul>
                    <li><strong>PT CTP Engineering Services:</strong> Design and consultation</li>
                    <li><strong>PT CTP Heavy Equipment:</strong> Equipment rental and maintenance</li>
                    <li><strong>PT CTP Property Development:</strong> Commercial development along toll corridors</li>
                    </ul>
                    </div>
                    </div>',
                ],
                'board_commissioners' => [
                    'title' => 'Board of Commissioners (Dewan Komisaris)',
                    'content' => '<div class="board-section">
                    <h4>👨‍💼 Dewan Komisaris</h4>
                    
                    <div class="board-member">
                    <h5>Ir. Hartono Wijaya, M.Sc. - President Commissioner</h5>
                    <p>Former Director General of Highways, Ministry of Public Works. 35+ years in infrastructure development and policy making. Graduate of ITB and University of Tokyo.</p>
                    </div>
                    
                    <div class="board-member">
                    <h5>Prof. Dr. Ir. Soekarno Hadisoebroto - Independent Commissioner</h5>
                    <p>Professor of Civil Engineering at University of Indonesia. Expert in highway design and construction management. Author of 50+ technical publications.</p>
                    </div>
                    
                    <div class="board-member">
                    <h5>Dra. Indira Sari, MBA - Independent Commissioner</h5>
                    <p>Former Vice President of PT Bank Mandiri. 25+ years in corporate finance and risk management. Graduate of UI and INSEAD Business School.</p>
                    </div>
                    
                    <div class="board-member">
                    <h5>Ir. Bambang Susilo, M.Eng. - Commissioner</h5>
                    <p>Co-founder and former CEO of PT CTP Tollways. 30+ years in construction industry. Pioneer of modern tollway construction in Indonesia.</p>
                    </div>
                    </div>',
                ],
                'board_directors' => [
                    'title' => 'Board of Directors (Dewan Direksi)',
                    'content' => '<div class="board-section">
                    <h4>👩‍💼 Dewan Direksi</h4>
                    
                    <div class="board-member">
                    <h5>Ir. Ahmad Suryanto, M.Eng. - President Director & CEO</h5>
                    <p>25+ years in infrastructure development. Led completion of 500+ km of tollways. Graduate of ITB and University of California, Berkeley. Specialized in mega project management.</p>
                    </div>
                    
                    <div class="board-member">
                    <h5>Dr. Siti Rahma Dewi, M.Eng. - Technical Director & CTO</h5>
                    <p>20+ years in engineering and technology innovation. PhD in Structural Engineering from NTU Singapore. Pioneer in implementing BIM technology for tollway construction.</p>
                    </div>
                    
                    <div class="board-member">
                    <h5>Ir. Budi Santoso, MBA - Operations Director & COO</h5>
                    <p>22+ years in project operations and management. MBA from INSEAD. Expert in lean construction and supply chain optimization for large-scale projects.</p>
                    </div>
                    
                    <div class="board-member">
                    <h5>Drs. Harianto Tjandra, M.Si., CPA - Finance Director & CFO</h5>
                    <p>18+ years in corporate finance and accounting. CPA certified. Master of Management from University of Indonesia. Expert in project financing and capital structure.</p>
                    </div>
                    </div>',
                ],
                'partnerships' => [
                    'title' => 'Partnerships (Kemitraan)',
                    'content' => '<div class="partnerships-section">
                    <h4>🤝 Strategic Partnerships</h4>
                    
                    <div class="partnership-category">
                    <h5>🏗️ Construction Partners</h5>
                    <ul>
                    <li><strong>Shimizu Corporation (Japan):</strong> Technical expertise and advanced construction methods</li>
                    <li><strong>Vinci Construction (France):</strong> European engineering standards and safety protocols</li>
                    <li><strong>PT Wijaya Karya:</strong> Local construction expertise and workforce</li>
                    <li><strong>PT Adhi Karya:</strong> Joint ventures on major government projects</li>
                    </ul>
                    </div>
                    
                    <div class="partnership-category">
                    <h5>💰 Financial Partners</h5>
                    <ul>
                    <li><strong>Asian Development Bank:</strong> Infrastructure development loans</li>
                    <li><strong>Japan Bank for International Cooperation:</strong> Project financing</li>
                    <li><strong>PT Bank Mandiri:</strong> Corporate banking and trade finance</li>
                    <li><strong>Indonesia Infrastructure Finance:</strong> Long-term project funding</li>
                    </ul>
                    </div>
                    
                    <div class="partnership-category">
                    <h5>🔬 Technology Partners</h5>
                    <ul>
                    <li><strong>Autodesk:</strong> BIM and digital construction solutions</li>
                    <li><strong>Trimble:</strong> GPS and surveying technology</li>
                    <li><strong>Bentley Systems:</strong> Infrastructure design software</li>
                    <li><strong>Oracle:</strong> Enterprise resource planning systems</li>
                    </ul>
                    </div>
                    
                    <div class="partnership-category">
                    <h5>🎓 Academic Partners</h5>
                    <ul>
                    <li><strong>Institut Teknologi Bandung (ITB):</strong> Research and development</li>
                    <li><strong>University of Indonesia:</strong> Engineering research collaboration</li>
                    <li><strong>Universitas Gadjah Mada:</strong> Environmental impact studies</li>
                    </ul>
                    </div>
                    </div>',
                ],
                'csr' => [
                    'title' => 'Corporate Social Responsibility (CSR)',
                    'content' => '<div class="csr-section">
                    <h4>🌱 Our CSR Commitment</h4>
                    
                    <div class="csr-category">
                    <h5>🌍 Environmental Responsibility</h5>
                    <ul>
                    <li><strong>Green Construction:</strong> 30% reduction in carbon footprint through eco-friendly materials</li>
                    <li><strong>Reforestation Program:</strong> 50,000+ trees planted along toll corridors</li>
                    <li><strong>Waste Management:</strong> 90% construction waste recycling rate</li>
                    <li><strong>Water Conservation:</strong> Advanced drainage systems protecting local watersheds</li>
                    </ul>
                    </div>
                    
                    <div class="csr-category">
                    <h5>🎓 Education & Training</h5>
                    <ul>
                    <li><strong>CTP Academy:</strong> Free construction skills training for local communities</li>
                    <li><strong>Scholarship Program:</strong> 100+ engineering students supported annually</li>
                    <li><strong>Vocational Partnerships:</strong> Collaboration with technical schools</li>
                    <li><strong>Digital Literacy:</strong> Computer training for rural communities</li>
                    </ul>
                    </div>
                    
                    <div class="csr-category">
                    <h5>🏥 Community Health & Welfare</h5>
                    <ul>
                    <li><strong>Mobile Health Clinics:</strong> Free medical services in project areas</li>
                    <li><strong>Clean Water Projects:</strong> 25 water wells built in rural areas</li>
                    <li><strong>Sports Facilities:</strong> Football fields and courts for youth</li>
                    <li><strong>Emergency Response:</strong> Disaster relief and infrastructure repair</li>
                    </ul>
                    </div>
                    
                    <div class="csr-category">
                    <h5>💼 Economic Empowerment</h5>
                    <ul>
                    <li><strong>UMKM Support:</strong> Microcredit for small businesses near toll projects</li>
                    <li><strong>Local Sourcing:</strong> 70% of materials sourced from local suppliers</li>
                    <li><strong>Job Creation:</strong> 5,000+ direct and indirect jobs created</li>
                    <li><strong>Women Empowerment:</strong> Female entrepreneur development programs</li>
                    </ul>
                    </div>
                    
                    <div class="csr-stats">
                    <h5>📊 CSR Impact (2023)</h5>
                    <ul>
                    <li>💰 <strong>Rp 25 billion</strong> invested in CSR programs</li>
                    <li>👨‍👩‍👧‍👦 <strong>150,000+</strong> community members directly benefited</li>
                    <li>🌳 <strong>2,500 hectares</strong> of environmental conservation areas protected</li>
                    <li>🎓 <strong>5,000+</strong> people trained in various skill development programs</li>
                    </ul>
                    </div>
                    </div>',
                ],
            ],
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