<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Project>
 */
class ProjectFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $title = fake()->sentence(4) . ' Highway Project';
        
        return [
            'title' => $title,
            'slug' => \Illuminate\Support\Str::slug($title),
            'description' => fake()->paragraph(3),
            'content' => fake()->paragraphs(6, true),
            'featured_image' => fake()->imageUrl(800, 600, 'transport'),
            'status' => fake()->randomElement(['active', 'completed', 'planning']),
            'start_date' => fake()->dateTimeBetween('-2 years', 'now'),
            'end_date' => fake()->dateTimeBetween('now', '+2 years'),
            'budget' => fake()->randomFloat(2, 10000000, 500000000),
            'location' => fake()->city() . ', ' . fake()->country(),
            'is_featured' => fake()->boolean(30),
        ];
    }

    /**
     * Indicate that the project is featured.
     */
    public function featured(): static
    {
        return $this->state(fn (array $attributes) => [
            'is_featured' => true,
        ]);
    }

    /**
     * Indicate that the project is completed.
     */
    public function completed(): static
    {
        return $this->state(fn (array $attributes) => [
            'status' => 'completed',
            'end_date' => fake()->dateTimeBetween('-1 year', 'now'),
        ]);
    }
}