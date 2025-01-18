<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    use HasFactory;

    protected $fillable = [
        'subject',
        'description',
        'date_creation',
        'status',
    ];

    public function seller()
    {
        return $this->belongsTo(Seller::class);
    }
}
