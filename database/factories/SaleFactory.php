<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Product;
use App\Sale;
use App\Ticket;
use Faker\Generator as Faker;

$factory->define(Sale::class, function (Faker $faker) {
    $product = Product::inRandomOrder()->first();
    $ticket = Ticket::InRandomOrder()->first();
    return [
        'amount'=>$faker->randomNumber(2),
        'product_id'=>$product->id,
        'ticket_id'=>$ticket->id,

    ];
});
