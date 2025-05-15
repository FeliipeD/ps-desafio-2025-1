<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateVehicleRequest extends FormRequest
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
            'name' => ['sometimes', 'min:3', 'max:80'],
            'brand' => ['sometimes', 'min:3', 'max:30'],
            'manufacturing_year' => ['sometimes', 'integer'],
            'image' => ['sometimes', 'file'],
            'category_id' => ['sometimes'],
            'quantity_in_stock' => ['integer'],
        ];
    }
}
