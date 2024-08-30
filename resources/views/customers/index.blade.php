@extends('adminlte::page')

@section('title', 'Customers')

@section('content_header')
    <h1>Customers</h1>
@endsection

@section('content')
    <div id="app">
        @if ($errors->any())
            <a-alert type="error" message="Operation Error"></a-alert>
            <br>
        @endif
        <btn-modal-component
        text="New Customer"
        id="addCustomer"
        title="New Customer"
        cls="btn btn-primary"
        form-modal="customers"
        btn-name="Save"
        >
        <template v-slot:body>
            @csrf
            <label for="">Name</label>
            <input name="name" class="form-control" value="{{ old('name') }}"></input>
            @error('name')
            <a-alert type="error" message="{{ $message }}"></a-alert>
            @enderror
            <label for="">DNI</label>
            <input name="dni" class="form-control" value="{{ old('dni') }}"></input>
            @error('dni')
            <a-alert type="error" message="{{ $message }}"></a-alert>
            @enderror
            <label for="">Phone Number</label>
            <input name="number" class="form-control" value="{{ old('number') }}"></input>
            @error('number')
            <a-alert type="error" message="{{ $message }}"></a-alert>
            @enderror
        </template>
        </btn-modal-component>
        <table class="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>DNI</th>
                    <th>Phone Number</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($customers as $customer)
                    <tr>
                        <td>{{ $customer->name }}</td>
                        <td>{{ $customer->dni }}</td>
                        <td>{{ $customer->number }}</td>
                        <td class="d-flex flex-row">
                            <btn-modal-component id="{{ 'edit' . $customer->id }}" icon="fas fa-edit" cls="btn btn-warning"
                                title="Edit Customer" btn-name="Edit" form-modal="{{ 'customers/' . $customer->id }}">
                                <template v-slot:body>
                                    @csrf
                                    @method('PUT')
                                    <label for="">Name</label>
                                    <input name="name" class="form-control"
                                        value="{{ old('name') ?? $customer->name }}"></input>
                                    @error('name')
                                        <a-alert type="error" message="{{ $message }}"></a-alert>
                                    @enderror
                                    <label for="">DNI</label>
                                    <input name="dni" class="form-control"
                                        value="{{ old('dni') ?? $customer->dni }}"></input>
                                    @error('dni')
                                        <a-alert type="error" message="{{ $message }}"></a-alert>
                                    @enderror
                                    <label for="">Phone Number</label>
                                    <input name="number" class="form-control"
                                        value="{{ old('number') ?? $customer->number }}"></input>
                                    @error('number')
                                        <a-alert type="error" message="{{ $message }}"></a-alert>
                                    @enderror
                                </template>
                            </btn-modal-component>
                            <btn-modal-component id="{{ 'delete' . $customer->id }}" icon="fas fa-trash" cls="btn btn-danger"
                                title="Delete Customer" btn-name="Delete" form-modal="{{ 'customers/' . $customer->id }}">
                                <template v-slot:body>
                                    @csrf
                                    @method('DELETE')
                                    <p>Are you sure you want to delete the customer {{$customer->name}}?</p>
                                </template>
                            </btn-modal-component>

                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
        {{ $customers->links() }}
    </div>
@endsection

@section('css')
    <link rel="stylesheet" href="{{ asset('css/custom.css') }}">
@endsection

@section('js')
    <script src="{{ mix('js/app.js') }}"></script>
@endsection
