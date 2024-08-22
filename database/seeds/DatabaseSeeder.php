<?php

use App\Customer;
use App\Debt;
use App\Product;
use App\Sale;
use App\Ticket;
use App\User;
use App\Wallet;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        User::create([
            'name' => 'Developer User',
            'email' => 'test@test.com',
            'password' => bcrypt('password')
        ]);
        Wallet::created([
            'balance' => 0,
            'flow' => 0,
            'walletable_id' => 1,
            'walletable_type' => User::class
        ]);
        factory(User::class,9)->create();
        factory(Product::class,50)->create();
        factory(Customer::class,20) ->create();
        factory(Ticket::class,100)->create();
        factory(Sale::class,1000)->create();

        $tickets = Ticket::all();
        foreach ($tickets as $ticket) {
            Debt::create([
                'ticket_id' => $ticket->id,
                'user_id' => $ticket->user_id,
            ]);
        }
    }
}
