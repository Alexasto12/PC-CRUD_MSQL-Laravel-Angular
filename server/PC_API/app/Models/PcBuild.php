<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class PcBuild extends Model
{
    protected $table = 'pc_build';
    protected $fillable = ['name', 'image'];

    public function components(): BelongsToMany
    {
        return $this->belongsToMany(PcComponent::class, 'pc_build_component');
    }

    public function setPrice()
    {
        $price = $this->components->sum(function($component) {
            return floatval($component->price);
        });
        return number_format($price + ($price * 0.1), 2, '.', '');
    }
}
