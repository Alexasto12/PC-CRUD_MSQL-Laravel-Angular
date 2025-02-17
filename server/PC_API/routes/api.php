<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PcBuild;
use App\Http\Controllers\PcComponent;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// PC Component routes
Route::get('/components', [PcComponent::class, 'index']);
Route::get('/components/{id}', [PcComponent::class, 'show']);
Route::post('/components', [PcComponent::class, 'store']);
Route::put('/components/{id}', [PcComponent::class, 'update']);
Route::delete('/components/{id}', [PcComponent::class, 'destroy']);

// PC Build routes
Route::get('/builds', [PcBuild::class, 'index']);
Route::get('/builds/{id}', [PcBuild::class, 'show']);
Route::get('/builds/{type}', [PcBuild::class, 'showByType']);
Route::post('/builds', [PcBuild::class, 'store']);
Route::put('/builds/{id}', [PcBuild::class, 'update']);
Route::delete('/builds/{id}', [PcBuild::class, 'destroy']);


// PC Build Component Relationship routes
Route::post('/builds/{buildId}/components/{componentId}', [PcBuild::class, 'attachComponent']);
Route::delete('/builds/{buildId}/components/{componentId}', [PcBuild::class, 'detachComponent']);


