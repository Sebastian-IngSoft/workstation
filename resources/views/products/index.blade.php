@extends('adminlte::page')

@section('title', 'Products')

@section('content_header')
    <h1>Products</h1>
@endsection

@section('content')
    <div id="app">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Purchase</th>
                    <th scope="col">Sell</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($products as $product)
                    <tr>
                        <td>{{ $product->name }}</td>
                        <td>{{ $product->description }}</td>
                        <td>{{ $product->stock }}</td>
                        <td>{{ $product->purchase }}</td>
                        <td>{{ $product->sell }}</td>
                        <td>
                            <btn-modal-component :id="{{ $product->id }}" cls="btn btn-warning" btn-name="Editar"
                                icon="fa fa-cog" form-modal="{{'products/'.$product->id}}" title="Product Edit">
                                <template v-slot:body>
                                    @csrf
                                    @method('PUT')
                                    <label for="">Name</label>
                                    <input name="name" class="form-control" value="{{ $product->name }}"></input>
                                    <label for="">Description</label>
                                    <input name="description" class="form-control" value="{{ $product->description }}"></input>
                                    <label for="">Stock</label>
                                    <input name="stock" class="form-control" value="{{ $product->stock }}"></input>
                                    <label for="">Purchase</label>
                                    <input name="purchase" class="form-control" value="{{ $product->purchase }}"></input>
                                    <label for="">Sell</label>
                                    <input name="sell" class="form-control" value="{{ $product->sell }}"></input>
                                </template>
                            </btn-modal-component>
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>
@endsection

@section('css')

@endsection

@section('js')
    <script src="{{ mix('js/app.js') }}"></script>
@endsection
