<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCarRequest;
use App\Http\Requests\UpdateCarRequest;
use App\Models\Car;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Throwable;

class CarController extends Controller
{
    protected $car;

    public function __construct(Car $car)
    {
        $this->car = $car;
    }

    /**
     * Display a listing of the resource.
     */
    public function index(): JsonResponse
    {
        $cars = $this->car->with('category')->get();

        return response()->json($cars, Response::HTTP_OK);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCarRequest $request): JsonResponse
    {
        $data = $request->validated();

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('cars', 'public');
            $data['image'] = url('storage/'.$path);
        }

        $car = $this->car->create($data);

        $id = $car->id;

        $car_category = $this->car->with('category')->findOrFail($id);

        return response()->json($car_category, response::HTTP_CREATED);
    }

    /**
     * Display the specified resource.
     */
    public function show($id): JsonResponse
    {
        $car = $this->car->with('category')->findOrFail($id);

        return response()->json($car, response::HTTP_OK);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Car $car)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCarRequest $request, $id): JsonResponse
    {
        $car = $this->car->with('category')->findOrFail($id);

        $data = $request->validated();

        if ($request->hasFile('image')) {
            try {
                $image_name = explode('cars/', $car['image']);
                Storage::disk('public')->delete('cars'.$image_name[1]);
            } catch (Throwable) {
            } finally {
                $path = $request->file('image')->store('cars', 'public');

                $data['iamge'] = url('storage'.$path);
            }
        }

        $car->update($data);

        return response()->json($car, response::HTTP_OK);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $car = $this->car->findOrFail($id);

        $car->delete();

        return response()->json(['message' => 'Carro deletado com sucesso!']);
    }
}
