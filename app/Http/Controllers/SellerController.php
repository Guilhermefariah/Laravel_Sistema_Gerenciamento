<?php

namespace App\Http\Controllers;

use App\Http\Requests\SellerRequest;
use App\Models\Seller;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class SellerController extends Controller
{
    public function index(): Response
    {
        $sellers = Seller::orderByDesc('id')->paginate(10);

        return Inertia::render('Sellers/SellerIndex', ['sellers' => $sellers]);
    }

    public function show(Seller $seller): Response
    {
        return Inertia::render('Sellers/SellerShow', ['seller' => $seller]);
    }


    public function create(): Response
    {
        return Inertia::render('Sellers/SellerCreate');
    }

    public function store(SellerRequest $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required',
            'phone' => 'required',
        ], [
            'name.required' => 'O nome é obrigatório',
            'name.string' => 'O nome deve ser uma string',
            'email.required' => 'O email é obrigatório',
            'email.email' => 'O email é inválido',
            'email.unique' => 'O email já está em uso',
            'phone.required' => 'O telefone é obrigatório',
            'phone.unique' => 'O telefone já está em uso',
        ]);

        $seller = Seller::create([
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
        ]);

        return Redirect::route('sellers.show', ['seller' => $seller->id])->with('success', 'Vendedor cadastrado com sucesso');
    }

    public function edit(Seller $seller): Response
    {
        return Inertia::render(('Sellers/SellerEdit'), ['seller' => $seller]);
    }

    public function update(SellerRequest $request, Seller $seller)
    {
        $request->validate([
            'name' => 'required',
            'email' => "required",
            'phone' => 'required',
        ], [
            'name.required' => 'O nome é obrigatório',
            'name.string' => 'O nome deve ser uma string',
            'email.required' => 'O email é obrigatório',
            'email.email' => 'O email é inválido',
            'email.unique' => 'O email já está em uso',
            'phone.required' => 'O telefone é obrigatório',
            'phone.unique' => 'O telefone já está em uso',
        ]);

        $seller->update([
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
        ]);

        return Redirect::route('sellers.show', ['seller' => $seller->id])->with('success', 'Vendedor atualizado com sucesso');
    }

    public function destroy(Seller $seller)
    {
        $seller->delete();

        return Redirect::route('sellers.index')->with('success', 'Vendedor excluido com sucesso');
    }
}
