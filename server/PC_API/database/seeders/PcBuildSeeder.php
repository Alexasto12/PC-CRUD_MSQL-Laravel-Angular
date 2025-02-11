<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PcBuildSeeder extends Seeder
{
    public function run(): void
    {
        // High-End Gaming Build
        $build1 = DB::table('pc_build')->insertGetId([
            'name' => 'Ultimate Gaming Rig',
            'image' => null,
            'created_at' => now(),
            'updated_at' => now()
        ]);

        DB::table('pc_build_component')->insert([
            ['pc_build_id' => $build1, 'pc_component_id' => 1], // i9-13900K
            ['pc_build_id' => $build1, 'pc_component_id' => 6], // RTX 4090
            ['pc_build_id' => $build1, 'pc_component_id' => 11], // Corsair 32GB
            ['pc_build_id' => $build1, 'pc_component_id' => 16], // ASUS ROG
            ['pc_build_id' => $build1, 'pc_component_id' => 21], // Samsung 990
            ['pc_build_id' => $build1, 'pc_component_id' => 26], // Corsair RM1000x
        ]);

        // Mid-Range Gaming Build
        $build2 = DB::table('pc_build')->insertGetId([
            'name' => 'Mid-Range Champion',
            'image' => null,
            'created_at' => now(),
            'updated_at' => now()
        ]);

        DB::table('pc_build_component')->insert([
            ['pc_build_id' => $build2, 'pc_component_id' => 4], // Ryzen 7 7700X
            ['pc_build_id' => $build2, 'pc_component_id' => 10], // RTX 4070 Ti
            ['pc_build_id' => $build2, 'pc_component_id' => 12], // G.Skill 32GB
            ['pc_build_id' => $build2, 'pc_component_id' => 20], // ASUS TUF
            ['pc_build_id' => $build2, 'pc_component_id' => 22], // WD Black
            ['pc_build_id' => $build2, 'pc_component_id' => 27], // EVGA 850
        ]);

        // Workstation Build
        $build3 = DB::table('pc_build')->insertGetId([
            'name' => 'Professional Workstation',
            'image' => null,
            'created_at' => now(),
            'updated_at' => now()
        ]);

        DB::table('pc_build_component')->insert([
            ['pc_build_id' => $build3, 'pc_component_id' => 2], // Ryzen 9 7950X
            ['pc_build_id' => $build3, 'pc_component_id' => 7], // RX 7900 XTX
            ['pc_build_id' => $build3, 'pc_component_id' => 14], // Kingston 64GB
            ['pc_build_id' => $build3, 'pc_component_id' => 17], // MSI MEG
            ['pc_build_id' => $build3, 'pc_component_id' => 24], // FireCuda
            ['pc_build_id' => $build3, 'pc_component_id' => 29], // Seasonic PRIME
        ]);

        // Budget Gaming Build
        $build4 = DB::table('pc_build')->insertGetId([
            'name' => 'Budget Warrior',
            'image' => null,
            'created_at' => now(),
            'updated_at' => now()
        ]);

        DB::table('pc_build_component')->insert([
            ['pc_build_id' => $build4, 'pc_component_id' => 5], // i5-13600K
            ['pc_build_id' => $build4, 'pc_component_id' => 9], // RX 7900 XT
            ['pc_build_id' => $build4, 'pc_component_id' => 13], // Crucial 16GB
            ['pc_build_id' => $build4, 'pc_component_id' => 18], // Gigabyte
            ['pc_build_id' => $build4, 'pc_component_id' => 23], // Crucial P5
            ['pc_build_id' => $build4, 'pc_component_id' => 28], // Dark Power
        ]);

        // Streaming Build
        $build5 = DB::table('pc_build')->insertGetId([
            'name' => 'Stream Master',
            'image' => null,
            'created_at' => now(),
            'updated_at' => now()
        ]);

        DB::table('pc_build_component')->insert([
            ['pc_build_id' => $build5, 'pc_component_id' => 3], // i7-13700K
            ['pc_build_id' => $build5, 'pc_component_id' => 8], // RTX 4080
            ['pc_build_id' => $build5, 'pc_component_id' => 15], // TeamGroup
            ['pc_build_id' => $build5, 'pc_component_id' => 19], // ASRock
            ['pc_build_id' => $build5, 'pc_component_id' => 25], // Corsair MP600
            ['pc_build_id' => $build5, 'pc_component_id' => 30], // Thermaltake
        ]);
    }
}
