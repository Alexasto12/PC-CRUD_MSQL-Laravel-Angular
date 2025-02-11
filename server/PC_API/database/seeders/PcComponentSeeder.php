<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PcComponentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $components = [
            // CPUs
            ['name' => 'Intel Core i9-13900K', 'price' => '589.99', 'type' => 'CPU'],
            ['name' => 'AMD Ryzen 9 7950X', 'price' => '549.99', 'type' => 'CPU'],
            ['name' => 'Intel Core i7-13700K', 'price' => '409.99', 'type' => 'CPU'],
            ['name' => 'AMD Ryzen 7 7700X', 'price' => '349.99', 'type' => 'CPU'],
            ['name' => 'Intel Core i5-13600K', 'price' => '319.99', 'type' => 'CPU'],
            
            // GPUs
            ['name' => 'NVIDIA RTX 4090', 'price' => '1599.99', 'type' => 'GPU'],
            ['name' => 'AMD RX 7900 XTX', 'price' => '999.99', 'type' => 'GPU'],
            ['name' => 'NVIDIA RTX 4080', 'price' => '1199.99', 'type' => 'GPU'],
            ['name' => 'AMD RX 7900 XT', 'price' => '899.99', 'type' => 'GPU'],
            ['name' => 'NVIDIA RTX 4070 Ti', 'price' => '799.99', 'type' => 'GPU'],
            
            // RAM
            ['name' => 'Corsair Vengeance 32GB DDR5', 'price' => '169.99', 'type' => 'RAM'],
            ['name' => 'G.Skill Trident Z5 32GB', 'price' => '189.99', 'type' => 'RAM'],
            ['name' => 'Crucial Ballistix 16GB DDR4', 'price' => '79.99', 'type' => 'RAM'],
            ['name' => 'Kingston FURY 64GB DDR5', 'price' => '299.99', 'type' => 'RAM'],
            ['name' => 'TeamGroup T-Force 32GB DDR5', 'price' => '159.99', 'type' => 'RAM'],
            
            // Motherboards
            ['name' => 'ASUS ROG Maximus Z790', 'price' => '629.99', 'type' => 'Motherboard'],
            ['name' => 'MSI MEG X670E ACE', 'price' => '699.99', 'type' => 'Motherboard'],
            ['name' => 'Gigabyte Z790 AORUS', 'price' => '499.99', 'type' => 'Motherboard'],
            ['name' => 'ASRock X670E Taichi', 'price' => '499.99', 'type' => 'Motherboard'],
            ['name' => 'ASUS TUF Gaming B650', 'price' => '239.99', 'type' => 'Motherboard'],
            
            // Storage
            ['name' => 'Samsung 990 PRO 2TB', 'price' => '169.99', 'type' => 'Storage'],
            ['name' => 'WD Black SN850X 1TB', 'price' => '129.99', 'type' => 'Storage'],
            ['name' => 'Crucial P5 Plus 2TB', 'price' => '159.99', 'type' => 'Storage'],
            ['name' => 'Seagate FireCuda 530 4TB', 'price' => '459.99', 'type' => 'Storage'],
            ['name' => 'Corsair MP600 Pro 2TB', 'price' => '189.99', 'type' => 'Storage'],
            
            // Power Supplies
            ['name' => 'Corsair RM1000x', 'price' => '189.99', 'type' => 'PSU'],
            ['name' => 'EVGA SuperNOVA 850 G6', 'price' => '149.99', 'type' => 'PSU'],
            ['name' => 'be quiet! Dark Power 12', 'price' => '219.99', 'type' => 'PSU'],
            ['name' => 'Seasonic PRIME TX-1000', 'price' => '299.99', 'type' => 'PSU'],
            ['name' => 'Thermaltake Toughpower GF3', 'price' => '179.99', 'type' => 'PSU'],
            
            // Cases
            ['name' => 'Lian Li O11 Dynamic EVO', 'price' => '169.99', 'type' => 'Case'],
            ['name' => 'Fractal Design Torrent', 'price' => '189.99', 'type' => 'Case'],
            ['name' => 'Phanteks Eclipse P500A', 'price' => '149.99', 'type' => 'Case'],
            ['name' => 'Corsair 5000D Airflow', 'price' => '174.99', 'type' => 'Case'],
            ['name' => 'be quiet! Dark Base 700', 'price' => '199.99', 'type' => 'Case'],
        ];
        foreach ($components as $component) {
            DB::table('pc_component')->insert($component);
        }
    }
}
