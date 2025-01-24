<?php

namespace Database\Seeders;

use App\Models\Seller;
use Illuminate\Database\Seeder;

class SellerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        if (!Seller::where('email', 'joao@gmail.com')->exists()) {
            Seller::create([
                'name' => 'João',
                'email' => 'joao@gmail.com',
                'phone' => '11999999999',

            ]);

            Seller::create([
                'name' => 'Maria',
                'email' => 'maria@gmail.com',
                'phone' => '11999999999',
            ]);

            Seller::create([
                'name' => 'Pedro',
                'email' => 'pedro@gmail.com',
                'phone' => '11999999999',
            ]);

            Seller::create([
                'name' => 'Ana',
                'email' => 'ana@gmail.com',
                'phone' => '11999999999',
            ]);

            Seller::create([
                'name' => 'Lucas',
                'email' => 'lucas@gmail.com',
                'phone' => '11999999999',
            ]);

            Seller::create([
                'name' => 'Carlos',
                'email' => 'carlos@gmail.com',
                'phone' => '11988888888',
            ]);

            Seller::create([
                'name' => 'Juliana',
                'email' => 'juliana@gmail.com',
                'phone' => '11977777777',
            ]);

            Seller::create([
                'name' => 'Rafael',
                'email' => 'rafael@gmail.com',
                'phone' => '11966666666',
            ]);

            Seller::create([
                'name' => 'Beatriz',
                'email' => 'beatriz@gmail.com',
                'phone' => '11955555555',
            ]);

            Seller::create([
                'name' => 'Gabriel',
                'email' => 'gabriel@gmail.com',
                'phone' => '11944444444',
            ]);

            Seller::create([
                'name' => 'Fernanda',
                'email' => 'fernanda@gmail.com',
                'phone' => '11933333333',
            ]);
        }
    }
}
