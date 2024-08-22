<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Product;
use Faker\Generator as Faker;

$factory->define(Product::class, function (Faker $faker) {
    $purchase = $this->faker->randomFloat(2, 1, 20);  
    $sell = $purchase + $this->faker->randomFloat(2, 1, 3);
    return [
        'name'=>$faker->name,
        'description'=>$faker->text(200),
        'stock'=>$faker->randomNumber(2),
        'purchase'=>$purchase,
        'sell'=>$sell,
    ];
});
