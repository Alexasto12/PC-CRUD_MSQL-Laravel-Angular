<?php

namespace App\Http\Controllers;

use App\Models\PcBuild as PcBuildModel;

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
}