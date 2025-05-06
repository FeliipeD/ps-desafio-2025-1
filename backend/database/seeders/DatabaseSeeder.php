<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\User;
use App\Models\Vehicle;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory(10)->create();
        Category::factory(3)->create()->each(function ($category) {

            // Para cada uma das 3 categorias, cria 2 veículos vinculados a ela.
            Vehicle::factory(2)->create([
                'category_id' => $category->id,
            ]);
        });

        $user = User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);
        $user->assignPermission('admin');
    }
}
