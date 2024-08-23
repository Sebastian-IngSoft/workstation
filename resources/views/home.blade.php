@extends('adminlte::page')

@section('title', 'Products')

@section('content_header')
    <h1>Componentes Ant Design version 1</h1>
@endsection

@section('content')
    <div id="app">
        <ant-design-components></ant-design-components>
    </div>
@endsection

@section('css')
    <!-- No incluir el CSS generado por Laravel Mix para evitar conflictos con AdminLTE -->
@endsection

@section('js')
    <script src="{{ mix('js/app.js') }}"></script>
@endsection