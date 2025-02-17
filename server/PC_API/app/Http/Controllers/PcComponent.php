<?php

namespace App\Http\Controllers;

use App\Models\PcComponent as PcComponentModel;
use Illuminate\Http\Request;

class PcComponent extends Controller
{
    public function index()
    {
        return PcComponentModel::all();
    }

    public function show($id)
    {
        return PcComponentModel::findOrFail($id);
    }

    public function showByType($type)
    {
        return PcComponentModel::where('type', $type)->get();
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string',
            'price' => 'required|numeric',
            'type' => 'required|string'
        ]);

        return PcComponentModel::create($validated);
    }

    public function update(Request $request, $id)
    {
        $component = PcComponentModel::findOrFail($id);
        
        $validated = $request->validate([
            'name' => 'required|string',
            'price' => 'required|numeric',
            'type' => 'required|string'
        ]);

        $component->update($validated);
        return $component;
    }

    public function destroy($id)
    {
        $component = PcComponentModel::findOrFail($id);
        $component->delete();
        return response()->noContent();
    }
}
