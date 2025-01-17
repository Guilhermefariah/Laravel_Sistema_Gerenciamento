<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    use HasFactory;

    protected $fillable = ['subject', 'description', 'date_creation', 'date_resolution', 'status', 'seller_id'];

    public function seller()
    {
        return $this->belongsTo(Seller::class);
    }

    public function isDelayed()
    {
        return $this->status === 'Delayed' && $this->date_creation->diffInHours(now()) > 24;
    }
}
