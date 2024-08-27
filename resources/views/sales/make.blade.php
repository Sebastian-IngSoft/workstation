@extends('adminlte::page')

@section('title', 'Products')

@section('content_header')
    <h1>Make Sale</h1>
@endsection

@section('content')
    <div id="app" class="container">
        <form action="{{route('sales.store')}}" method="POST">
            @csrf
            <label for="">Select Customer</label>
            <select-component :content="{{ json_encode($customers) }}" name="customer_id"></select-component>
            <products-sale-component :products="{{json_encode($products)}}" name="product_id"></products-sale-component>
        </form>
    </div>
@endsection

@section('css')
    <link rel="stylesheet" href="{{ asset('css/custom.css') }}">
@endsection

@section('js')
    <script src="{{ mix('js/app.js') }}"></script>
@endsection
