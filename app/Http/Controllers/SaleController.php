<?php

namespace App\Http\Controllers;

use App\Customer;
use App\Product;
use App\Sale;
use App\Ticket;
use Illuminate\Http\Request;

class SaleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function make()
    {
        //SOLO QUIERO TENER LA COLUMNA NAME Y EL ID
        $customers = Customer::select('id', 'name')->orderby('name','asc')->get();
        $products = Product::orderby('name','asc')->get();
        return view('sales.make', compact('customers', 'products'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $productTotal=0;
        for ( $i=0; $i < count($request['product_id']) ; $i++) {
            $productTotal  += (((Product::select('sell')->where('id',  $request['product_id'][$i])->first())->sell) * ($request['quantity'][$i]));
        }
        $ticket = Ticket::create([
            'customer_id' => $request['customer_id'],
            'user_id' => auth()->user()->id,
            'price' => $productTotal,
        ]);
        for ($i=0; $i < count($request['product_id']) ; $i++) { 
            Sale::create([
                'product_id' => $request['product_id'][$i],
                'amount' => $request['quantity'][$i],
                'ticket_id' => $ticket->id,
            ]);
        }
        return redirect()->route('sales.make')->with('info', 'Venta guardada con éxito');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Sale  $sale
     * @return \Illuminate\Http\Response
     */
    public function show(Sale $sale)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Sale  $sale
     * @return \Illuminate\Http\Response
     */
    public function edit(Sale $sale)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Sale  $sale
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Sale $sale)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Sale  $sale
     * @return \Illuminate\Http\Response
     */
    public function destroy(Sale $sale)
    {
        //
    }
}
