@extends('adminlte::page')

@section('title', 'Products')

@section('content_header')
    <h1>Tickets</h1>
@endsection

@section('content')
    <div id="app">
        <table-component></table-component>
    </div>
@endsection

@section('css')
    <!-- No incluir el CSS generado por Laravel Mix para evitar conflictos con AdminLTE -->
@endsection

@section('js')
    <script src="{{ mix('js/app.js') }}"></script>
@endsection