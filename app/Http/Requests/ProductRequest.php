<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            //
            'name' => 'required|string|max:45',
            'description' => 'required|string',
            'stock' => 'required|integer|min:0',
            'purchase' => 'required|numeric|min:0',
            'sell' => 'required|numeric|min:0',
        ];
    }
    public function messages():array
    {
        return[
            'name.required' => 'Name is required bub',
            'name.max' => 'Name must be less than 45 characters',
            'description.required' => 'description is required',
        ];
    }
    public function attributes():array
    {
        return[
            'name' => 'Nombre del producto',
            'description' => 'Product Description',
            'stock' => 'Product Stock',
            'purchase' => 'Product Purchase Price',
            'sell' => 'Product Sell Price',
        ];
    }
}
