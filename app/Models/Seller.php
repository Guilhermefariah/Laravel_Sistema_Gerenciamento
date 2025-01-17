<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Seller extends Model
{
    protected $table = 'sellers';
    protected $fillable = [
        'name',
        'email',
        'password',
        'address',
        'phone',
    ];

    public function sellTickets()
    {
        return $this->hasMany(Ticket::class);
    }
}
