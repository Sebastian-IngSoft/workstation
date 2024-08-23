<?php

namespace App\Http\Controllers;

use App\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = Product::all(); // Obtén los datos de los productos desde la base de datos
        $headers = [
            ['title' => 'ID', 'dataIndex' => 'id', 'key' => 'id'],
            ['title' => 'Nombre', 'dataIndex' => 'name', 'key' => 'name'],
            ['title' => 'Descripcion', 'dataIndex' => 'description', 'key' => 'description'],
            ['title' => 'Stock', 'dataIndex' => 'stock', 'key' => 'stock'],
            ['title' => 'Compra', 'dataIndex' => 'purchase', 'key' => 'purchase'],
            ['title' => 'Venta', 'dataIndex' => 'sell', 'key' => 'sell'],
            // Agrega más columnas según tus necesidades
        ];
        return view('products.index', compact('products', 'headers'));
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        //
    }
}
