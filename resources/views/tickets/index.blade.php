@extends('adminlte::page')

@section('title', 'Tickets')

@section('content_header')
    <h1>Tickets</h1>
@endsection

@section('content')
    <div id="app">
        <table class="ant-table">
            <thead>
                <tr>
                    <th>test</th>
                    <th>test</th>
                    <th>test</th>
                    <th>test</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                </tr>
            </tbody>
        </table>
    </div>
@endsection

@section('css')
    <!-- No incluir el CSS generado por Laravel Mix para evitar conflictos con AdminLTE -->
@endsection

@section('js')
    <script src="{{ mix('js/app.js') }}"></script>
@endsection