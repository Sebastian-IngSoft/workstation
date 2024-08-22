<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

class CreateTicketsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::table('users')->insert([
            'id' => 0,
            'name' => 'Default User',
            'email' => 'default@default.com',
            'password' => bcrypt('password'), // Make sure to hash the password
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        Schema::create('tickets', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->double('price',2);
            $table->double('discount',2)->nullable();
            $table->double('total',2)->nullable();

            //relations
            $table->unsignedBigInteger('customer_id')->nullable();
            $table->foreign('customer_id')->references('id')->on('customers');
            $table->unsignedBigInteger('user_id')->default(0);
            $table->foreign('user_id')->references('id')->on('users')->onDelete('set default');

            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tickets');
    }
}
