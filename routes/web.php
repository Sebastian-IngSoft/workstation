<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return redirect('/login');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::view('trained/index', 'trained')->name('trained.index');

// Agrupar rutas con middleware 'auth'
Route::group(['middleware' => 'auth'], function () {
    Route::resource('products', 'ProductController');
    Route::resource('customers', 'CustomerController');

    //rutas de sales
    Route::get('sales/make', 'SaleController@make')->name('sales.make');
    Route::resource('sales', 'SaleController')->only(['store']);
    Route::resource('tickets', 'TicketController')->only(['index', 'show']);
});

