<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\GalleryItem>
 */
class GalleryItemFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $fileType = fake()->randomElement(['image', 'video']);
        
        return [
            'title' => fake()->sentence(4),
            'description' => fake()->paragraph(2),
            'file_path' => $fileType === 'image' 
                ? fake()->imageUrl(800, 600, 'transport') 
                : 'https://www.youtube.com/watch?v=' . fake()->lexify('???????????'),
            'file_type' => $fileType,
            'category' => fake()->randomElement(['project', 'corporate', 'construction', 'ceremony']),
            'is_featured' => fake()->boolean(20),
            'sort_order' => fake()->numberBetween(0, 100),
        ];
    }

    /**
     * Indicate that the gallery item is an image.
     */
    public function image(): static
    {
        return $this->state(fn (array $attributes) => [
            'file_type' => 'image',
            'file_path' => fake()->imageUrl(800, 600, 'transport'),
        ]);
    }

    /**
     * Indicate that the gallery item is a video.
     */
    public function video(): static
    {
        return $this->state(fn (array $attributes) => [
            'file_type' => 'video',
            'file_path' => 'https://www.youtube.com/watch?v=' . fake()->lexify('???????????'),
        ]);
    }

    /**
     * Indicate that the gallery item is featured.
     */
    public function featured(): static
    {
        return $this->state(fn (array $attributes) => [
            'is_featured' => true,
        ]);
    }
}