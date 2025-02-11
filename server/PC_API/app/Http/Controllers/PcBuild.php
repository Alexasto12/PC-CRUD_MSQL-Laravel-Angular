<?php

namespace App\Http\Controllers;

use App\Models\PcBuild as PcBuildModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PcBuild extends Controller
{
    public function index()
    {
        $builds = PcBuildModel::with('components')->get();
        return $builds->map(function($build) {
            $build->price = $build->setPrice();
            return $build;
        });
    }
    
    public function show($id)
    {
        $build = PcBuildModel::with('components')->findOrFail($id);
        $build->price = $build->setPrice();
        return $build;
    }
    
    public function attachComponent($buildId, $componentId)
    {
        $build = PcBuildModel::findOrFail($buildId);
        $build->components()->attach($componentId);
        return $build->load('components');
    }

    public function detachComponent($buildId, $componentId)
    {
        $build = PcBuildModel::findOrFail($buildId);
        $build->components()->detach($componentId);
        return $build->load('components');
    }
    
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string',
            'image' => 'nullable|string',
            'components' => 'required|array'
        ]);

        DB::beginTransaction();
        try {
            $build = PcBuildModel::create([
                'name' => $validated['name'],
                'image' => $validated['image']
            ]);

            $build->components()->attach($validated['components']);
            DB::commit();
            
            $build->load('components');
            $build->price = $build->setPrice();
            
            return response()->json($build, 201);
        } catch (\Exception $e) {
            DB::rollback();
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}