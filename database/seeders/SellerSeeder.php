<?php

namespace Database\Seeders;

use App\Models\Seller;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
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
                'status' => 'Ativo',
                'amount_tickets' => json_encode([
                    'em_aberto' => 5,
                    'em_andamento' => 2,
                    'resolvido' => 10
                ]),
            ]);

            Seller::create([
                'name' => 'Maria',
                'email' => 'maria@gmail.com',
                'phone' => '11999999999',
                'status' => 'Ativo',
                'amount_tickets' => json_encode([
                    'em_aberto' => 5,
                    'em_andamento' => 2,
                    'resolvido' => 10
                ]),
            ]);

            Seller::create([
                'name' => 'Pedro',
                'email' => 'pedro@gmail.com',
                'phone' => '11999999999',
                'status' => 'Ativo',
                'amount_tickets' => json_encode([
                    'em_aberto' => 4,
                    'em_andamento' => 3,
                    'resolvido' => 7
                ]),
            ]);

            Seller::create([
                'name' => 'Ana',
                'email' => 'ana@gmail.com',
                'phone' => '11999999999',
                'status' => 'Ativo',
                'amount_tickets' => json_encode([
                    'em_aberto' => 6,
                    'em_andamento' => 4,
                    'resolvido' => 9
                ]),
            ]);

            Seller::create([
                'name' => 'Lucas',
                'email' => 'lucas@gmail.com',
                'phone' => '11999999999',
                'status' => 'Ativo',
                'amount_tickets' => json_encode([
                    'em_aberto' => 6,
                    'em_andamento' => 7,
                    'resolvido' => 8
                ]),
            ]);
        }
    }
}
