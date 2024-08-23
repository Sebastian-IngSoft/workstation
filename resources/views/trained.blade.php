@extends('adminlte::page')

@section('title', 'VUE')

@section('content_header')
    <h1>Practicas de Vue2 AntDesign1</h1>
@endsection

@section('content')
    <div id="app">
        <trained-component></trained-component>
    </div>
@endsection

@section('css')
<link rel="stylesheet" href="{{ asset('css/custom.css') }}">

@endsection

@section('js')
    <script src="{{ mix('js/app.js') }}"></script>
@endsection
