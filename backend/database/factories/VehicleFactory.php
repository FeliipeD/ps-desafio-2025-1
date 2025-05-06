<?php

namespace Database\Factories;

use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Vehicle>
 */
class VehicleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->firstname(),
            'brand' => fake()->company(),
            'manufacturing_year' => fake()->numberBetween(2020, 2025),
            'image' => 'https://picsum.photos/'.rand(150, 300),
            'quantity_in_stock' => fake()->numberBetween(1, 10),
            'category_id' => Category::factory(), //Vinculando uma cateogry a um cateogry_id do vehicle.
        ];
    }
}
