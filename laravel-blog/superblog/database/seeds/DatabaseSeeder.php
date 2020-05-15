<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UserSeeder::class);
        factory(App\User::class, 10)->create();
        factory(App\Category::class, 10)->create();
        factory(App\Posts::class, 10)->create();
    }
}
