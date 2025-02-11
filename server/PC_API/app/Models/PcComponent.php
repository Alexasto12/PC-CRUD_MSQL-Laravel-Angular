<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class PcComponent extends Model
{
    protected $table = 'pc_component';
    
    protected $fillable = ['name', 'price', 'type'];
    
    public function builds(): BelongsToMany
    {
        return $this->belongsToMany(PcBuild::class);
    }
}
