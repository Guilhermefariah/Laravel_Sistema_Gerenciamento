<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SellerRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255'],
            'phone' => ['required', 'string', 'max:255'],
            'amount_tickets' => ['required', 'array'],
            'amount_tickets.em_aberto' => ['required', 'integer', 'min:0'],
            'amount_tickets.em_andamento' => ['required', 'integer', 'min:0'],
            'amount_tickets.resolvido' => ['required', 'integer', 'min:0'],
            'status' => ['required'],
        ];
    }    
}
