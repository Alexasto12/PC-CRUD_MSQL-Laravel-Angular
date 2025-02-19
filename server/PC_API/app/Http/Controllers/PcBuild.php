<?php

namespace App\Http\Controllers;

use Illuminate\Validation\ValidationException;
use App\Models\PcBuild as PcBuildModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

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
        try {
            $validated = $request->validate([
                'name' => 'required|string|min:1',
                'components' => 'required|string',
                'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048'
            ]);

            $components = json_decode($validated['components'], true);
            if (empty($components)) {
                return response()->json([
                    'error' => 'At least one component is required'
                ], 422);
            }

            DB::beginTransaction();

            $build = new PcBuildModel();
            $build->name = $validated['name'];

            if ($request->hasFile('image')) {
                $build->image = $request->file('image')->store('builds', 'public');
            }

            $build->save();
            $build->components()->attach($components);
            
            DB::commit();
            
            $build->load('components');
            $build->price = $build->setPrice();

            return response()->json($build, 201);

        } catch (ValidationException $e) {
            return response()->json([
                'error' => $e->errors()
            ], 422);
        } catch (\Exception $e) {
            DB::rollback();
            return response()->json([
                'error' => 'Failed to create build'
            ], 500);
        }
    }

    public function destroy($id)
    {
        $build = PcBuildModel::findOrFail($id);
        $build->components()->detach();
        $build->delete();
        return response()->noContent();
    }

    public function update(Request $request, $id)
    {
        try {
            $validated = $request->validate([
                'name' => 'required|string|min:1',
                'components' => 'required|string',
                'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048'
            ]);

            // Validate components
            $components = json_decode($validated['components'], true);
            if (empty($components)) {
                return response()->json([
                    'error' => 'At least one component is required'
                ], 422);
            }

            DB::beginTransaction();

            $build = PcBuildModel::findOrFail($id);
            $build->name = $validated['name'];

            if ($request->hasFile('image')) {
                if ($build->image) {
                    Storage::disk('public')->delete($build->image);
                }
                $build->image = $request->file('image')->store('builds', 'public');
            }

            $build->save();
            $build->components()->sync($components);
            
            DB::commit();
            
            $build->load('components');
            $build->price = $build->setPrice();

            return response()->json($build);

        } catch (ValidationException $e) {
            return response()->json([
                'error' => $e->errors()
            ], 422);
        } catch (\Exception $e) {
            DB::rollback();
            return response()->json([
                'error' => 'Failed to update build'
            ], 500);
        }
    }
}