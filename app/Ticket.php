<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    //
    protected $fillable = ['customer_id', 'user_id', 'price', 'discount', 'total'];
}
