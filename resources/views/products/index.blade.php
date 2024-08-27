@extends('adminlte::page')

@section('title', 'Products')

@section('content_header')
    <h1>Products</h1>
@endsection

@section('content')
    <div id="app">
        <btn-modal-component text="Add Product" cls="btn btn-primary" id="{{ 'add' }}" title="Add Product" btn-name="Add"
            form-modal="products">
            <template v-slot:body>
                @csrf
                <label for="">Name</label>
                <input name="name" class="form-control" value="{{old('name')}}"></input>
                @error('name')
                    <a-alert type="error" message="{{ $message }}"></a-alert>
                @enderror
                <label for="">Description</label>
                <input name="description" class="form-control" value="{{old('description')}}"></input>
                @error('description')
                    <a-alert type="error" message="{{ $message }}"></a-alert>
                @enderror
                <label for="">Stock</label>
                <input type="number" name="stock" class="form-control" value="{{old('stock')}}"></input>
                @error('stock')
                    <a-alert type="error" message="{{ $message }}"></a-alert>
                @enderror
                <label for="">Purchase</label>
                <input type="number" step="0.01" name="purchase" class="form-control" value="{{old('purchase')}}"></input>
                @error('purchase')
                    <a-alert type="error" message="{{ $message }}"></a-alert>
                @enderror
                <label for="">Sell</label>
                <input type="number" step="0.01" name="sell" class="form-control" value="{{old('sell')}}"></input>
                @error('sell')
                    <a-alert type="error" message="{{ $message }}"></a-alert>
                @enderror

            </template>
        </btn-modal-component>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Purchase</th>
                    <th scope="col">Sell</th>
                    <th>Actions</th>
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
                        <td class="d-flex flex-row bd-highlight mb-3">
                            <btn-modal-component id="{{ 'edit' . $product->id }}" cls="btn btn-warning" btn-name="Editar"
                                icon="fa fa-cog" form-modal="{{ 'products/' . $product->id }}" title="Product Edit">
                                <template v-slot:body>
                                    @csrf
                                    @method('PUT')
                                    <label for="">Name</label>
                                    <input name="name" class="form-control" value="{{ $product->name }}"/>
                                    <label for="">Description</label>
                                    <input name="description" class="form-control"
                                        value="{{ $product->description }}"/>
                                    <label for="">Stock</label>
                                    <input name="stock" class="form-control" value="{{ $product->stock }}"/>
                                    <label for="">Purchase</label>
                                    <input name="purchase" class="form-control" value="{{ $product->purchase }}"/>
                                    <label for="">Sell</label>
                                    <input name="sell" class="form-control" value="{{ $product->sell }}"/>
                                </template>
                            </btn-modal-component>
                            <btn-modal-component id="{{ 'delete' . $product->id }}" cls="btn btn-danger"
                                btn-name="Eliminar" icon="fa fa-trash" title="Delete Product"
                                form-modal="{{ 'products/' . $product->id }}">
                                <template v-slot:body>
                                    @csrf
                                    @method('DELETE')
                                    <p>Are you sure you want to delete the product {{ $product->name }}?</p>
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
    <link rel="stylesheet" href="{{ asset('css/custom.css') }}">
@endsection

@section('js')
    <script src="{{ mix('js/app.js') }}"></script>
@endsection
