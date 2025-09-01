<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\NewsArticle
 *
 * @property int $id
 * @property string $title
 * @property string $slug
 * @property string $excerpt
 * @property string $content
 * @property string|null $featured_image
 * @property bool $is_published
 * @property \Illuminate\Support\Carbon|null $published_at
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|NewsArticle newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|NewsArticle newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|NewsArticle query()
 * @method static \Illuminate\Database\Eloquent\Builder|NewsArticle whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|NewsArticle whereSlug($value)
 * @method static \Illuminate\Database\Eloquent\Builder|NewsArticle whereExcerpt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|NewsArticle whereContent($value)
 * @method static \Illuminate\Database\Eloquent\Builder|NewsArticle whereFeaturedImage($value)
 * @method static \Illuminate\Database\Eloquent\Builder|NewsArticle whereIsPublished($value)
 * @method static \Illuminate\Database\Eloquent\Builder|NewsArticle wherePublishedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|NewsArticle whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|NewsArticle whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|NewsArticle whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|NewsArticle published()
 * @method static \Illuminate\Database\Eloquent\Builder|NewsArticle recent()
 * @method static \Database\Factories\NewsArticleFactory factory($count = null, $state = [])
 * 
 * @mixin \Eloquent
 */
class NewsArticle extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'title',
        'slug',
        'excerpt',
        'content',
        'featured_image',
        'is_published',
        'published_at',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'is_published' => 'boolean',
        'published_at' => 'datetime',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Scope a query to only include published articles.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopePublished($query)
    {
        return $query->where('is_published', true)->where('published_at', '<=', now());
    }

    /**
     * Scope a query to order by most recent first.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeRecent($query)
    {
        return $query->orderBy('published_at', 'desc');
    }
}