<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreCarRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'min:3', 'max:80'],
            'brand' => ['required', 'min:3', 'max:30'],
            'manufacturing_year' => ['required', 'integer'],
            'image' => ['file'],
            'category_id' => ['required'],
            'quantity_in_stock' => ['integer'],
        ];
    }
}
