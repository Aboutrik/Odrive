<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $table = 'foods';

    protected $fillable = [
        'name',
        'price',
        'stock',
        'prescription_required',
        'type',
        'for_whom', // Pour qui (e.g., adultes, enfants, seniors)
        'pregnancy_compatible', // Compatibilité avec la grossesse
        'breastfeeding_compatible', // Compatibilité avec l'allaitement
        'form', // Forme (e.g., pilule, liquide, crème),
        'expiration_date',
        'short_description',
        "imageid",
        "discountprice",
        "desc",
        "restaurant",
        "category",
        "ingredients",
        "unit",
        "packageCount",
        "weight",
        "canDelivery",
        "stars",
        "published",
        "extras",
        "nutritions",
        "images",
        "type"
    ];

 
    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
