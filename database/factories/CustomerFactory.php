<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Customer;
use Faker\Generator as Faker;

$factory->define(Customer::class, function (Faker $faker) {
    return [
        'name'=>$faker->name,
        'dni'=>$faker->randomNumber(8, true),
        'number'=>$faker->randomNumber(9, true),
    ];
});
