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
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:Sellers',
            'phone' => 'required|string|max:255',
        ], [
            'name.required' => 'O nome é obrigatório',
            'name.max' => 'O nome deve ter menos de 255 caracteres',
            'email.required' => 'O email é obrigatório',
            'email.max' => 'O email deve ter menos de 255 caracteres',
            'email.email' => 'O email é inválido',
            'email.unique' => 'O email já está em uso',
            'phone.required' => 'O telefone é obrigatório',
            'phone.max' => 'O telefone deve ter menos de 255 caracteres',
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
            'name' => 'required|string|max:255',
            'email' => "required|string|email|max:255|unique:Sellers,email,{$seller->id}",
            'phone' => 'required|string|max:255',
        ], [
            'name.required' => 'O nome é obrigatório',
            'name.max' => 'O nome deve ter menos de 255 caracteres',
            'email.required' => 'O email é obrigatório',
            'email.max' => 'O email deve ter menos de 255 caracteres',
            'email.email' => 'O email é inválido',
            'email.unique' => 'O email já está em uso',
            'phone.required' => 'O telefone é obrigatório',
            'phone.max' => 'O telefone deve ter menos de 255 caracteres',
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
