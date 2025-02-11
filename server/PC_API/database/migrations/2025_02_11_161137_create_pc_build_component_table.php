<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('pc_build_component', function (Blueprint $table) {
            $table->id();
            $table->foreignId('pc_build_id')->constrained('pc_build')->onDelete('cascade');
            $table->foreignId('pc_component_id')->constrained('pc_component')->onDelete('cascade');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('pc_build_component');
    }
};