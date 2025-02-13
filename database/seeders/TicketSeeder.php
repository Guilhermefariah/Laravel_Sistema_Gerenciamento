<?php

namespace Database\Seeders;

use App\Models\Ticket;
use Illuminate\Database\Seeder;

class TicketSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        if (!Ticket::where('subject', 'livros')->exists()) {
            Ticket::create([
                'subject' => 'Código Limpo',
                'description' => 'Código Limpo é um livro muito bom.',
                'date_creation' => now(),
                'status' => 'Aberto'
            ]);
            
            Ticket::create([
                'subject' => 'Livro de PHP',
                'description' => 'Este livro de PHP é muito bom.',
                'date_creation' => now(),
                'status' => 'Aberto'
            ]);

            Ticket::create([
                'subject' => 'Livro de Python',
                'description' => 'Este livro de Python é muito bom.',
                'date_creation' => now(),
                'status' => 'Aberto'
            ]);

            Ticket::create([
                'subject' => 'Livro de Java',
                'description' => 'Este livro de Java é muito bom.',
                'date_creation' => now(),
                'status' => 'Aberto'
            ]);

            Ticket::create([
                'subject' => 'Livro de C#',
                'description' => 'Este livro de C# é muito bom.',
                'date_creation' => now(),
                'status' => 'Aberto'
            ]);

            Ticket::create([
                'subject' => 'Livro de JavaScript',
                'description' => 'Este livro de JavaScript é muito bom.',
                'date_creation' => now(),
                'status' => 'Aberto'
            ]);

            Ticket::create([
                'subject' => 'Livro de SQL',
                'description' => 'Este livro de SQL é muito bom.',
                'date_creation' => now(),
                'status' => 'Aberto'
            ]);

            Ticket::create([
                'subject' => 'Livro de Algoritmos',
                'description' => 'Este livro de Algoritmos é muito bom.',
                'date_creation' => now(),
                'status' => 'Aberto'
            ]);

            Ticket::create([
                'subject' => 'Livro de Design Patterns',
                'description' => 'Este livro de Design Patterns é muito bom.',
                'date_creation' => now(),
                'status' => 'Aberto'
            ]);

            Ticket::create([
                'subject' => 'Livro de Machine Learning',
                'description' => 'Este livro de Machine Learning é muito bom.',
                'date_creation' => now(),
                'status' => 'Aberto'
            ]);
        }
    }
}
