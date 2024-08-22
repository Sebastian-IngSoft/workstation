<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Customer;
use App\Ticket;
use App\User;
use Faker\Generator as Faker;

$factory->define(Ticket::class, function (Faker $faker) {
    $user = User::inRandomOrder()->first();
    $customer=Customer::inRandomOrder()->first();
    return [
        'price' => $faker->randomFloat(2, 1, 100),
        'user_id' => $user->id,
        'customer_id' => $customer->id,
    ];
});
