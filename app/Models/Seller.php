<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Seller extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'email', 'phone', 'status', 'open_tickets', 'in_progress_tickets', 'resolved_tickets'];


    public function tickets()
    {
        return $this->hasMany(Ticket::class);
    }

    public function isActive()
    {
        return $this->status === 'Active';
    }
}
