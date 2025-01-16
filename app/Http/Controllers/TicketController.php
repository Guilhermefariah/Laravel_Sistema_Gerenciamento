<?php

namespace App\Http\Controllers;

use App\Http\Requests\TicketRequest;
use App\Models\Ticket;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class TicketController extends Controller
{
    public function index(): Response 
    {
        $tickets = Ticket::orderByDesc('id')->paginate(10);

        return Inertia::render('Tickets/TicketIndex', ['tickets' => $tickets]);
    }

    public function show(Ticket $ticket): Response
    {
        return Inertia::render('Tickets/TicketShow', ['ticket' => $ticket]);
    }


    public function create(): Response
    {
        return Inertia::render('Tickets/TicketCreate');
    }

    public function store(TicketRequest $request)
    {
        $request->validate([
            'subject' => 'required|string|max:255',
            'description' => 'required|string|max:255',
            'date_creation' => 'required|string|max:255',
            'status' => 'required',
        ], [
            'subject.required' => 'O assunto é obrigatório',
            'subject.max' => 'O assunto deve ter menos de 255 caracteres',
            'description.required' => 'A descrição é obrigatória',
            'description.max' => 'A descrição deve ter menos de 255 caracteres',
            'date_creation.required' => 'A data de criação é obrigatória',
            'date_creation.max' => 'A data de criação deve ter menos de 255 caracteres',
        ]);

        $ticket = Ticket::create([
            'subject' => $request->subject,
            'description' => $request->description,
            'date_creation' => $request->date_creation,
            'status' => $request->status
        ]);
        
        return Redirect::route('tickets.show', ['ticket' => $ticket->id])->with('success', 'Ticket created successfully');
    }

    public function edit(Ticket $ticket): Response
    {
        return Inertia::render(('Tickets/TicketEdit'), ['ticket' => $ticket]);
    }

    public function update(TicketRequest $request, Ticket $ticket)
    {
        $request->validate([
            'subject' => 'required|string|max:255',
            'description' => 'required|string|max:255',
            'date_creation' => 'required|string|max:255',
            'status' => 'required',
        ], [
            'subject.required' => 'O assunto é obrigatório',
            'subject.max' => 'O assunto deve ter menos de 255 caracteres',
            'description.required' => 'A descrição é obrigatória',
            'description.max' => 'A descrição deve ter menos de 255 caracteres',
            'date_creation.required' => 'A data de criação é obrigatória',
            'date_creation.max' => 'A data de criação deve ter menos de 255 caracteres',
        ]);

        $ticket->update([
            'subject' => $request->subject,
            'description' => $request->description,
            'date_creation' => $request->date_creation,
            'status' => $request->status
        ]);

        return Redirect::route('tickets.show', ['ticket' => $ticket->id])->with('success', 'Ticket updated successfully');
    }

    public function destroy(Ticket $ticket)
    {
        $ticket->delete();

        return Redirect::route('tickets.index')->with('success', 'Ticket deleted successfully');
    }
}
